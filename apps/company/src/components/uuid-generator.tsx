"use client";
import { v4 as uuidv4 } from "uuid";
import { api } from "@/trpc/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  number: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: "Expected number, received a string",
  }),
});

const UUIForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      number: "1",
    },
  });

  const mutate = api.product.addCodes.useMutation({});

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const uuidstemp = [];
    for (let i = 0; i < parseInt(data.number, 10); i++) {
      uuidstemp.push(uuidv4());
    }

    mutate.mutate({
      codes: uuidstemp,
      productId: "62be3187-f278-4977-9a23-a48747fac1a9",
    });

    toast({
      title: "You submitted the following values:",
      description: <pre className="">{JSON.stringify(uuidstemp, null, 2)}</pre>,
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>UUID Counter</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default function UUIDGenerator() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Create new UUID Chip</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>How many UUID?</DialogTitle>
          <DialogDescription>
            After clicking the button, a new UUID will be generated and stored
            in the db.
          </DialogDescription>
        </DialogHeader>
        <UUIForm />
      </DialogContent>
    </Dialog>
  );
}
