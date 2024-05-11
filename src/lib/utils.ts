import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Post } from "#site/content";

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


export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function sortPosts(posts: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}
