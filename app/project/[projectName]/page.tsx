import { Github, Globe, Layers } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { projectData } from "./projectData";
import { useRouter } from "next/router";
import Project from "@/components/Project";

function page() {
  return <Project />;
}

export default page;
