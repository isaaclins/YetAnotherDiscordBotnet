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
            const response = await fetch('/api/save-settings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to save settings.');
            }

            alert('Settings saved successfully.');
        } catch (error) {
            console.error(error);
            alert('Failed to save settings.');
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <Input {...field} placeholder="Username" />
                    )}
                />
                <Button type="submit">Save</Button>
            </form>
        </Form>
    );
};

export default Page;