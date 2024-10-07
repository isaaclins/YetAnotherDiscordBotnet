import React from "react";
import { Controller, Control } from "react-hook-form";
import { FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface TextInputProps {
    name: string;
    control: Control<any>;
    label: string;
    placeholder?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ name, control, label, placeholder }) => (
    <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
            <Controller
                name={name}
                control={control}
                render={({ field }) => <Input {...field} placeholder={placeholder} />}
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

interface RadioOption {
    value: string;
    label: string;
}

interface RadioInputProps {
    name: string;
    control: Control<any>;
    label: string;
    options: RadioOption[];
}

export const RadioInput: React.FC<RadioInputProps> = ({ name, control, label, options }) => (
    <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <RadioGroup value={field.value} onValueChange={field.onChange}>
                        {options.map((option) => (
                            <RadioGroupItem key={option.value} value={option.value}>
                                {option.label}
                            </RadioGroupItem>
                        ))}
                    </RadioGroup>
                )}
            />
        </FormControl>
        <FormMessage />
    </FormItem>
);
