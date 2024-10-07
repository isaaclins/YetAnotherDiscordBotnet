import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AiOutlinePython } from "react-icons/ai";
import { FaJsSquare } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiGnubash } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { SiRust } from "react-icons/si";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";


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

            <div className="hover:scale-110 transition-transform duration-200 hover:underline">
              <HoverCard >
                <HoverCardTrigger>
                  <a href="/python" >
                    <AiOutlinePython style={{ fontSize: '4rem' }} />
                  </a>
                </HoverCardTrigger>
                <HoverCardContent>
                  Python
                </HoverCardContent>
              </HoverCard>
            </div>

            <div className="hover:scale-110 transition-transform duration-200 hover:underline">
              <HoverCard>
                <HoverCardTrigger>
                  <a href="/go" className="hover:scale-110 transition-transform duration-200 hover:underline">
                    <TbBrandGolang style={{ fontSize: '4rem' }} />
                  </a>
                </HoverCardTrigger>
                <HoverCardContent>
                  Go
                </HoverCardContent>
              </HoverCard>
            </div>

            <div className="hover:scale-110 transition-transform duration-200 hover:underline">
              <HoverCard>
                <HoverCardTrigger>
                  <a href="/rust" className="hover:scale-110 transition-transform duration-200 hover:underline">
                    <SiRust style={{ fontSize: '4rem' }} />
                  </a>
                </HoverCardTrigger>
                <HoverCardContent>
                  Rust
                </HoverCardContent>
              </HoverCard>
            </div>

            <div className="hover:scale-110 transition-transform duration-200 hover:underline">
              <HoverCard>
                <HoverCardTrigger>
                  <a href="/javascript" className="hover:scale-110 transition-transform duration-200 hover:underline">
                    <FaJsSquare style={{ fontSize: '4rem' }} />
                  </a>
                </HoverCardTrigger>
                <HoverCardContent>
                  JavaScript
                </HoverCardContent>
              </HoverCard>
            </div>

            <div className="hover:scale-110 transition-transform duration-200 hover:underline">
              <HoverCard>
                <HoverCardTrigger>
                  <a href="/java" className="hover:scale-110 transition-transform duration-200 hover:underline">
                    <FaJava style={{ fontSize: '4rem' }} />
                  </a>
                </HoverCardTrigger>
                <HoverCardContent>
                  Java
                </HoverCardContent>
              </HoverCard>
            </div>

            <div className="hover:scale-110 transition-transform duration-200 hover:underline">
              <HoverCard>
                <HoverCardTrigger>
                  <a href="/bash" className="hover:scale-110 transition-transform duration-200 hover:underline">
                    <SiGnubash style={{ fontSize: '4rem' }} />
                  </a>
                </HoverCardTrigger>
                <HoverCardContent>
                  Bash
                </HoverCardContent>
              </HoverCard>
            </div>

          </div>
        </CardContent>
      </Card>
    </div >
  );
}