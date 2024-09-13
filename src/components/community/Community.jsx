import React from "react";
import { Timeline } from "./Timeline"; // Make sure you correctly import the Timeline component
import img1 from '../../assets/community/ace1.webp'
import img2 from '../../assets/community/ace2.webp'
import img3 from '../../assets/community/ace3.webp'
import img4 from '../../assets/community/ace4.webp'
import img5 from '../../assets/community/wow1.webp'
import img6 from '../../assets/community/wow2.webp'
import img7 from '../../assets/community/gdsc1.webp'
import img8 from '../../assets/community/gdsc2.webp'
import img9 from '../../assets/community/gdsc3.webp'
import img10 from '../../assets/community/gdsc4.webp'
import img11 from '../../assets/community/gdsc5.webp'
import img12 from "../../assets/showcase.webp"
import img13 from '../../assets/showcase1.webp'
import Img from "./Img";


export function Community() {
  const data = [
    {
      title: "August 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 max-w-7xl">
            Founded and Building THE ACE from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://www.commudle.com/communities/the-ace" target="_blank"><Img img={img3} /></a>
            <Img img={img1} />
            <Img img={img2} />
            <Img img={img4} />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Tookover the GDSC WoW community and made it the largest student led community in India.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <a href="https://www.commudle.com/communities/gdsc-wow-delhi-ncr" target="_blank"><Img img={img5} /></a>
            <Img img={img6} />
            <Img img={img12} />
            <Img img={img13} />

          </div>
        </div>
      ),
    },
    {
      title: "July 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Became the GDSC Lead at my campus
          </p>
          <div className="mb-8 invisible">
            {/* <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div> */}
          </div>
          <div className="grid grid-cols-2 gap-4 object-top">
            <Img img={img8} />
            <Img img={img7} />
            <Img img={img9} />
            <Img img={img11} />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-ful">
      <Timeline data={data} />
    </div>
  );
}
