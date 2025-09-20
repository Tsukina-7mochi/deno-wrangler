async function fetch(req: Request): Promise<Response> {
  return new Response("Hello World");
}

export default { fetch };
