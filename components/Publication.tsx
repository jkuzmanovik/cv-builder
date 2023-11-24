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

interface PublicationProps {
  id: number;
  publication: {
    name: string;
    publisher: string;
    releaseDate: Date;
    website: string;
    summary: string;
  };
  setPublications: (publication: any) => void;
}

const formSchema = z.object({
  name: z.string(),
  publisher: z.string(),
  releaseDate: z.date(),
  website: z.string().url(),
  summary: z.string(),
});

const Publication = ({
  id,
  publication,
  setPublications,
}: PublicationProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: publication.name,
      publisher: publication.publisher,
      releaseDate: publication.releaseDate,
      website: publication.website,
      summary: publication.summary,
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    let newData = data;
    setPublications((prev: any) => {
      const newPublications = [...prev];
      newPublications[id] = data;
      return newPublications;
    });
  };

  return (
    <>
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
                  <FormMessage>
                    {form.formState.errors.name?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="publisher"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Publisher</FormLabel>
                  <Input {...field}  placeholder="Publisher"/>
                  <FormMessage>
                    {form.formState.errors.publisher?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="releaseDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Release date</FormLabel>
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
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <Input {...field} placeholder="Website" />
                  <FormMessage>
                    {form.formState.errors.website?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="summary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Summary</FormLabel>
                  <Textarea {...field} placeholder="Summary" />
                  <FormMessage>
                    {form.formState.errors.summary?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="mt-2">Submit</Button>
        </form>
      </Form>
    </>
  );
};

export default Publication;
