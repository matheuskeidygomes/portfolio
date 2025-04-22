export interface Translation {
  navbar: {
    home: string;
    about: string;
    contact: string;
    resume: string;
    projects: string;
  };
  greeting: {
    title: string;
    description: string;
  };
  contactUs: {
    title: string;
    description: string;
    validationError: string;
    successMessage: string;
    name: string;
    email: string;
    message: string;
    send: string;
    nameRequired: string;
    emailRequired: string;
    messageRequired: string;
    emailInvalid: string;
    defaultError: string;
  };
  footer: {
    rights: string;
  };
  resume: {
    title: {
      personal: string;
      education: string;
      languages: string;
      skills: string;
      experience: string;
      usefulLinks: string;
      cloud: string;
      messaging: string;
      devops: string;
      frontend: string;
      backend: string;
      database: string;
      attachments: string;
      resume: string;
      resumeFile: string;
      age: string;
      location: string;
      email: string;
      phone: string;
    };
    personal: {
      age: string;
      location: string;
      email: string;
      phone: string;
      role: string;
    };
    education: {
      university: string;
      course: string;
      graduation: string;
    };
    languages: {
      portuguese: string;
      english: string;
    };
    skills: {
      frontend: string;
      backend: string;
      database: string;
      cloud: string;
      messaging: string;
      devops: string;
    };
    experience: {
      [key: string]: {
        company: string;
        role: string;
        period: string;
        description: string;
        role2?: string;
        period2?: string;
        location: string;
      };
    };
  };
  trainer: {
    options: {
      about: string;
      objective: string;
      experience: string;
      hobbies: string;
      technologies: string;
      languages: string;
    };
  };
  banner: {
    messages: {
      welcome: {
        [key: number]: string;
      };
      about: {
        [key: number]: string;
      };
      experience: {
        [key: number]: string;
      };
      hobbies: {
        [key: number]: string;
      };
      languages: {
        [key: number]: string;
      };
      technologies: {
        [key: number]: string;
      };
      objective: {
        [key: number]: string;
      };
    };
  };
}
