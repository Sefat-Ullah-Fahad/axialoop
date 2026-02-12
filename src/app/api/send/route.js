import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const body = await req.json();


        const {
            name, email, phoneCode, phone, company,
            role, service, project, revenue, website,
            size, investment, source
        } = body;


        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASS,
            },
        });

        const mailOptions = {
            from: `"Axialoop Inquiry" <${process.env.GMAIL_USER}>`,
            to: 'mdf780709@gmail.com',
            replyTo: email,
            subject: `🚀 New Lead: ${name} - ${service}`,
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Helvetica', Arial, sans-serif; background-color: #f9f9f9; padding: 20px; margin: 0; }
              .card { background: #ffffff; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #eee; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
              .header { background: #000; padding: 25px; text-align: center; }
              .header h2 { color: #51CB20; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 2px; }
              .body { padding: 30px; }
              .grid { width: 100%; border-collapse: collapse; }
              .grid td { padding: 12px 8px; border-bottom: 1px solid #f4f4f4; font-size: 14px; }
              .label { color: #888; font-weight: bold; width: 35%; }
              .value { color: #111; font-weight: 500; }
              .title { font-size: 12px; font-weight: 800; color: #51CB20; text-transform: uppercase; margin: 20px 0 10px 0; border-bottom: 2px solid #51CB20; display: inline-block; }
              .msg-box { background: #fcfcfc; padding: 15px; border-radius: 8px; border: 1px solid #eee; margin-top: 10px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; }
              .footer { padding: 20px; text-align: center; font-size: 11px; color: #bbb; background: #fafafa; }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="header">
                <h2>New Inquiry Received</h2>
              </div>
              <div class="body">
                <div class="title">Personal & Contact</div>
                <table class="grid">
                  <tr><td class="label">Full Name:</td><td class="value">${name}</td></tr>
                  <tr><td class="label">Email:</td><td class="value">${email}</td></tr>
                  <tr><td class="label">Phone:</td><td class="value">${phoneCode || ''} ${phone}</td></tr>
                </table>

                <div class="title">Company & Role</div>
                <table class="grid">
                  <tr><td class="label">Company:</td><td class="value">${company || 'N/A'}</td></tr>
                  <tr><td class="label">Website:</td><td class="value">${website || 'N/A'}</td></tr>
                  <tr><td class="label">Role:</td><td class="value">${role || 'N/A'}</td></tr>
                </table>

                <div class="title">Project Requirements</div>
                <table class="grid">
                  <tr><td class="label">Service:</td><td class="value" style="color: #51CB20;">${service}</td></tr>
                  <tr><td class="label">Budget Range:</td><td class="value">${investment}</td></tr>
                  <tr><td class="label">Company Size:</td><td class="value">${size}</td></tr>
                  <tr><td class="label">Annual Revenue:</td><td class="value">${revenue}</td></tr>
                  <tr><td class="label">Found Via:</td><td class="value">${source}</td></tr>
                </table>

                <div class="title">Message Details</div>
                <div class="msg-box">
                  ${project}
                </div>
              </div>
              <div class="footer">
                Sent from Axialoop Portfolio Contact Form
              </div>
            </div>
          </body>
        </html>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Design email sent successfully!" });
    } catch (error) {
        console.error("Nodemailer Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}