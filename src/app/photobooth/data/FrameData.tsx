export interface FramePosition {
  top: string;
  left: string;
  width: string;
  height: string;
  rotate: string;
}

export interface Frame {
  id: number;
  name: string;
  category: string;
  src: string;
  maxPhotos: number;

  positions: FramePosition[];
}

export const FRAMES: Frame[] = [
  {
    id: 1,
    name: "Geometric Friendship",
    category: "Vertical",
    src: "/frame/frame6.png",
    maxPhotos: 6,
    positions: [
      {
        top: "260px",
        left: "160px",
        width: "400px",
        height: "400px",
        rotate: "-0.5deg",
      },
      {
        top: "270px",
        left: "640px",
        width: "400px",
        height: "400px",
        rotate: "0.8deg",
      },
      {
        top: "750px",
        left: "160px",
        width: "400px",
        height: "400px",
        rotate: "-1.5deg",
      },
      {
        top: "750px",
        left: "640px",
        width: "400px",
        height: "400px",
        rotate: "-1.5deg",
      },
      {
        top: "1230px",
        left: "160px",
        width: "400px",
        height: "400px",
        rotate: "-1.5deg",
      },
      {
        top: "1230px",
        left: "640px",
        width: "400px",
        height: "400px",
        rotate: "-1.5deg",
      },
    ],
  },

  {
    id: 2,
    name: "Cinema Story",
    category: "Story",
    src: "/frame/frame7.png",
    maxPhotos: 6,

    positions: [
      {
        top: "300px",
        left: "200px",
        width: "410px",
        height: "600px",
        rotate: "-0.5deg",
      },
      {
        top: "300px",
        left: "590px",
        width: "420px",
        height: "300px",
        rotate: "0.8deg",
      },
      {
        top: "600px",
        left: "590px",
        width: "420px",
        height: "300px",
        rotate: "-1.5deg",
      },
      {
        top: "900px",
        left: "200px",
        width: "420px",
        height: "300px",
        rotate: "0.8deg",
      },
      {
        top: "1200px",
        left: "200px",
        width: "420px",
        height: "300px",
        rotate: "0.8deg",
      },
      {
        top: "908px",
        left: "600px",
        width: "400px",
        height: "600px",

        rotate: "0.8deg",
      },
    ],
  },
  {
    id: 3,
    name: "Love Story",
    category: "Lovely",
    src: "/frame/frame8.png",
    maxPhotos: 6,
    positions: [
      /* Row 1 */
      {
        top: "90px",
        left: "180px",
        width: "350px",
        height: "350px",
        rotate: "0deg",
      },
      {
        top: "90px",
        left: "550px",
        width: "350px",
        height: "350px",
        rotate: "0deg",
      },

      /* Row 2 */
      {
        top: "510px",
        left: "180px",
        width: "350px",
        height: "350px",
        rotate: "0deg",
      },
      {
        top: "510px",

        left: "550px",
        width: "350px",
        height: "350px",
        rotate: "0deg",
      },

      /* Row 3 */
      {
        top: "915px",
        left: "180px",
        width: "350px",
        height: "350px",
        rotate: "0deg",
      },
      {
        top: "915px",

        left: "550px",
        width: "350px",
        height: "350px",
        rotate: "0deg",
      },
    ],
  },
  {
    id: 4,
    name: "Vintage Cinema Story",
    category: "Story",
    src: "/frame/Frame11.png",
    maxPhotos: 6,

    positions: [
      {
        top: "420px",

        left: "135px",
        width: "410px",
        height: "310px",
        rotate: "-0.5deg",
      },
      {
        top: "420px",
        left: "680px",
        width: "410px",
        height: "310px",
        rotate: "-1.5deg",
      },
      {
        top: "740px",

        left: "135px",

        width: "410px",
        height: "310px",
        rotate: "0.8deg",
      },
      {
        top: "740px",
        left: "680px",

        width: "410px",
        height: "310px",
        rotate: "0.8deg",
      },
      {
        top: "1060px",

        left: "135px",

        width: "410px",
        height: "310px",
        rotate: "0.8deg",
      },
      {
        top: "1060px",
        left: "680px",

        width: "410px",
        height: "310px",
        rotate: "0.8deg",
      },
    ],
  },
  {
    id: 5,
    name: "Peony & Petals Birthday",
    category: "Birthday",
    src: "/frame/Frame12.png",
    maxPhotos: 4,

    positions: [
      {
        top: "250px",
        left: "110px",
        width: "430px",
        height: "630px",
        rotate: "-0.5deg",
      },
      {
        top: "250px",
        left: "660px",
        width: "430px",
        height: "630px",
        rotate: "-1.5deg",
      },
      {
        top: "1000px",
        left: "110px",
        width: "430px",
        height: "630px",
        rotate: "0.8deg",
      },
      {
        top: "1000px",
        left: "660px",

        width: "430px",
        height: "630px",
        rotate: "0.8deg",
      },
    ],
  },
];
