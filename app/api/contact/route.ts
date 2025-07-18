import { NextRequest, NextResponse } from "next/server";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_API_URL = "https://api.brevo.com/v3";
const SENDER_EMAIL =
  process.env.SENDER_EMAIL || "your-verified-email@yourdomain.com";
const SENDER_NAME = process.env.SENDER_NAME || "Bitora Team";
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "contact@bitora.com";

interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactMessage = await request.json();

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    if (!BREVO_API_KEY) {
      console.error("BREVO_API_KEY not found in environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Send contact email
    const emailResponse = await fetch(`${BREVO_API_URL}/smtp/email`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: SENDER_NAME,
          email: SENDER_EMAIL,
        },
        to: [
          {
            email: CONTACT_EMAIL,
            name: "Bitora Team",
          },
        ],
        subject: data.subject || "New Contact Form Message",
        htmlContent: `
          <h2>New Contact Form Message</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, "<br>")}</p>
        `,
        replyTo: {
          email: data.email,
          name: data.name,
        },
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error("Brevo email API error:", emailResponse.status, errorText);
      return NextResponse.json(
        { error: "Failed to send contact message" },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    try {
      const confirmationResponse = await fetch(`${BREVO_API_URL}/smtp/email`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: {
            name: SENDER_NAME,
            email: SENDER_EMAIL,
          },
          to: [
            {
              email: data.email,
              name: data.name,
            },
          ],
          subject:
            "✅ We received your message - Thank you for contacting Bitora!",
          htmlContent: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
              <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <div style="text-align: center; margin-bottom: 30px;">
                  <h1 style="color: #4169E1; margin: 0; font-size: 24px;">✅ Message Received!</h1>
                </div>
                
                <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 20px;">
                  Hi ${data.name}! 👋
                </p>
                
                <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 20px;">
                  <strong>Thank you for reaching out to us!</strong> We've successfully received your message and wanted to confirm it's in our inbox.
                </p>
                
                <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0284c7; margin: 25px 0;">
                  <h3 style="margin: 0 0 15px 0; color: #0284c7; font-size: 16px;">📋 Your Message Details:</h3>
                  <p style="margin: 5px 0; color: #374151;"><strong>Subject:</strong> ${
                    data.subject || "General Inquiry"
                  }</p>
                  <p style="margin: 5px 0; color: #374151;"><strong>Message:</strong></p>
                  <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px; border: 1px solid #e0f2fe;">
                    <p style="margin: 0; color: #374151; font-style: italic;">"${
                      data.message.length > 200
                        ? data.message.substring(0, 200) + "..."
                        : data.message
                    }"</p>
                  </div>
                </div>
                
                <div style="background-color: #f0f4ff; padding: 20px; border-radius: 8px; border-left: 4px solid #4169E1; margin: 25px 0;">
                  <p style="margin: 0; color: #1e40af; font-weight: 500;">
                    ⏰ What happens next?
                  </p>
                  <ul style="color: #374151; margin: 10px 0 0 20px;">
                    <li>Our team will review your message within 24-48 hours</li>
                    <li>We'll respond to your inquiry as soon as possible</li>
                    <li>You'll receive a follow-up email at this address: ${
                      data.email
                    }</li>
                  </ul>
                </div>
                
                <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 30px;">
                  We appreciate your interest in Bitora and look forward to connecting with you soon!
                </p>
                
                <div style="text-align: center; margin: 30px 0;">
                  <div style="background-color: #22c55e; color: white; padding: 15px 25px; border-radius: 25px; display: inline-block;">
                    <strong>🚀 Thank you for choosing Bitora! 🚀</strong>
                  </div>
                </div>
                
                <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
                
                <p style="font-size: 14px; color: #6b7280; text-align: center; margin: 0;">
                  Best regards,<br>
                  <strong style="color: #4169E1;">The Bitora Team</strong><br>
                  <span style="color: #9ca3af;">This is an automated confirmation. Please do not reply to this email.</span>
                </p>
              </div>
            </div>
          `,
        }),
      });

      if (!confirmationResponse.ok) {
        console.error(
          "Confirmation email failed:",
          confirmationResponse.status,
          await confirmationResponse.text()
        );
      }
    } catch (error) {
      console.error("Confirmation email error:", error);
      // Don't fail the contact form if confirmation email fails
    }

    // Add contact to CRM
    try {
      await fetch(`${BREVO_API_URL}/contacts`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify({
          email: data.email,
          attributes: {
            FIRSTNAME: data.name.split(" ")[0] || "",
            LASTNAME: data.name.split(" ").slice(1).join(" ") || "",
            SOURCE: "Contact Form",
            LAST_MESSAGE: data.message,
          },
          updateEnabled: true,
        }),
      });
    } catch (error) {
      console.error("CRM contact error:", error);
      // Don't fail the contact form if CRM fails
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact message error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
