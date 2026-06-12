import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.CONTACT_EMAIL, Alishanaikmanagement@gmail.com
      pass: process.env.CONTACT_EMAIL_PASSWORD, Appleoranges18
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.CONTACT_EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
