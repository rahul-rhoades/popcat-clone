import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
import {NextApiRequest, NextApiResponse} from "next";

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<any>
): Promise<void> => {
    const { clicks, region } = req.body;
    try {

        const regionValue: number | null = await kv.hget(`${region}`, "count")
        if (regionValue) {
            const updatedClicks = regionValue + clicks;
            const kvRes = await kv.hset(`${region}`, {"count": updatedClicks});
            return res.status(200).json({
                kvRes,
                error: false
            });
        }
    } catch( err: any) {
        return res.status(400).json({error: true});
    }
}