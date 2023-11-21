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

interface ProjectProps {
    id: number;
    project: {
        name: string;
        description: string;
        highlights: "";
        keywords: "";
        startDate: Date;
        endDate: Date;
        url: string;
        roles: "";
        entity: string;
        type: string;
    };
    setProjects: (project: any) => void;
    }

    const formSchema = z.object({
        name: z.string().min(3).max(20),
        description: z.string().min(3).max(20),
        highlights: z.string(),
        keywords: z.string(),
        startDate: z.date(),
        endDate: z.date(),
        url: z.string().url(),
        roles: z.string(),
        entity: z.string().min(3).max(20),
        type: z.string().min(3).max(20),
    });




const Project = ({ id, project, setProjects }: ProjectProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: project.name,
            description: project.description,
            highlights: project.highlights? (project.highlights as string[]).join("\n") : "",
            keywords: project.keywords? (project.keywords as string[]).join("\n") : "",
            startDate: project.startDate,
            endDate: project.endDate,
            url: project.url,
            roles: project.roles? (project.roles as string[]).join("\n") : "",
            entity: project.entity,
            type: project.type,
        },
    });

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        let newData = data;
        newData.highlights = data.highlights.split("\n") as any;
        newData.keywords = data.keywords.split("\n") as any;
        newData.roles = data.roles.split("\n") as any;
        setProjects((prev: any) => {
            const newProjects = [...prev];
            newProjects[id] = data;
            return newProjects;
        });
    }


  return (
    <>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
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
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <Textarea {...field} />
                  <FormMessage>
                    {form.formState.errors.description?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="highlights"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Highlights</FormLabel>
                  <Textarea {...field} />
                  <FormMessage>
                    {form.formState.errors.highlights?.message}
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
                  <Textarea {...field} />
                  <FormMessage>
                    {form.formState.errors.keywords?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
         <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Start date</FormLabel>
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
              <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />


                
         <FormField
          control={form.control}
          name="endDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>End Date</FormLabel>
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
              <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Url</FormLabel>
                  <Input {...field} />
                  <FormMessage>
                    {form.formState.errors.url?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="roles"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>roles</FormLabel>
                  <Textarea {...field} />
                  <FormMessage>
                    {form.formState.errors.roles?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
                    <FormField
              control={form.control}
              name="entity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Entity</FormLabel>
                  <Input {...field} />
                  <FormMessage>
                    {form.formState.errors.entity?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
        <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Input {...field} />
                  <FormMessage>
                    {form.formState.errors.type?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <Button type="submit" className="m-3">Confirm </Button>
                </form>
            </Form>
    </>
  )
}

export default Project