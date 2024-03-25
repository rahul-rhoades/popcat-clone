"use client"
import Image from "next/image";
import {useState, useEffect} from "react";
import RestingImage from '../public/mumu_image_1.png';
import SlapImage from '../public/mumu_image_2.png'
import Leaderboard from "@/app/leaderboard";



export default function Home() {
    const [active, setActive] = useState(false);
    const [count, setCount] = useState(0)
    const imageKey = active ? SlapImage.src : RestingImage.src;
    const slap = () => {
      setActive(true);
      setCount(count + 1)
    }

  return (
      <div
          className="flex flex-col bg-no-repeat w-full h-dvh bg-cover"
          style={{backgroundImage: `url(${imageKey})`, backgroundPosition: 'center'}}
      >
              <div className="place-items-center h-5/6"
                   onMouseDown={slap}
                   onMouseUp={() => setActive(false)}
              >
                  <div
                      className="text-white text-xxl text-center font-extrabold"
                  >
                      <text className="heading-text">Slap Count</text>
                  </div>
                  <div
                      className="text-white text-xxl text-center heading-text font-extrabold"
                  >
                      {count}
                  </div>
              </div>
          <Leaderboard/>
      </div>
  );
}
