"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useTranslation } from "react-i18next"

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name is required",
  }),
  phone: z.string().regex(/^\d{6,15}$/, {
    message: "Please enter a valid phone number",
  }),
  position: z.string().min(2, {
    message: "Position is required",
  }),
  company: z.string().min(2, {
    message: "Company name is required",
  }),
  description: z.string().min(10, {
    message: "Please provide a brief description of your company",
  }),
})

export function CREAwardsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { t } = useTranslation()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      position: "",
      company: "",
      description: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      console.log(values)
      // Redirect to Telegram channel
      window.location.href = "https://t.me/uzmall_uz"
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const fields = [
    { name: 'fullName', label: t('creAwards.form.fullName') },
    { name: 'phone', label: t('creAwards.form.phone') },
    { name: 'position', label: t('creAwards.form.position') },
    { name: 'company', label: t('creAwards.form.company') },
    { name: 'description', label: t('creAwards.form.description') },
  ]

  return (
    <div className="w-full max-w-[500px] p-8 rounded-2xl bg-[#015d66] backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        {t('creAwards.contactTitle')}
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {fields.map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name as keyof z.infer<typeof formSchema>}
              render={({ field: formField }) => (
                <FormItem>
                  <FormControl>
                    <div className="space-y-2">
                      <label htmlFor={field.name} className="text-white">
                        {field.label}
                      </label>
                      <Input
                        id={field.name}
                        {...formField}
                        className="rounded-xl bg-[#002b31] border-none text-white placeholder:text-white/60 focus-visible:ring-[#15bacc]"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          ))}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#15bacc] hover:bg-[#095d66] text-white rounded-full py-6 text-lg font-medium"
          >
            {t("ContactForm.submit")}
            <span className="ml-2">→</span>
          </Button>
        </form>
      </Form>
    </div>
  )
} 