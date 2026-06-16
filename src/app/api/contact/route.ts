import { NextResponse } from "next/server";

type ContactPayload = {
  locale?: string;
  name?: string;
  email?: string;
  phone?: string;
  modality?: string;
  message?: string;
  website?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (body.website) {
      return NextResponse.json({ ok: true, message: "OK" });
    }

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const modality = String(body.modality || "").trim();
    const message = String(body.message || "").trim();
    const locale = body.locale === "en" ? "en" : "es";

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          ok: false,
          message: locale === "es" ? "Completa nombre, correo y mensaje." : "Please complete name, email, and message."
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          ok: false,
          message: locale === "es" ? "Ingresa un correo valido." : "Please enter a valid email."
        },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;

    if (!resendApiKey || !contactToEmail) {
      return NextResponse.json(
        {
          ok: false,
          message:
            locale === "es"
              ? "Falta configurar RESEND_API_KEY o CONTACT_TO_EMAIL en el servidor."
              : "RESEND_API_KEY or CONTACT_TO_EMAIL is missing on the server."
        },
        { status: 500 }
      );
    }

    const html = `
      <h2>Nuevo contacto</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefono:</strong> ${phone || "-"}</p>
      <p><strong>Modalidad:</strong> ${modality || "-"}</p>
      <p><strong>Idioma:</strong> ${locale}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Contacto Web <onboarding@resend.dev>",
        to: [contactToEmail],
        reply_to: email,
        subject: locale === "es" ? `Nuevo contacto de ${name}` : `New contact from ${name}`,
        html
      })
    });

    if (!resendResponse.ok) {
      return NextResponse.json(
        {
          ok: false,
          message: locale === "es" ? "No se pudo enviar el correo." : "The email could not be sent."
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      message:
        locale === "es"
          ? "Tu mensaje fue enviado. Te responderemos pronto."
          : "Your message was sent. We will reply soon."
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Unexpected error."
      },
      { status: 500 }
    );
  }
}
