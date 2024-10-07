import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { TextInput, CheckboxInput, RadioInput } from "@/components/custom/FormElements";
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const FormSchema = z.object({
    token: z.string().nonempty(),
    ScreenshotModule: z.boolean(),
    additionalCheckbox: z.boolean(),
    radioOption: z.string(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

interface FormComponentProps {
    onSubmit: SubmitHandler<FormSchemaType>;
    liveData: FormSchemaType;
    setLiveData: React.Dispatch<React.SetStateAction<FormSchemaType>>;
}

const FormComponent: React.FC<FormComponentProps> = ({ onSubmit, liveData, setLiveData }) => {
    const form = useForm<FormSchemaType>({
        defaultValues: {
            token: '',
            ScreenshotModule: false,
            additionalCheckbox: false,
            radioOption: '',
        },
        resolver: zodResolver(FormSchema),
    });

    const watchedValues = form.watch();

    useEffect(() => {
        if (JSON.stringify(liveData) !== JSON.stringify(watchedValues)) {
            setLiveData(watchedValues);
        }
    }, [watchedValues, liveData]);

    return (
        <div >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} method="POST">
                    <TextInput name="token" control={form.control} label="Token" placeholder="Discord Bot Token" />
                    <CheckboxInput name="ScreenshotModule" control={form.control} label="Screenshot Module" />
                    <CheckboxInput name="additionalCheckbox" control={form.control} label="Additional Checkbox" />
                    <RadioInput name="radioOption" control={form.control} label="Radio Options" options={[
                        { value: 'option1', label: 'Option 1' },
                        { value: 'option2', label: 'Option 2' },
                    ]} />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
            <div>
                <Alert >
                    <Terminal />
                    <AlertTitle>Live Data</AlertTitle>
                    <AlertDescription>
                        <pre >{JSON.stringify(liveData, null, 2)}</pre>
                    </AlertDescription>
                </Alert>
            </div>
        </div>
    );
};

export default FormComponent;