"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { countryCodes } from "@/data/country-codes"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Пожалуйста, введите ваше имя",
  }),
  email: z.string().email({
    message: "Пожалуйста, введите корректный email",
  }),
  purpose: z.string().min(2, {
    message: "Пожалуйста, укажите цель участия",
  }),
  message: z.string().optional(),
  phone: z.object({
    countryCode: z.string(),
    number: z.string().regex(/^\d{6,15}$/, {
      message: "Пожалуйста, введите корректный номер телефона",
    }),
  }),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      purpose: "",
      message: "",
      phone: {
        countryCode: "+998",
        number: "",
      },
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    console.log(values)
    setIsSubmitting(false)
  }

  return (
    <div className="w-full max-w-[500px] p-8 rounded-2xl bg-[#015d66] backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Заполните форму, чтобы связаться с нами
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="space-y-2">
                    <label className="text-white">Телефон</label>
                    <div className="flex gap-2">
                      <Select
                        onValueChange={(value) => 
                          form.setValue("phone.countryCode", value)
                        }
                        defaultValue={field.value.countryCode}
                      >
                        <SelectTrigger className="w-[120px] rounded-xl bg-[#002b31] border-none text-white h-[40px]">
                          <SelectValue placeholder="+7" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#002b31] border-white/20">
                          {countryCodes.map((country) => (
                            <SelectItem 
                              key={country.code}
                              value={country.code}
                              className="text-white hover:bg-[#15bacc]"
                            >
                              {country.flag} {country.code}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <div className="flex-1">
                        <FormField
                          control={form.control}
                          name="phone.number"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="w-full rounded-xl bg-[#002b31] border-none text-white placeholder:text-white/60 focus-visible:ring-[#15bacc] h-[40px]"
                                  placeholder="999-999-9999"
                                />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          {["name", "email"].map((fieldName) => (
            <FormField
              key={fieldName}
              control={form.control}
              name={fieldName as keyof z.infer<typeof formSchema>}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="space-y-2">
                      <label className="text-white">
                        {fieldName === "name" ? "Имя" : "Электронная почта"}
                      </label>
                      <Input
                        {...field}
                        value={field.value?.toString() || ""}
                        className="rounded-xl bg-[#002b31] border-none text-white placeholder:text-white/60 focus-visible:ring-[#15bacc]"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          ))}

          <FormField
            control={form.control}
            name="purpose"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="space-y-2">
                    <label className="text-white">Цель участия</label>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="rounded-xl bg-[#002b31] border-none text-white">
                        <SelectValue placeholder="быть посетителем выставки (бесплатно)" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#002b31] border-white/20">
                        <SelectItem value="visitor" className="text-white hover:bg-[#15bacc]">быть посетителем выставки (бесплатно)</SelectItem>
                        <SelectItem value="sell" className="text-white hover:bg-[#15bacc]">продать свою коммерческую недвижимость</SelectItem>
                        <SelectItem value="represent" className="text-white hover:bg-[#15bacc]">представить свою компанию</SelectItem>
                        <SelectItem value="speaker" className="text-white hover:bg-[#15bacc]">стать спикером</SelectItem>
                        <SelectItem value="ticket" className="text-white hover:bg-[#15bacc]">купить билет на форум коммерческой недвижимости</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="space-y-2">
                    <label className="text-white">Сообщение</label>
                    <textarea 
                      {...field}
                      className="w-full min-h-[100px] rounded-xl bg-[#002b31] border-none text-white placeholder:text-white/60 focus-visible:ring-[#15bacc] px-3 py-2"
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-[#15bacc] hover:bg-[#095d66] text-white rounded-full py-6 text-lg font-medium"
          >
            Получить билет
            <span className="ml-2">→</span>
          </Button>
        </form>
      </Form>
    </div>
  )
} 