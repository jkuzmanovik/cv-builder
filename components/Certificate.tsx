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

interface CertificateProps {
    id: number;
    certificate: {
        name: string;
        date: Date;
        url: string;
        issuer: string;
    };
    setCertificates: (certificate: any) => void;
    }

    const formSchema = z.object({
        name: z.string().min(3).max(20),
        date: z.date(),
        url: z.string().url(),
        issuer: z.string().min(3).max(20),
    });


    const Certificate = ({ id, certificate, setCertificates }: CertificateProps) => {
        const form= useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                name: certificate.name,
                date: certificate.date,
                url: certificate.url,
                issuer: certificate.issuer,
            },
        });

        const handleSubmit = (data: z.infer<typeof formSchema>) => {
            let newData = data;
            setCertificates((prev: any) => {
                const newCertificates = [...prev];
                newCertificates[id] = data;
                return newCertificates;
            });
        }
  return (
    <>
    <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} >
          <div className="grid grid-cols-2 gap-3">
             <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <Input {...field} placeholder="URL" />
                  <FormMessage>
                    {form.formState.errors.name?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
         <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

             <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL</FormLabel>
                  <Input {...field} placeholder="URL" />
                  <FormMessage>
                    {form.formState.errors.url?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="issuer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Issuer</FormLabel>
                  <Input {...field} placeholder="Issuer" />
                  <FormMessage>
                    {form.formState.errors.issuer?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <Button type='submit' className="mt-2">Submit</Button>
        </form>
        </Form>
    </>
  )
}

export default Certificate