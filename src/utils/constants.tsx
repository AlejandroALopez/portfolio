export interface IContactLinks {
  github: string;
  linkedIn: string;
  email: string;
}

export const contactLinks: IContactLinks = {
  github: "https://github.com/AlejandroALopez",
  linkedIn: "https://www.linkedin.com/in/alejandro-a-lopez",
  email: "alejandro.a.lopez.0907@gmail.com"
}

// Utility function to scroll to a specific section by its ID. Returns to landing page if not there already.
export const scrollToSection = (id: string) => {
  if (window.location.pathname !== '/') {
    window.location.href = `/#${id}`;
    return;
  }

  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};