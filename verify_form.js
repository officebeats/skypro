const testEmail = "ernesto+skypro@getroute.com";
const data = {
  first_name: "Antigravity",
  last_name: "Verification",
  email: "skypro@yopmail.com",
  message: "Automated test to verify FormSubmit connectivity.",
};

async function checkApi() {
  console.log("Starting verification for:", testEmail);
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${testEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("API Response Status:", response.status);
    console.log("API Response Body:", JSON.stringify(result, null, 2));

    if (response.ok && result.success === "true") {
      console.log("✅ VERIFIED: The form endpoint is accepting submissions.");
    } else {
      console.log("❌ FAILED: API rejected the submission.");
    }
  } catch (err) {
    console.error("❌ NETWORK ERROR:", err.message);
  }
}

checkApi();
