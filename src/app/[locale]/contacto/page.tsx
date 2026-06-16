import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { isLocale } from "@/lib/i18n/config";
import { getContactPageData, getSiteSettings, mapContactContent, mergePracticeSettings } from "@/lib/cms/content";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

const content = {
  es: {
    title: "Conversemos sobre tu proceso",
    mapTitle: "Mapa de ubicacion",
    whatsappFieldLabel: "WhatsApp",
    emailFieldLabel: "Correo",
    addressFieldLabel: "Direccion",
    scheduleFieldLabel: "Horario",
    formTitle: "Escribeme directamente",
    formIntro: "Si prefieres dejar un primer mensaje por escrito, completa este formulario y te respondere a la brevedad.",
    nameFieldLabel: "Nombre",
    emailInputLabel: "Correo",
    phoneInputLabel: "Telefono",
    modalityFieldLabel: "Modalidad preferida",
    messageFieldLabel: "Mensaje",
    modalityOptions: ["Online", "Presencial", "Lo conversamos"],
    submitLabel: "Enviar mensaje",
    successMessage: "Tu mensaje fue enviado. Te respondere pronto.",
    errorMessage: "No se pudo enviar el formulario. Intenta nuevamente.",
    closingTitle: "Datos de contacto",
    closingBody: "Si te acomoda mas escribir por WhatsApp, tambien puedes hacerlo directamente. Aqui encuentras ademas el correo, la ubicacion de referencia y el horario de atencion."
  },
  en: {
    title: "Let us talk about your process",
    mapTitle: "Location map",
    whatsappFieldLabel: "WhatsApp",
    emailFieldLabel: "Email",
    addressFieldLabel: "Address",
    scheduleFieldLabel: "Schedule",
    formTitle: "Write to me directly",
    formIntro: "If you prefer to leave a first written message, use this form and I will reply as soon as possible.",
    nameFieldLabel: "Name",
    emailInputLabel: "Email",
    phoneInputLabel: "Phone",
    modalityFieldLabel: "Preferred format",
    messageFieldLabel: "Message",
    modalityOptions: ["Online", "In person", "We can discuss it"],
    submitLabel: "Send message",
    successMessage: "Your message was sent. I will reply soon.",
    errorMessage: "The form could not be sent. Please try again.",
    closingTitle: "Contact details",
    closingBody: "If WhatsApp feels easier, you can also reach out there directly. Email, reference location, and schedule remain visible here so the first contact feels simple and clear."
  }
} as const;

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const [contactData, siteSettings] = await Promise.all([getContactPageData(locale), getSiteSettings()]);
  const page = mapContactContent(content[locale], contactData);
  const practiceSettings = mergePracticeSettings(siteSettings);

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12 md:gap-16 md:py-20">
      <Reveal className="page-hero-panel panel-pad">
        <h1 className="max-w-4xl text-5xl leading-[0.94] md:text-7xl">{page.title}</h1>
      </Reveal>

      <ContactForm
        labels={{
          formTitle: page.formTitle,
          formIntro: page.formIntro,
          nameFieldLabel: page.nameFieldLabel,
          emailInputLabel: page.emailInputLabel,
          phoneInputLabel: page.phoneInputLabel,
          modalityFieldLabel: page.modalityFieldLabel,
          messageFieldLabel: page.messageFieldLabel,
          modalityOptions: [...page.modalityOptions],
          submitLabel: page.submitLabel,
          successMessage: page.successMessage,
          errorMessage: page.errorMessage
        }}
        locale={locale}
      />

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal
          className="page-hero-panel panel-pad"
          delay={0.08}
        >
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl leading-tight md:text-4xl">{page.closingTitle}</h2>
              <p className="max-w-3xl text-base leading-7 text-[color:var(--muted)]">{page.closingBody}</p>
            </div>

            <div className="grid gap-3 text-sm text-[color:var(--foreground)]">
              <a
                className="rounded-[1.25rem] border border-black/10 bg-white/70 px-5 py-4 transition hover:border-[color:var(--accent)]"
                href={practiceSettings.whatsappUrl}
                rel="noreferrer"
                target="_blank"
              >
                <strong>{page.whatsappFieldLabel}:</strong> {practiceSettings.phoneLabel}
              </a>
              <a
                className="rounded-[1.25rem] border border-black/10 bg-white/70 px-5 py-4 transition hover:border-[color:var(--accent)]"
                href={`mailto:${practiceSettings.email}`}
              >
                <strong>{page.emailFieldLabel}:</strong> {practiceSettings.email}
              </a>
              <div className="rounded-[1.25rem] border border-black/10 bg-white/70 px-5 py-4">
                <strong>{page.addressFieldLabel}:</strong> {practiceSettings.address}
              </div>
              <div className="rounded-[1.25rem] border border-black/10 bg-white/70 px-5 py-4">
                <strong>{page.scheduleFieldLabel}:</strong> {practiceSettings.schedule}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="elevated-card card-pad rounded-[1.75rem] bg-white/65">
          <div className="overflow-hidden rounded-[1.4rem] border border-black/10">
            <iframe
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={practiceSettings.mapEmbedUrl}
              title={page.mapTitle}
            />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
