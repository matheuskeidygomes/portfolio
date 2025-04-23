import { CircularProgress, TextField, TextareaAutosize } from "@mui/material";
import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../../utils/translations";

export default function ContactForm({
  loading,
  handleChange,
  handleSubmit,
  formData,
  fieldErrors = {},
}: {
  loading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  formData: { name: string; email: string; message: string };
  fieldErrors?: Record<string, string>;
}) {
  const { language } = useLanguage();

  return (
    <form className="flex flex-col gap-5 z-2">
      <div className="flex flex-col gap-2">
        <TextField
          id="name"
          label={translations[language].contactUs.name}
          variant="filled" disabled={loading}
          className="w-full bg-white"
          type="text"
          onChange={handleChange}
          value={formData.name}
          name="name"
          error={!!fieldErrors.name}
        />
        {fieldErrors.name && (
          <span className="text-red-400 text-sm">{translations[language].contactUs[fieldErrors.name as keyof typeof translations[typeof language]["contactUs"]]}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <TextField
          id="email"
          label={translations[language].contactUs.email}
          variant="filled"
          disabled={loading}
          className="w-full bg-white"
          type="email"
          onChange={handleChange}
          value={formData.email} 
          name="email"
          error={!!fieldErrors.email}
        />
        {fieldErrors.email && (
          <span className="text-red-400 text-sm">{translations[language].contactUs[fieldErrors.email as keyof typeof translations[typeof language]["contactUs"]]}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <TextareaAutosize
          id="message"
          placeholder={translations[language].contactUs.message}
          className={`w-full bg-white p-2 outline-none max-h-30`}
          minRows={5}
          maxRows={10}
          disabled={loading}
          onChange={handleChange}
          value={formData.message}
          name="message"
        />
        {fieldErrors.message && (
          <span className="text-red-400 text-sm">{translations[language].contactUs[fieldErrors.message as keyof typeof translations[typeof language]["contactUs"]]}</span>
        )}
      </div>

      <button
        className="flex items-center justify-center self-end bg-black w-30 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md duration-300 hover:gap-3"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? (
          <CircularProgress size={20} style={{ color: "white" }} />
        ) : (
          <>
            {translations[language].contactUs.send}
            <svg
              className="w-5 h-5"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
