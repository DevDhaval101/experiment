import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const data = await request.formData();

  const name = data.get("name");
  const number = data.get("number");
  const email = data.get("email");
  const file = data.get("file");
  console.log(file);

  // Read the content of the file
  const fileContent = await file.arrayBuffer();
  const buffer = Buffer.from(fileContent);

  try {
    await sendEmail(
      process.env.SMTP_EMAIL_FROM,
      name,
      "new Resume",
      email,
      number,
      file,
      buffer
    );
    return NextResponse.json({
      success: true,
      data: "Applied Successfully!",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      data: "Error ocuured: failed to submit Resume.",
    });
  }
}

async function sendEmail(to, name, subject, email, contact, file, buffer) {
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_RELAY,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // generated ethereal user
      pass: process.env.SMTP_PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.SMTP_EMAIL_FROM, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: `${name} ${email} ${contact}`, // plain text body
    attachments: [{ filename: file.name, content: buffer }],
  });

  console.log("Message sent: %s", info.messageId);
}
