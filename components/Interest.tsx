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

interface InterestProps {
    id: number;
    interest: {
        name: string;
        keywords: "";
    };
    setInterests: (interest: any) => void;
    }

const formSchema = z.object({
    name: z.string().min(3).max(20),
    keywords: z.string(),
});


const Interest = ({ id, interest, setInterests }: InterestProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: interest.name,
            keywords: interest.keywords ? (interest.keywords as string[]).join("\n") : "",
        },
    });

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        let newData = data;
        newData.keywords = data.keywords.split("\n") as any;
        setInterests((prev: any) => {
            const newInterests = [...prev];
            newInterests[id] = newData;
            return newInterests;
        });

        return <h1>ok</h1>;
    }

  return (
    <>
        <Form {...form}>
            <form onSubmit = {form.handleSubmit(handleSubmit)}>

          <div className="grid grid-cols-2 gap-3">

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <Input {...field} />
                  <FormMessage>
                    {form.formState.errors.name?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="keywords"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keywords</FormLabel>
                  <Textarea {...field} placeholder="Type word by word" />
                  <FormMessage>
                    {form.formState.errors.keywords?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

          </div>
          <Button type="submit">Submit</Button>
                </form>
        </Form>
    </>
  )
}

export default Interest