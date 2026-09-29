
export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const message = (req.body?.message || "").toLowerCase();

  let reply = "I'm Saphira AI. My full AI brain will be activated when API credits are added.";

  if (message.includes("hi") || message.includes("hello")) {
    reply = "Hi! 👋 Welcome to Saphira AI. How can I help you today?";
  } else if (message.includes("how are you")) {
    reply = "I'm doing great! 💜 I'm ready to help you create images, videos, voices, and prompts.";
  } else if (message.includes("prompt")) {
    reply = "Tell me what you want to create and I'll help you write a better prompt.";
  }

  res.status(200).json({ success: true, reply });
}
