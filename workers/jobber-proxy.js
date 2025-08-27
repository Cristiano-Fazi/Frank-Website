export default {
  async fetch(request, env) {
    // handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    }

    // simple health response for now
    const payload = {
      ok: true,
      message: "Everything is working",
      path: new URL(request.url).pathname,
      method: request.method,
    };

    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: {
        "Content-Type":                "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":"GET, POST, OPTIONS",
        "Access-Control-Allow-Headers":"Content-Type, Authorization",
      },
    });
  }
};
