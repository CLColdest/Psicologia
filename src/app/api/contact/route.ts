import { NextResponse } from "next/server";

type ContactPayload = {
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

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, message: "Completa nombre, correo y mensaje." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, message: "Ingresa un correo valido." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;

    if (!resendApiKey || !contactToEmail) {
      return NextResponse.json(
        { ok: false, message: "Falta configurar RESEND_API_KEY o CONTACT_TO_EMAIL en el servidor." },
        { status: 500 }
      );
    }

    const html = `
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefono:</strong> ${phone || "-"}</p>
      <p><strong>Modalidad:</strong> ${modality || "-"}</p>
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
        subject: `Solicitud de contacto de ${name}`,
        html
      })
    });

    if (!resendResponse.ok) {
      return NextResponse.json({ ok: false, message: "No se pudo enviar el correo." }, { status: 502 });
    }

    return NextResponse.json({
      ok: true,
      message: "Tu mensaje fue enviado. Te responderemos pronto."
    });
  } catch {
    return NextResponse.json({ ok: false, message: "Ocurrio un error inesperado." }, { status: 500 });
  }
}
