import { auth } from "@clerk/nextjs";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { language, version, code, input } = await req.json();

    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const result = await axios.post("https://emkc.org/api/v2/piston/execute", {
      language: language,
      version: version,
      files: [
        {
          name: "codespear",
          content: code,
          encoding: "utf8",
        },
      ],
      stdin: input,
      args: [],
      run_timeout: 5000,
      compile_timeout: 5000,
      compile_memory_limit: -1,
      run_memory_limit: -1,
    });
    return NextResponse.json(result.data);
  } catch (error) {
    console.error("[EXECUTE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
