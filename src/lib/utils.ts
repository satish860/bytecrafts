import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const siteConfig = {
  name: "ByteCrafts",
  url: "https://example.com",
  description:
    "Personal Blog of Satish - Writes and Teaches about Technology in General",
  author: "Satish",
  links: {
    twitter: "https://twitter.com/satish1v",
    github: "https://github.com/satish860",
    LinkedIn: "https://www.linkedin.com/in/satish1v/",
  },
};

export type SiteConfig = typeof siteConfig;