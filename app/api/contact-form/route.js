import { NextResponse } from "next/server"
import nodemailer from 'nodemailer'


export async function POST(request){
    const data = await request.json()
    const {name, email, contactNumber, subject, inquiry} = data
    try {
        // const stop = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve()
        //     }, 3000)
        // })
        // await stop
        // return NextResponse.json({message: "success"}) 
        await sendEmail(process.env.SMTP_EMAIL_FROM, name, subject, inquiry, email, contactNumber)
        return NextResponse.json({message: "success"})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "error"})
    }
    
}

async function sendEmail(to, name, subject, inquiry, email, contact) {
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
      text: inquiry, // plain text body
      html: handalMarkup(name, email, contact, inquiry),
    });
  
    console.log("Message sent: %s", info.messageId);
  }

  function handalMarkup(name, email, contact, inquiry){
    if(inquiry){
      return (
      `<p style="font-size: 1.3rem;">Name: ${name}</p>
      <p style="font-size: 1.3rem;">Email: ${email}</p>
      <p style="font-size: 1.3rem;">Contact No: ${contact}</p>
      <p style="font-size: 1.3rem;">Inquiry: ${inquiry}</p>`
      )
    }else{
      return (
        `<p style="font-size: 1.3rem;">Name: ${name}</p>
        <p style="font-size: 1.3rem;">Email: ${email}</p>
        <p style="font-size: 1.3rem;">Contact No: ${contact}</p>`
      )
    }
  }