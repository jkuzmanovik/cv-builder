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
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import useFormStore from "@/hooks/form-hook";
import { Textarea } from "../ui/textarea";
import useStepStore from "@/hooks/step-hook";

const formSchema = z.object({
  name: z.string(),
  label: z.string(),
  email: z.string().email(),
  phone: z.string().min(3).max(15),
  website: z.string(),
  summary: z.string().min(3).max(200),
  adress: z.string().min(3).max(100),
  postalCode: z.string().min(3).max(100),
  city: z.string().min(3).max(100),
  countryCode: z.string().min(3).max(100),
  region: z.string().min(3).max(100),
});

const Basic = () => {
  const formStore = useFormStore();
  const stepStore = useStepStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: formStore.json.basics?{
      name: formStore.json.basics.name,
      label: formStore.json.basics.label,
      email: formStore.json.basics.email,
      phone: formStore.json.basics.phone,
      website: formStore.json.basics.website,
      summary: formStore.json.basics.summary,
      adress: formStore.json.basics.location.adress,
      postalCode: formStore.json.basics.location.postalCode,
      city: formStore.json.basics.location.city,
      countryCode: formStore.json.basics.location.countryCode,
      region: formStore.json.basics.location.region,
    }:{
        name: "",
        label: "",
        email: "",
        phone: "",
        website: "",
        summary: "",
        adress: "",
        postalCode: "",
        city: "",
        countryCode: "",
        region: "",
    },
  });
  function onSubmit(data: z.infer<typeof formSchema>) {
    const newData = {
      name:data.name,
      label:data.label,
      email:data.email,
      phone:data.phone,
      website:data.website,
      summary:data.summary,
      location:{
        adress:data.adress,
        postalCode:data.postalCode,
        city:data.city,
        countryCode:data.countryCode,
        region:data.region,
      }
    }
    formStore.addField("basics", newData);
  }
  const handleNext = () => {
    stepStore.increaseStep();
  }

  return (
    <Form {...form}>
      <h1 className="text-xl pb-5 font-medium">Basics</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name and Surname" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="label"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Label</FormLabel>
                <FormControl>
                  <Input placeholder="Label" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Type your email"  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Type your phone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>website</FormLabel>
                <FormControl>
                  <Input placeholder="website" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="summary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Summary</FormLabel>
                <FormControl>
                  <Textarea placeholder="Summary" {...field} />
                </FormControl>
                <FormDescription>
                  Write brief summary
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <h1 className="text-xl pb-5 font-medium">Location</h1>
          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="adress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adress</FormLabel>
                  <FormControl>
                    <Input placeholder="Adress" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postal Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Postal Code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="countryCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Country Code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="region"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Region</FormLabel>
                  <FormControl>
                    <Input placeholder="Region" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex justify-between">
        <Button type="submit">Confirm</Button>
        <Button onClick={handleNext}>Next</Button>
        </div>
      </form>
    </Form>
  );
};

export default Basic;
