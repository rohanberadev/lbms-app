"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SlidersHorizontalIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem } from "~/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select";

const bookFilterSchema = z.object({
    filterQuery: z.string().optional(),
});

export function BookFilterForm({
    selectItems,
}: {
    selectItems: Array<{ label: string; value: string }>;
}) {
    const searchParams = useSearchParams();
    const form = useForm({
        resolver: zodResolver(bookFilterSchema),
        defaultValues: {
            filterQuery: searchParams.get("filter") ?? selectItems[0].value,
        },
    });
    const router = useRouter();
    const pathname = usePathname();

    const onSubmit = (data: z.infer<typeof bookFilterSchema>) => {
        const newParams = new URLSearchParams();
        if (data.filterQuery) newParams.set("filter", data.filterQuery);
        return router.push(`${pathname}?${newParams.toString()}`);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    name="filterQuery"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <Select
                                value={field.value}
                                onValueChange={(value) => {
                                    field.onChange(value);
                                    form.handleSubmit(onSubmit)();
                                }}
                            >
                                <SelectTrigger className="w-[180px] max-sm:w-[60px]">
                                    <div className="max-sm:hidden inline-block">
                                        <SelectValue placeholder="Filters" />
                                    </div>
                                    <SlidersHorizontalIcon className="hidden max-sm:inline-flex" />
                                </SelectTrigger>
                                <SelectContent>
                                    {selectItems.map((selectItem, index) => (
                                        <SelectItem
                                            key={index}
                                            value={selectItem.value}
                                        >
                                            {selectItem.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
}
