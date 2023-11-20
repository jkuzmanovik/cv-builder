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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useFormStore from "@/hooks/form-hook";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import useStepStore from "@/hooks/step-hook";

const formSchema = z.object({
  network: z.string().min(3).max(20),
  username: z.string().min(3).max(20),
  URL: z.string().url(),
});

const Profile = ({ id }: { id: number }) => {
  const formStore = useFormStore();
  const stepStore = useStepStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      network: "",
      username: "",
      URL: "",
    },
  });

  useEffect(() => {
    return () => {
      delete formStore.formData.profiles[id];
    }
  },[])

  const handleChange = () => {
    const data = form.getValues();
    console.log(formStore.formData);
    formStore.formData.profiles[id] = data;
  };

  return (
    <Form {...form}>
      <form onChange={handleChange}>
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="network"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="URL"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL</FormLabel>
                <FormControl>
                  <Input placeholder="URL" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};

export default Profile;
