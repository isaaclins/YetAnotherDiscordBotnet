import React from 'react';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card";
  
interface LanguageCardProps {
    href: string;
    icon: React.ReactNode;
    label: string;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ href, icon, label }) => {
    return (
        <div className="hover:scale-110 transition-transform duration-75 hover:underline">
            <HoverCard>
                <HoverCardTrigger asChild>
                    <a href={href}>
                        {icon}
                    </a>
                </HoverCardTrigger>
                <HoverCardContent>
                    {label}
                </HoverCardContent>
            </HoverCard>
        </div>
    );
};

export default LanguageCard;