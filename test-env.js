// Simple test to verify environment variables are loaded
const fs = require("fs");
const path = require("path");

// Manually load .env file
const envPath = path.join(__dirname, ".env");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  const lines = envContent.split("\n");

  for (const line of lines) {
    if (line.trim() && !line.startsWith("#")) {
      const [key, ...valueParts] = line.split("=");
      if (key && valueParts.length > 0) {
        let value = valueParts.join("=");
        // Remove quotes if present
        if (
          (value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))
        ) {
          value = value.slice(1, -1);
        }
        process.env[key.trim()] = value;
      }
    }
  }
}

console.log("Testing environment variable loading...");
console.log("BREVO_API_KEY exists:", !!process.env.BREVO_API_KEY);
console.log("BREVO_API_KEY length:", process.env.BREVO_API_KEY?.length || 0);

if (process.env.BREVO_API_KEY) {
  console.log("✅ Environment variable is loaded successfully!");
  console.log(
    "First 10 characters:",
    process.env.BREVO_API_KEY.substring(0, 10) + "..."
  );
} else {
  console.log("❌ Environment variable is not loaded");
}
