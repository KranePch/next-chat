import { NextResponse } from "next/server";

export async function POST(
    req: Request
) {
    try {
        const body = await req.json();
        const { messages } = body;

        if (!messages) {
            return new NextResponse("Message are required", {status: 400});
        }

        return new NextResponse("Successfully call API", {status: 200});

    } catch (error) {
        console.log("Chat API's error: ", error);
        return new NextResponse("Internal error", {status: 500});
    }
}