"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { format, set } from "date-fns";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { Textarea } from "./ui/textarea";

interface LanguageProps {
  id: number;
  language: {
    language: string;
    fluency: string;
  };
  setLanguages: (language: any) => void;
}

const formSchema = z.object({
  language: z.string().min(3).max(20),
  fluency: z.string().min(3).max(20),
});

const Language = ({ id, language, setLanguages }: LanguageProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      language: language.language,
      fluency: language.fluency,
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    let newData = data;
    setLanguages((prev: any) => {
      const newLanguages = [...prev];
      newLanguages[id] = newData;
      return newLanguages;
    });
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Language</FormLabel>
                  <Input {...field} placeholder="Language" />
                  <FormMessage>
                    {form.formState.errors.language?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fluency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fluency</FormLabel>
                  <Input {...field} placeholder="Fluency" />
                  <FormMessage>
                    {form.formState.errors.fluency?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="mt-2">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default Language;
