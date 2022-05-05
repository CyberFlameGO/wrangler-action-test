interface Env {
  SECRET: string;
}

// Test
export default {
  async fetch(_: Request, env: Env): Promise<Response> {
    return new Response(`Did the secret work? Build ID: ${env.SECRET}`);
  },
}
