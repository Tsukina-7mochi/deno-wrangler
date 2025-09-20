import * as cowsay from "cowsay";

export default {
  async fetch(req) {
    return new Response(cowsay.say({ text: "Hello Wrangler" }));
  },
} satisfies ExportedHandler<Env>;
