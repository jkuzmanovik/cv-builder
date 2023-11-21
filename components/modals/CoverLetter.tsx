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

const formSchema = z.object({
  coverLetter:z.string()
});

const CoverLetter = () => {
  const formStore = useFormStore();
  const stepStore = useStepStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      coverLetter: "",
    },
  });


  return (
    <div>CoverLetter</div>
  )
}

export default CoverLetter