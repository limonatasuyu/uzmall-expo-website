import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ContactForm } from "./contact-form";
import type { ContactFormRef } from "./contact-form";

interface ContactFormModalProps {
	trigger: React.ReactNode;
	contactFormRef?: React.RefObject<ContactFormRef>;
}

export function ContactFormModal({
	trigger,
	contactFormRef,
}: ContactFormModalProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent className="w-full sm:max-w-[500px] overflow-y-auto">
				<div className="mt-8">
					<ContactForm ref={contactFormRef} />
				</div>
			</DialogContent>
		</Dialog>
	);
}
