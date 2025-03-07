"use client";
import { projectData } from "@/app/project/[projectName]/projectData";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/MovingBorders";
import { FaGithub } from "react-icons/fa6";
import Carousel from "@/components/ui/carousel";
import { Separator } from "@radix-ui/react-separator";
import { Badge } from "./ui/badge";
import { Globe, Layers } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { CodeBlock } from "./ui/code-block";
import { RiArrowGoBackFill } from "react-icons/ri";
const Project = () => {
  const pathname = usePathname();
  const arr = pathname?.split("/");

  // Extract the last part of the URL dynamically
  const projectKey = arr[arr.length - 1] as keyof typeof projectData;

  // Use projectKey to access projectData dynamically
  const project = projectData[projectKey];
  return (
    <main className="min-h-screen bg-black-100 text-foreground p-6 relative">
      <Button variant="ghost" className="p-3 px-6 " asChild>
        <a
          href="/"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <RiArrowGoBackFill />
          Take me back
        </a>
      </Button>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight my-10">
            {project?.title}
          </h1>
          <Card>
            <CardContent>
              <Image
                src={project?.img}
                width={800}
                height={500}
                alt="Picture of the author"
              />
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button variant="outline" className="p-3 px-10" asChild>
              <a
                href={project?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            {project && "live" in project && project.live && (
              <Button variant="outline" className="p-3 px-10" asChild>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>

        <Separator />

        {/* Project Overview */}
        <Card className="bg-black-100">
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
            <CardDescription>{project?.desc}</CardDescription>
          </CardHeader>
        </Card>

        {project?.code && (
          <div className="">
            <CodeBlock
              language="jsx"
              filename="App.jsx"
              highlightLines={[9, 14, 18, 30]}
              code={project?.code}
            />
          </div>
        )}

        {/* Tech Stack */}
        <Card className="bg-black-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="w-5 h-5" />
              Technology Stack
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project?.techStack.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <Card className="bg-black-100">
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {project?.details?.map((detail, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {detail}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Project;
