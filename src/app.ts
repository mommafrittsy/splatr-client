import { Hono } from "jsr:@hono/hono";
const App = new Hono();

// Configure Hono
import { secureHeaders } from "jsr:@hono/hono/secure-headers";
App.use(secureHeaders())

  // Static routes
import { serveStatic } from "jsr:@hono/hono/deno";

export default App;