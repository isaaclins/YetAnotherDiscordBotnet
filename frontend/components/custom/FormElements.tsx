import React from "react";
import { Controller, Control } from "react-hook-form";
import { FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface TextInputProps {
    name: string;
    control: Control<any>;
    label: string;
    placeholder?: string;
    type?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ name, control, label, placeholder, type = "text" }) => (
    <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
            <Controller
                name={name}
                control={control}
                render={({ field }) => <Input {...field} placeholder={placeholder} type={type} />}
            />
        </FormControl>
        <FormMessage />
    </FormItem>
);

interface CheckboxInputProps {
    name: string;
    control: Control<any>;
    label: string;
}

export const CheckboxInput: React.FC<CheckboxInputProps> = ({ name, control, label }) => (
    <FormItem>
        <FormControl>
            <Controller
                name={name}
                control={control}
                render={({ field }) => <Checkbox {...field} checked={field.value} onCheckedChange={field.onChange} />}
            />
        </FormControl>
        <FormLabel>{label}</FormLabel>
        <FormMessage />
    </FormItem>
);