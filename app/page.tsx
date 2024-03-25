"use client"
import Image from "next/image";
import {useState, useEffect} from "react";
import RestingImage from '../public/mumu_image_1.png';
import SlapImage from '../public/mumu_image_2.png'
import Leaderboard from "@/app/leaderboard";
import axios, {AxiosResponse} from "axios";

export default function Home() {
    const [active, setActive] = useState(false);
    const [count, setCount] = useState(0);
    const [lastActiveCount, setLastActiveCount] = useState(0);
    const [regionData, setRegionData] = useState(null);
    const [jwt, setJwt] = useState(null);
    const imageKey = active ? SlapImage.src : RestingImage.src;

    useEffect(() => {
        fetch('/api/jwt')
            .then((res) => res.json())
            .then((data) => console.log(data))
            .then(() => console.log(jwt));
    }, [])

    useEffect(() => {
        fetch('/api/region')
            .then((res) => res.json())
            .then((data) => {
                setRegionData(data.country)
            })
            .then(() => console.log(regionData));
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            if (count != lastActiveCount) {
                fetch('/api/flush-clicks', {
                    body: JSON.stringify({ clicks: count - lastActiveCount, region: regionData }),
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then((res) => console.log(res))
                console.log('UPDATE');
                setLastActiveCount(count);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [])



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
