"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Page: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>("python");
    const [LanguageComponent, setLanguageComponent] = useState<React.ComponentType | null>(null);
    const [languages, setLanguages] = useState<string[]>([]);

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const response = await fetch('/api/languages');
                if (response.ok) {
                    const data = await response.json();
                    setLanguages(data);
                } else {
                    console.error('Failed to fetch languages');
                }
            } catch (error) {
                console.error('Error fetching languages:', error);
            }
        };
        fetchLanguages();
    }, []);

    useEffect(() => {
        const loadComponent = async () => {
            const component = await dynamic(() => import(`./pages/${selectedLanguage}.tsx`));
            setLanguageComponent(() => component);
        };
        loadComponent();
    }, [selectedLanguage]);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Botnet Customization</CardTitle>
                    <CardDescription>Customize and compile your very own Botnet.</CardDescription>
                </CardHeader>
                <CardContent className="grid w-full justify-center items-center gap-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">{selectedLanguage}</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Select Language</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value={selectedLanguage} onValueChange={setSelectedLanguage}>
                                {languages.map(language => (
                                    <DropdownMenuRadioItem key={language} value={language}>
                                        {language.charAt(0).toUpperCase() + language.slice(1)}
                                    </DropdownMenuRadioItem>
                                ))}
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {LanguageComponent && <LanguageComponent />}
                </CardContent>
            </Card>
        </div>
    );
};

export default Page;