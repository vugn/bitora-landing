// Brevo API integration functions
// Using Next.js API routes for secure server-side API calls

interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function subscribeToNewsletter(email: string): Promise<void> {
  try {
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error || `HTTP error! status: ${response.status}`
      );
    }
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    throw new Error("Failed to subscribe to newsletter");
  }
}

export async function sendContactMessage(data: ContactMessage): Promise<void> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error || `HTTP error! status: ${response.status}`
      );
    }
  } catch (error) {
    console.error("Contact message error:", error);
    throw new Error("Failed to send contact message");
  }
}
