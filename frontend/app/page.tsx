import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AiOutlinePython } from "react-icons/ai";
import { FaJsSquare } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiGnubash } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { SiRust } from "react-icons/si";

import LanguageCard from "@/components/custom/languageCard";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Card>
        <CardHeader>
          <CardTitle>What language would you like to use?</CardTitle>
          <CardDescription>Please select one of the followings:</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <LanguageCard href="/pythonBuilderUI" icon={<AiOutlinePython style={{ fontSize: '5rem' }} />} label="Python" />
            <LanguageCard href="/go" icon={<TbBrandGolang style={{ fontSize: '5rem' }} />} label="Golang" />
            <LanguageCard href="/rust" icon={<SiRust style={{ fontSize: '5rem' }} />} label="Rust" />
            <LanguageCard href="/javascript" icon={<FaJsSquare style={{ fontSize: '5rem' }} />} label="JavaScript" />
            <LanguageCard href="/java" icon={<FaJava style={{ fontSize: '5rem' }} />} label="Java" />
            <LanguageCard href="/bash" icon={<SiGnubash style={{ fontSize: '5rem' }} />} label="Bash" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
