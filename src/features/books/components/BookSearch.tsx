"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { XIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { useDebounce } from "~/hooks/useDebounce";
import { cn } from "~/lib/utils";

const searchFormSchema = z.object({
    searchQuery: z.string().optional(),
});

export function BookSearch({ className }: { className?: string }) {
    const form = useForm({
        resolver: zodResolver(searchFormSchema),
        defaultValues: {
            searchQuery: "",
        },
    });
    const router = useRouter();
    const pathname = usePathname();
    const debouncedSearchValue = useDebounce(form.watch("searchQuery"), 300);

    useEffect(() => {
        const newParams = new URLSearchParams();
        if (debouncedSearchValue) {
            newParams.set("search", debouncedSearchValue);
        } else {
            newParams.delete("search");
        }
        router.push(`${pathname}?${newParams.toString()}`);
    }, [debouncedSearchValue, router, pathname]);

    return (
        <div className={cn("relative w-1/2", className)}>
            <Form {...form}>
                <form>
                    <FormField
                        name="searchQuery"
                        control={form.control}
                        render={({ field }) => (
                            <>
                                <Input
                                    className="w-full text-xs lg:text-sm"
                                    placeholder="Search Books"
                                    value={field.value}
                                    onChange={(e) => {
                                        field.onChange(e.target.value);
                                    }}
                                />
                                {field.value && field.value.length > 0 && (
                                    <XIcon
                                        size={16}
                                        color="gray"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 duration-300 transition-all"
                                        onClick={() => {
                                            field.onChange("");
                                        }}
                                    />
                                )}
                            </>
                        )}
                    />
                </form>
            </Form>
        </div>
    );
}
