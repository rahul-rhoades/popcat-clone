'use client'
import {
    useEffect,
    useRef
} from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

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
        <div className={"flex h-auto"}>
            <div className={"flex flex-row bg-leaderboard h-auto w-5/6 p6 rounded-2xl shadow-md px-10"}>
                <div className={"w-1/4"}>hello world</div>
                <div className={"w-1/6 border-l-black"}>Hi</div>
                <div>{regionData.current}</div>
            </div>
        </div>
    )
}