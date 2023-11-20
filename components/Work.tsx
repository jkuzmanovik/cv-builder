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


interface WorkProps {
    id: number;
    work: {
        name: string;
        location: string;
        description: string;
        position: string;
        url: string;
        startDate: string;
        endDate: string;
        summary: string;
        highlights: "";
        keywords: "";
    };
    setWorks: any;
}

const formSchema = z.object({
    name: z.string().min(3).max(20),
    location: z.string().min(3).max(20),
    description: z.string().min(3).max(20),
    position: z.string().min(3).max(20),
    url: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    summary: z.string().min(3).max(20),
    highlights: z.string(),
    keywords: z.string(),
});

const Work = ({ id, work, setWorks }: WorkProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: work.name,
            location: work.location,
            description: work.description,
            position: work.position,
            url: work.url,
            startDate: work.startDate,
            endDate: work.endDate,
            summary: work.summary,
            highlights: work.highlights,
            keywords: work.keywords,
        }
    });

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data)
        setWorks((prev: any) => {
            const newWorks = [...prev];
            newWorks[id] = data;
            return newWorks;
        })
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>

        <div className="grid grid-cols-2 gap-3">
            <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                </FormItem>
            )} />
            <FormField control={form.control} name="location" render={({ field }) => (
                <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                        <Input placeholder="Location" {...field} />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                </FormItem>
            )} />
            <FormField control={form.control} name="description" render={({ field }) => (
                <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                        <Input placeholder="Description" {...field} />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                </FormItem>
            )} />
            <FormField control={form.control} name="position" render={({ field }) => (
                <FormItem>
                    <FormLabel>Position</FormLabel>
                    <FormControl>
                        <Input placeholder="Position" {...field} />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                </FormItem>
            )} />
            <FormField control={form.control} name="url" render={({ field }) => (
                <FormItem>
                    <FormLabel>URL</FormLabel>
                    <FormControl>
                        <Input placeholder="url" {...field} />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                </FormItem>
            )} />
            <FormField control={form.control} name="startDate" render={({ field }) => (
                <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
                        <Input placeholder="Start Date" {...field} />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                </FormItem>
            )} />
            <FormField control={form.control} name="endDate" render={({ field }) => (
                <FormItem>
                    <FormLabel>End Date</FormLabel>
                    <FormControl>
                        <Input placeholder="End Date" {...field} />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                </FormItem>
            )} />
            <FormField control={form.control} name="summary" render={({ field }) => (
                <FormItem>
                    <FormLabel>Summary</FormLabel>
                    <FormControl>
                        <Input placeholder="Summary" {...field} />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                </FormItem>
            )} />
            <FormField control={form.control} name="highlights" render={({ field }) => (
                <FormItem>
                    <FormLabel>Highlights</FormLabel>
                    <FormControl>
                        <Input placeholder="Highlights" {...field} />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                </FormItem>
            )} />
            <FormField control={form.control} name="keywords" render={({ field }) => (
                <FormItem>
                    <FormLabel>Keywords</FormLabel>
                    <FormControl>
                        <Input placeholder="Keywords" {...field} />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                </FormItem>
            )} />
        </div>
        <Button type="submit">Confirm</Button>
                </form>
            </Form>
    )
}

export default Work