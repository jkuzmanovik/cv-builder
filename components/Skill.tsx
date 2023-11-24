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

interface SkillProps {
  id: number;
  skill: {
    name: string;
    level: string;
    keywords: "";
  };
  setSkills: (skill: any) => void;
}

const formSchema = z.object({
  name: z.string(),
  level: z.string(),
  keywords: z.string(),
});

const Skill = ({ id, skill, setSkills }: SkillProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: skill.name,
      level: skill.level,
      keywords: skill.keywords ? (skill.keywords as string[]).join("\n") : "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    let newData = data;
    newData.keywords = data.keywords.split("\n") as any;
    setSkills((prev: any) => {
      const newSkills = [...prev];
      newSkills[id] = newData;
      return newSkills;
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
              name="level"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Level</FormLabel>
                  <Input {...field} placeholder="Level" />
                  <FormMessage>
                    {form.formState.errors.level?.message}
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
                  <Textarea {...field} placeholder="Type every keywords in new line" />
                  <FormMessage>
                    {form.formState.errors.keywords?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="mt-3">Submit</Button>
        </form>
      </Form>
    </>
  );
};

export default Skill;
