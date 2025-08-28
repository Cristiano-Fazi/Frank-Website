export default {
  async fetch(request, env) {
    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin":  "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    }

    const url = new URL(request.url);
    const path = url.pathname; // e.g. "/api/health" or "/api/quotes"

    // Health endpoint
    if (path === "/api/health") {
      return new Response(JSON.stringify({ ok: true, message: "Everything is working" }), {
        status: 200,
        headers: {
          "Content-Type":                "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    // Create quote endpoint (POST /api/quotes)
    if (path === "/api/quotes" && request.method === "POST") {
      try {
        // 1) Exchange client credentials for access token (server -> Jobber)
        const tokenRes = await fetch("https://api.getjobber.com/oauth/clients/token", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            grant_type:    "client_credentials",
            client_id:     env.JOBBER_CLIENT_ID,
            client_secret: env.JOBBER_CLIENT_SECRET,
          }),
        });

        if (!tokenRes.ok) {
          const txt = await tokenRes.text();
          return new Response(txt, { status: 502, headers: { "Content-Type": "text/plain", "Access-Control-Allow-Origin":"*" }});
        }
        const { access_token } = await tokenRes.json();

        // 2) Forward the original body to Jobber /v1/quotes
        const body = await request.text(); // passthrough raw body
        const quoteRes = await fetch("https://api.getjobber.com/v1/quotes", {
          method: "POST",
          headers: {
            "Content-Type":  "application/json",
            "Authorization": `Bearer ${access_token}`,
          },
          body,
        });

        const text = await quoteRes.text();
        return new Response(text, {
          status: quoteRes.status,
          headers: {
            "Content-Type":                "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
      } catch (err) {
        return new Response(String(err), { status: 500, headers: { "Access-Control-Allow-Origin":"*" }});
      }
    }

    // fallback
    return new Response("Not found", { status: 404, headers: { "Access-Control-Allow-Origin":"*" }});
  }
};
