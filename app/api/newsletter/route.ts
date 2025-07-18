import { NextRequest, NextResponse } from "next/server";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_API_URL = "https://api.brevo.com/v3";
const SENDER_EMAIL =
  process.env.SENDER_EMAIL || "your-verified-email@yourdomain.com";
const SENDER_NAME = process.env.SENDER_NAME || "Bitora Team";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!BREVO_API_KEY) {
      console.error("BREVO_API_KEY not found in environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Subscribe to newsletter
    const response = await fetch(`${BREVO_API_URL}/contacts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: email,
        listIds: [1], // Replace with your actual list ID
        attributes: {
          FIRSTNAME: "",
          LASTNAME: "",
          SOURCE: "Bitora Landing Page",
        },
        updateEnabled: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Brevo API error:", response.status, errorText);
      return NextResponse.json(
        { error: "Failed to subscribe to newsletter" },
        { status: 500 }
      );
    }

    // Send welcome email
    try {
      const welcomeResponse = await fetch(`${BREVO_API_URL}/smtp/email`, {
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
              email: email,
            },
          ],
          subject: "🚀 Welcome to Bitora - Thank You for Joining Us!",
          htmlContent: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
              <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <div style="text-align: center; margin-bottom: 30px;">
                  <h1 style="color: #4169E1; margin: 0; font-size: 28px;">🚀 Welcome to Bitora!</h1>
                </div>
                
                <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 20px;">
                  Hi there! 👋
                </p>
                
                <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 20px;">
                  <strong>Thank you for subscribing to our newsletter!</strong> We're thrilled to have you as part of the Bitora community.
                </p>
                
                <div style="background-color: #f0f4ff; padding: 20px; border-radius: 8px; border-left: 4px solid #4169E1; margin: 25px 0;">
                  <p style="margin: 0; color: #1e40af; font-weight: 500;">
                    🎯 You'll be the first to know when we launch and get exclusive access to:
                  </p>
                  <ul style="color: #374151; margin: 10px 0 0 20px;">
                    <li>Early access opportunities</li>
                    <li>Important project updates</li>
                    <li>Exclusive community events</li>
                    <li>Special announcements</li>
                  </ul>
                </div>
                
                <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 30px;">
                  Stay tuned for exciting updates as we build the future of blockchain technology together!
                </p>
                
                <div style="text-align: center; margin: 30px 0;">
                  <div style="background-color: #4169E1; color: white; padding: 15px 25px; border-radius: 25px; display: inline-block;">
                    <strong>🔥 Welcome aboard! 🔥</strong>
                  </div>
                </div>
                
                <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
                
                <p style="font-size: 14px; color: #6b7280; text-align: center; margin: 0;">
                  Best regards,<br>
                  <strong style="color: #4169E1;">The Bitora Team</strong>
                </p>
              </div>
            </div>
          `,
        }),
      });

      if (!welcomeResponse.ok) {
        console.error(
          "Thank you email failed:",
          welcomeResponse.status,
          await welcomeResponse.text()
        );
      }
    } catch (error) {
      console.error("Welcome email error:", error);
      // Don't fail the subscription if welcome email fails
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
