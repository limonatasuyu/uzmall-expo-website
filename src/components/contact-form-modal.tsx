import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ContactForm } from "./contact-form";
import type { ContactFormRef } from "./contact-form";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React from "react";

interface ContactFormModalProps {
	trigger: React.ReactNode;
	contactFormRef?: React.RefObject<ContactFormRef>;
}

export function ContactFormModal({
	trigger,
	contactFormRef,
}: ContactFormModalProps) {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<VisuallyHidden>
				<DialogTitle>Contact Form</DialogTitle>
			</VisuallyHidden>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent className="w-full sm:max-w-[500px] overflow-y-auto">
				<div className="mt-8">
					<ContactForm ref={contactFormRef} />
				</div>
			</DialogContent>
		</Dialog>
	);
}
