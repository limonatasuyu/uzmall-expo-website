import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ContactForm } from "../layout/contact-form";
import type { ContactFormRef } from "../layout/contact-form";
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
			<DialogContent className="rounded-2xl w-full sm:max-w-[500px] overflow-y-auto p-0">
				<div className="">
					<ContactForm ref={contactFormRef} />
				</div>
			</DialogContent>
		</Dialog>
	);
}
