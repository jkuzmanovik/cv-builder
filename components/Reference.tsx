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

interface ReferenceProps {
  id: number;
  reference: {
    name: string;
    reference: string;
  };
  setReferences: (reference: any) => void;
}
const formSchema = z.object({
  name: z.string().min(3).max(20),
  reference: z.string().min(3).max(20),
});

const Reference = ({ id, reference, setReferences }: ReferenceProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: reference.name,
      reference: reference.reference,
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    let newData = data;
    setReferences((prev: any) => {
      const newReferences = [...prev];
      newReferences[id] = newData;
      return newReferences;
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <Input {...field} placeholder="Name" />
                <FormMessage>{form.formState.errors.name?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="reference"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reference</FormLabel>
                <Input {...field} placeholder="Reference" />
                <FormMessage>
                  {form.formState.errors.reference?.message}
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
  );
};

export default Reference;
