import { SignJWT } from "jose";
import {NextRequest, NextResponse} from "next/server";
import { getJwtSecretKey } from "@/libs/auth";

export async function GET(request: NextRequest) {
    const ipCountry = await fetch(`https://ipinfo.io/json?token=abeb215181ba7f`).then(
        (response) => response.json()
    ).then((jsonData) => jsonData.country);

    const token = await new SignJWT({
        country: ipCountry,
    })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("30s")
        .sign(getJwtSecretKey());
    const response = NextResponse.json(
        { success: true },
        { status: 200, headers: { "content-type": "application/json" } }
    );
    response.cookies.set({
        name: "token",
        value: token,
        path: "/",
    });
    return response;
}