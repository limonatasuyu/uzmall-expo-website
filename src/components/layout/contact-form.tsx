"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, forwardRef, useImperativeHandle } from "react";
import { countryCodes } from "@/data/country-codes";
import { useTranslation } from "react-i18next";

const contactFormPurposes = ["visitor", "sell", "represent", "speaker", "ticket"];

export interface ContactFormRef {
  setPurpose: (purpose: string) => void;
}

interface ToastMessage {
  message: string;
  type: "success" | "error";
}

export const ContactForm = forwardRef<ContactFormRef>((props, ref) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const { t } = useTranslation();

  const formSchema = z.object({
    name: z.string().min(2, {
      message: t("ContactForm.validation.nameRequired"),
    }),
    email: z.string().email({
      message: t("ContactForm.validation.emailInvalid"),
    }),
    purpose: z.enum(contactFormPurposes as [string, ...string[]], {
      message: t("ContactForm.validation.purposeRequired"),
    }),
    message: z.string().optional(),
    phone: z.object({
      countryCode: z.string(),
      number: z.string().regex(/^\d{6,15}$/, {
        message: t("ContactForm.validation.phoneInvalid"),
      }),
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      purpose: contactFormPurposes[0],
      message: "",
      phone: {
        countryCode: "+998",
        number: "",
      },
    },
  });

  useImperativeHandle(ref, () => ({
    setPurpose: (purpose: string) => {
      form.setValue("purpose", purpose);
    },
  }));

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const formattedPhone = `${values.phone.countryCode}${values.phone.number}`;

      const formData = {
        name: values.name,
        email: values.email,
        phone: formattedPhone,
        purpose: t(`ContactForm.purposes.${values.purpose}.value`),
        message: values.message || "",
        _subject: `New contact form submission - ${values.purpose}`,
        type: (values.purpose === "visitor" || values.purpose === "ticket") ? "visitor" : "lead",
      };

      const emailResponse = await fetch("https://formspree.io/f/xqaeorqd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!emailResponse.ok) {
        throw new Error("Failed to send message");
      }


      const telegramResponse = await fetch("/api/v1/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!telegramResponse.ok) {
        throw new Error("Failed to send message to telegram");
      }


      const leadResponse = await fetch("/api/v1/create-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (leadResponse.ok) {
        setToast({
          message: t("ContactForm.success"),
          type: "success",
        });

        setTimeout(() => {
          window.location.href = "https://t.me/UzMall_Expo";
        }, 4000);
      } else {
        throw new Error("Failed to send message");
      }



    } catch (error) {
      console.error("Error:", error);
      setToast({
        message: t("ContactForm.error"),
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setToast(null);
      }, 4000);
    }
  }

  return (
    <div className="w-full max-w-[500px] p-8 rounded-2xl bg-[#015d66] backdrop-blur-sm">
      {toast && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div
            className={`${
              toast.type === "success" ? "bg-[#15bacc]" : "bg-red-500"
            } text-white px-6 py-4 rounded-xl shadow-lg backdrop-blur-sm border border-white/10 animate-fade-in`}
          >
            {toast.message}
          </div>
        </div>
      )}
      <h2 className="text-3xl font-bold text-white text-center mb-8">{t("ContactForm.title")}</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="space-y-2">
                    <label htmlFor="phone-number" className="text-white">
                      {t("ContactForm.phone")}
                    </label>
                    <div className="flex gap-2">
                      <Select
                        onValueChange={(value) => form.setValue("phone.countryCode", value)}
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
                                  id="phone-number"
                                  {...field}
                                  className="w-full rounded-xl bg-[#002b31] border-none text-white placeholder:text-white/60 focus-visible:ring-[#15bacc] h-[40px]"
                                  placeholder={t("ContactForm.phonePlaceholder")}
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
                      <label htmlFor={fieldName} className="text-white">
                        {t(`ContactForm.${fieldName}`)}
                      </label>
                      <Input
                        id={fieldName}
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
                    <label htmlFor="purpose" className="text-white">
                      {t("ContactForm.purpose")}
                    </label>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger id="purpose" className="rounded-xl bg-[#002b31] border-none text-white">
                        <SelectValue placeholder={t("ContactForm.purposes.visitor")} />
                      </SelectTrigger>
                      <SelectContent className="bg-[#002b31] border-white/20">
                        <SelectItem value="visitor" className="text-white hover:bg-[#15bacc]">
                          {t("ContactForm.purposes.visitor")}
                        </SelectItem>
                        <SelectItem value="sell" className="text-white hover:bg-[#15bacc]">
                          {t("ContactForm.purposes.sell")}
                        </SelectItem>
                        <SelectItem value="represent" className="text-white hover:bg-[#15bacc]">
                          {t("ContactForm.purposes.represent")}
                        </SelectItem>
                        <SelectItem value="speaker" className="text-white hover:bg-[#15bacc]">
                          {t("ContactForm.purposes.speaker")}
                        </SelectItem>
                        <SelectItem value="ticket" className="text-white hover:bg-[#15bacc]">
                          {t("ContactForm.purposes.ticket")}
                        </SelectItem>
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
                    <label htmlFor="message" className="text-white">
                      {t("ContactForm.message")}
                    </label>
                    <textarea
                      id="message"
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
            {t("ContactForm.submit")}
            <span className="ml-2">→</span>
          </Button>
        </form>
      </Form>
    </div>
  );
});

ContactForm.displayName = "ContactForm";
