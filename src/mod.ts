export default {
  async fetch(req): Promise<Response> {
    return new Response("Hello World");
  },
} satisfies ExportedHandler<Env>;
