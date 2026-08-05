function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]
  ));
}

export async function onRequestPost(context) {
  try {
    const { name, email, phone, van, timeline, budget, notes } =
      await context.request.json();

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const rows = [
      ["Name", name],
      ["Email", email],
      ["Phone", phone],
      ["Owns a van", van],
      ["Timeline", timeline],
      ["Budget", budget],
      ["Notes", notes],
    ]
      .filter(([, value]) => value)
      .map(
        ([label, value]) =>
          `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>`,
      )
      .join("");

    // Call Resend API (Free up to 3,000 emails/mo)
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${context.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Landing Page <onboarding@resend.dev>",
        to: "abrogavans@gmail.com",
        subject: `New Lead from ${name}`,
        html: rows,
      }),
    });

    if (!resendResponse.ok) throw new Error("Failed to send email");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}