import { promises as fs } from "fs";
import path from "path";

// GET /static-demo -> serves public/static-demo/index.html
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "static-demo", "index.html");
    const content = await fs.readFile(filePath, "utf8");
    return new Response(content, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=300, s-maxage=600",
      },
    });
  } catch (err) {
    return new Response("Not Found", { status: 404 });
  }
}
