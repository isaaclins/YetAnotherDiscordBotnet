import React, { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodSchema } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { TextInput, CheckboxInput, RadioInput } from "@/components/custom/FormElements";
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface FormComponentProps {
    onSubmit: SubmitHandler<any>;
    liveData: any;
    setLiveData: React.Dispatch<React.SetStateAction<any>>;
    fields: { [key: string]: string | boolean | number };
    schema: ZodSchema;
}

const FormComponent: React.FC<FormComponentProps> = ({ onSubmit, liveData, setLiveData, fields, schema }) => {
    const form = useForm({
        defaultValues: fields,
        resolver: zodResolver(schema),
    });

    const watchedValues = form.watch();

    useEffect(() => {
        if (JSON.stringify(liveData) !== JSON.stringify(watchedValues)) {
            setLiveData(watchedValues);
        }
    }, [watchedValues, liveData]);

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} method="POST">
                    {Object.keys(fields).map((key) => {
                        const value = fields[key];
                        if (typeof value === "string") {
                            return <TextInput key={key} name={key} control={form.control} label={key} placeholder={key} />;
                        } else if (typeof value === "boolean") {
                            return <CheckboxInput key={key} name={key} control={form.control} label={key} />;
                        } else if (typeof value === "number") {
                            return <TextInput key={key} name={key} control={form.control} label={key} placeholder={key} type="number" />;
                        }
                        return null;
                    })}
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
            <div>
                <Alert>
                    <Terminal />
                    <AlertTitle>Live Data</AlertTitle>
                    <AlertDescription>
                        <pre>{JSON.stringify(liveData, null, 2)}</pre>
                    </AlertDescription>
                </Alert>
            </div>
        </div>
    );
};

export default FormComponent;