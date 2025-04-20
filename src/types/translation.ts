export interface Translation {
  navbar: {
    home: string;
    about: string;
    contact: string;
  };
  greeting: {
    title: string;
    description: string;
  };
  footer: {
    rights: string;
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
