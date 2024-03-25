import {NextResponse} from "next/server";

export async function GET() {
    const data = await fetch(`https://ipinfo.io/json?token=abeb215181ba7f`).then(
        (response) => response.json()
    );
    return NextResponse.json(data);
}