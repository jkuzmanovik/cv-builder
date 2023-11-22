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

interface EducationProps {
  id: number;
  education: {
    institution: string;
    website: string;
    area: string;
    studyType: string;
    startDate: Date;
    endDate: Date;
    score: string;
    courses: "";
  };
  setEducation: (education: any) => void;
}

const formSchema = z.object({
  institution: z.string().min(3).max(20),
  website: z.string().url(),
  area: z.string().min(3).max(20),
  studyType: z.string().min(3).max(20),
  startDate: z.date(),
  endDate: z.date(),
  score: z.string().max(2),
  courses: z.string(),
});

const Education = ({ id, education, setEducation }: EducationProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      institution: education.institution,
      website: education.website,
      area: education.area,
      studyType: education.studyType,
      startDate: education.startDate,
      endDate: education.endDate,
      score: education.score,
      courses: education.courses
        ? (education.courses as string[]).join("\n")
        : "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    let newData = data;
    newData.courses = data.courses.split("\n") as any;
    setEducation((prev: any) => {
      const newEducations = [...prev];
      newEducations[id] = data;
      return newEducations;
    });
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="institution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institution</FormLabel>
                  <Input {...field} />
                  <FormMessage>
                    {form.formState.errors.institution?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>website</FormLabel>
                  <Input {...field} />
                  <FormMessage>
                    {form.formState.errors.website?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="area"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Area</FormLabel>
                  <Input {...field} />
                  <FormMessage>
                    {form.formState.errors.area?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="studyType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Study Type</FormLabel>
                  <Input {...field} />
                  <FormMessage>
                    {form.formState.errors.studyType?.message}
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
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="score"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Score</FormLabel>
                  <Input {...field} />
                  <FormMessage>
                    {form.formState.errors.score?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="courses"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Courses</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type every course in new line"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
};

export default Education;
