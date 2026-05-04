import { FooterLink } from "../types";

export const FOOTER_LINKS: FooterLink[] = [
  {
    name: 'LinkedIn',
    hoverText: 'Professional Profile',
    icon: 'icons/linkedin.svg',
    url: 'https://www.linkedin.com/in/tabsaiyyad/',
  },
  {
    name: 'Behance',
    hoverText: 'Project Showcase',
    icon: 'icons/github.svg', // Reusing GitHub icon as a placeholder for Behance if Behance icon is not available
    url: 'https://www.behance.net/taiyyabsaiyyad1',
  },
  {
    name: 'Instagram',
    hoverText: '@gfxtab',
    icon: 'icons/instagram.svg',
    url: 'https://www.instagram.com/gfxtab/',
  },
  {
    name: 'Email',
    hoverText: 'tabsaiyyad@gmail.com',
    icon: 'icons/night-mode.svg',
    url: 'mailto:tabsaiyyad@gmail.com',
  },
  {
    name: 'Portfolio',
    hoverText: 'Vercel Site',
    icon: 'icons/file.svg',
    url: 'https://gfxtab-portfolio.vercel.app/',
  }
];