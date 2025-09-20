import * as cowsay from "cowsay";

export default {
  async fetch(req): Promise<Response> {
    return new Response(cowsay.say({ text: "Hello World" }));
  },
} satisfies ExportedHandler<Env>;
