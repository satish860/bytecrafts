import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};


export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Founder of Askjunior.ai
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
         I&rsquo;m Satish, a software developer with 18 years of experience building and scaling high-performance applications to serve hundreds of thousands of users.
         As the Founder and CTO of Askjunior, I lead the development of our AI-powered legal tech products, leveraging my passion for simplifying complex domains through advanced language models. 
         Throughout my career, I&rsquo;ve worked on impactful projects and gained valuable insights into architecting robust, scalable systems. At Askjunior, we&rsquo;re on a mission to make legal information and services more accessible by building cutting-edge AI tools that empower users to navigate the often confusing landscape of law. I believe the legal industry is ripe for disruption, and I&rsquo;m excited to continue pushing the boundaries of what&rsquo;s possible with language AI to democratize access to legal knowledge and build transformative products.
        </p>
      </div>
    </div>
  );
}