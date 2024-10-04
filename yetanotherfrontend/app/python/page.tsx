"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { AlertCircle } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
const FormSchema = z.object({
    username: z.string().nonempty(),
});

const Page: React.FC = () => {
    const form = useForm({
        defaultValues: {
            username: '',
        },
        resolver: zodResolver(FormSchema),
    });

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            console.log(data);
            const response = await fetch('/api/save-settings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                console.error('Failed to save settings.');
            } else {
                console.log('Settings saved successfully.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} method="POST" className="w-2/3 space-y-6 flex flex-col items-center">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <Input {...field} placeholder="Username" className="w-full sm:w-1/2" />
                        )}
                    />
                    <Button type="submit" className="w-full sm:w-1/2">Save</Button>
                </form>
            </Form>
        </div>
    );
};

export default Page;