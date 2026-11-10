"use client";

import { useEffect } from "react";

export default function ConsoleLog() {
  useEffect(() => {
    const message = `
---------- Ayo Mau Ngapain di Console? ----------
/////////////////////////////////////////////////
//                                             //
//           Developed by KAMAPRA              //
//           www.kamapra.my.id                 //
//                                             //
/////////////////////////////////////////////////
-------- NO NASTY STUFF, JUST CREATIVITY --------`;

    console.log(
      `%c${message}`,
      `
    color: #ffffff; 
    background: #000000; 
    font-family: monospace; 
    font-weight: bold; 
    border: 1px solid #38bdf8; 
    line-height: 1.5;
  `,
    );
  }, []);

  return null;
}
