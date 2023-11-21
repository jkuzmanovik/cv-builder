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
import useFormStore from "@/hooks/form-hook";
import useStepStore from "@/hooks/step-hook";
import { useEffect, useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const formSchema = z.object({
  coverLetter: z.string().min(3).max(1000),
});

const CoverLetter = () => {
  const formStore = useFormStore();
  const stepStore = useStepStore();
  useEffect(() => {
    console.log(formStore.json);
  }, [formStore.json]);

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    formStore.addField("coverLetter", data);
  };

  const handleBack = () => {
    stepStore.decreaseStep();
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      coverLetter: "",
    },
  });

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="coverLetter"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cover Letter</FormLabel>
                <FormControl>
                  <Textarea placeholder="Cover Letter" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button type="submit">Confirm</Button>
          </div>
        </form>
      </Form>
      <Button onClick={handleBack}>Back</Button>
    </>
  );
};

export default CoverLetter;
