// Brevo API Setup Script
// Run this script to test your Brevo integration

const BREVO_API_KEY = "your-brevo-api-key-here"
const BREVO_API_URL = "https://api.brevo.com/v3"

async function testBrevoConnection() {
  try {
    console.log("Testing Brevo API connection...")

    const response = await fetch(`${BREVO_API_URL}/account`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "api-key": BREVO_API_KEY,
      },
    })

    if (response.ok) {
      const data = await response.json()
      console.log("✅ Brevo connection successful!")
      console.log("Account info:", data)
    } else {
      console.error("❌ Brevo connection failed:", response.status, response.statusText)
    }
  } catch (error) {
    console.error("❌ Error testing Brevo connection:", error)
  }
}

async function createNewsletterList() {
  try {
    console.log("Creating newsletter list...")

    const response = await fetch(`${BREVO_API_URL}/contacts/lists`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        name: "Bitora Newsletter Subscribers",
        folderId: 1,
      }),
    })

    if (response.ok) {
      const data = await response.json()
      console.log("✅ Newsletter list created successfully!")
      console.log("List ID:", data.id)
      console.log("Remember to update the listIds in lib/brevo.ts with this ID")
    } else {
      console.error("❌ Failed to create newsletter list:", response.status, response.statusText)
    }
  } catch (error) {
    console.error("❌ Error creating newsletter list:", error)
  }
}

// Run tests
async function main() {
  console.log("🚀 Setting up Brevo integration for Bitora...\n")

  if (BREVO_API_KEY === "your-brevo-api-key-here") {
    console.log("⚠️  Please update BREVO_API_KEY in this script with your actual API key")
    console.log("You can find your API key in your Brevo dashboard under Account > SMTP & API > API Keys")
    return
  }

  await testBrevoConnection()
  console.log("")
  await createNewsletterList()

  console.log("\n📝 Next steps:")
  console.log("1. Update the BREVO_API_KEY in your environment variables")
  console.log("2. Update the listIds in lib/brevo.ts with the created list ID")
  console.log("3. Update the contact email in lib/brevo.ts")
  console.log("4. Test the newsletter subscription and contact form")
}

main()
