const fetch = require("node-fetch");

async function testSubmission() {
  const data = {
    first_name: "Antigravity",
    last_name: "Tester",
    email: "skypro@yopmail.com",
    phone: "1234567890",
    company: "AI Test Lab",
    city: "San Francisco",
    country: "USA",
    message: "This is a test from the agent.",
  };

  const emailAddress = "ernesto+skypro@getroute.com";
  const url = `https://formsubmit.co/ajax/${encodeURIComponent(emailAddress)}`;

  console.log("Sending to:", url);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Status:", response.status);
    console.log("Result:", result);
  } catch (error) {
    console.error("Test Failed:", error);
  }
}

testSubmission();
