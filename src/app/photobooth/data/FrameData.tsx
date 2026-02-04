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
    name: "Vintage Rose",
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
        width: "400px",
        height: "590px",
        rotate: "-0.5deg",
      },
      {
        top: "300px",
        left: "600px",
        width: "385px",
        height: "295px",
        rotate: "0.8deg",
      },
      {
        top: "600px",
        left: "610px",
        width: "385px",
        height: "295px",
        rotate: "-1.5deg",
      },
      {
        top: "900px",
        left: "200px",
        width: "385px",
        height: "295px",
        rotate: "0.8deg",
      },
      {
        top: "1200px",
        left: "200px",
        width: "385px",
        height: "295px",
        rotate: "0.8deg",
      },
      {
        top: "908px",
        left: "600px",
        width: "400px",
        height: "590px",
        rotate: "0.8deg",
      },
    ],
  },
  {
    id: 3,
    name: "Gold D Roger",
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
    name: "Cinema Story",
    category: "Story",
    src: "/frame/frame1.png",
    maxPhotos: 3,

    positions: [
      {
        top: "250px",
        left: "250px",
        width: "400px",
        height: "500px",
        rotate: "-0.5deg",
      },
      {
        top: "990px",
        left: "300px",
        width: "400px",
        height: "500px",
        rotate: "-1.5deg",
      },
      {
        top: "565px",
        left: "600px",
        width: "400px",
        height: "500px",
        rotate: "0.8deg",
      },
    ],
  },
];
