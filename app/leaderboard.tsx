'use client'
import {
    PropsWithChildren,
    useEffect,
    useRef, useState
} from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";

export default function Leaderboard() {
    let regionData = useRef('');
    useEffect(() => {
        fetch('/api/region')
            .then((res) => res.json())
            .then((data) => {
                regionData.current = data.email;
            })
            .then(() => console.log(regionData));
    }, []);

    return (
        <>
            <div className={"flex w-9/12 h-auto mx-64 rounded-lg bg-leaderboard"}>
                <Accordion type="single" collapsible className={"bg-leaderboard"}>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>

    )
}