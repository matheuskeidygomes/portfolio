import { useState } from "react";
import { Alert } from "@mui/material";
import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../../utils/translations";
import emailjs from "@emailjs/browser";
import ContactForm from "../contactForm";
import MarioRoom from "/assets/background-room.gif";

export default function MarioRoomBanner() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.value });
    
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const updated = {...prev};
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError("");
    setFieldErrors({});
    setSuccess(false);
    setLoading(true);

    try {
      const validationErrors = validateForm();

      if (Object.keys(validationErrors).length > 0) {
        setFieldErrors(validationErrors);
        throw new Error("validationError");
      }

      emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID as string,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID as string,
        formData,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY as string
      );

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "defaultError");
    } finally {
      setLoading(false);
    }
  };

  const validateForm = (): Record<string, string> => {
    const errors: Record<string, string> = {};
    
    if (formData.name.trim() === "") {
      errors.name = "nameRequired";
    }
    
    if (formData.email.trim() === "") {
      errors.email = "emailRequired";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "emailInvalid";
    }
    
    if (formData.message.trim() === "") {
      errors.message = "messageRequired";
    }
    
    return errors;
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between w-full">

      {/* Left side Container */}
      <div className="flex w-full lg:w-[55%]">
        <img src={MarioRoom} alt="Mario Room" className="w-full h-full object-cover" />
      </div>

      {/* Right side Container */}
      <div className="flex flex-col w-full gap-5 p-10 lg:w-[45%]">
        <div className="flex flex-col gap-6">
          <h1 className="text-white text-3xl font-bold">{translations[language].contactUs.title}</h1>
          <p className="text-white">{translations[language].contactUs.description}</p>
        </div>

        {/* Success Message */}
        {success && <Alert severity="success">{translations[language].contactUs.successMessage}</Alert>}

        {/* Error Message */}
        {error && <Alert severity="error">{translations[language].contactUs[error as keyof typeof translations[typeof language]["contactUs"]]}</Alert>}

        {/* Form Container */}
        <ContactForm 
          loading={loading} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit} 
          formData={formData}
          fieldErrors={fieldErrors}
        />
      </div>
    </div>
  )
}
