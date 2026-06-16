"use client";

import { useState } from "react";

type ContactFormLabels = {
  formTitle: string;
  formIntro: string;
  nameFieldLabel: string;
  emailInputLabel: string;
  phoneInputLabel: string;
  modalityFieldLabel: string;
  messageFieldLabel: string;
  modalityOptions: string[];
  submitLabel: string;
  successMessage: string;
  errorMessage: string;
};

type ContactFormProps = {
  labels: ContactFormLabels;
  locale: "es" | "en";
};

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function ContactForm({ labels, locale }: ContactFormProps) {
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [feedback, setFeedback] = useState("");
  const modalityOptions = labels.modalityOptions.length ? labels.modalityOptions : ["Online", "Presencial", "Lo conversamos"];

  async function handleSubmit(formData: FormData) {
    setStatus("submitting");
    setFeedback("");

    const payload = {
      locale,
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      modality: String(formData.get("modality") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || "")
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !result.ok) {
        setStatus("error");
        setFeedback(result.message || labels.errorMessage);
        return;
      }

      setStatus("success");
      setFeedback(result.message || labels.successMessage);
      const form = document.getElementById("contact-form") as HTMLFormElement | null;
      form?.reset();
    } catch {
      setStatus("error");
      setFeedback(labels.errorMessage);
    }
  }

  return (
    <section className="page-hero-panel panel-pad">
      <div className="stack-md">
        <h2 className="text-3xl leading-tight md:text-4xl">{labels.formTitle}</h2>
        <p className="max-w-2xl text-base leading-7 text-[color:var(--muted)]">{labels.formIntro}</p>
      </div>

      <form
        action={handleSubmit}
        className="mt-8 grid gap-5"
        id="contact-form"
      >
        <input autoComplete="off" className="hidden" name="website" tabIndex={-1} type="text" />

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[color:var(--foreground)]">{labels.nameFieldLabel}</span>
          <input
            className="min-h-12 rounded-2xl border border-black/10 bg-[color:var(--surface)] px-4 py-3 text-base text-[color:var(--foreground)] outline-none transition focus:border-[color:var(--accent)]"
            name="name"
            required
            type="text"
          />
        </label>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[color:var(--foreground)]">{labels.emailInputLabel}</span>
            <input
              className="min-h-12 rounded-2xl border border-black/10 bg-[color:var(--surface)] px-4 py-3 text-base text-[color:var(--foreground)] outline-none transition focus:border-[color:var(--accent)]"
              name="email"
              required
              type="email"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[color:var(--foreground)]">{labels.phoneInputLabel}</span>
            <input
              className="min-h-12 rounded-2xl border border-black/10 bg-[color:var(--surface)] px-4 py-3 text-base text-[color:var(--foreground)] outline-none transition focus:border-[color:var(--accent)]"
              name="phone"
              type="tel"
            />
          </label>
        </div>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[color:var(--foreground)]">{labels.modalityFieldLabel}</span>
          <select
            className="min-h-12 rounded-2xl border border-black/10 bg-[color:var(--surface)] px-4 py-3 text-base text-[color:var(--foreground)] outline-none transition focus:border-[color:var(--accent)]"
            defaultValue={modalityOptions[0]}
            name="modality"
          >
            {modalityOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[color:var(--foreground)]">{labels.messageFieldLabel}</span>
          <textarea
            className="min-h-40 rounded-2xl border border-black/10 bg-[color:var(--surface)] px-4 py-3 text-base leading-7 text-[color:var(--foreground)] outline-none transition focus:border-[color:var(--accent)]"
            name="message"
            required
          />
        </label>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <button
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--accent-foreground)] transition hover:translate-y-[-1px] hover:shadow-[0_14px_30px_rgba(140,107,62,0.18)] disabled:cursor-not-allowed disabled:opacity-70"
            disabled={status === "submitting"}
            type="submit"
          >
            {status === "submitting" ? (locale === "es" ? "Enviando..." : "Sending...") : labels.submitLabel}
          </button>

          {feedback ? (
            <p
              className={`text-sm ${status === "success" ? "text-[color:var(--accent)]" : "text-red-600"}`}
              role="status"
            >
              {feedback}
            </p>
          ) : null}
        </div>
      </form>
    </section>
  );
}
