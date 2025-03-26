// import React from "react";
// import { HeroButton } from "./heroButton";
// import { HeroMarquee } from "./heroMarquee";
// import ScribbleReveal from "../scribble";
// export function HeroWrapper({}) {
//   return (
//     <main className="section1__wrapper relative max-w-maxWidth grow ">
//       <div className="myImage"></div>
      
//       <h2 className="left mask pointer-events-none z-20 pt-20">
//         <div className="free anime">
//           Advart&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         </div>
//         <div className="animation__wrapper anime">
//           <span className="animate__this animate__this1 left-0">
//             Ad <span className="yellow__it">.</span>
//             <br />
//           </span>
//           <span className="animate__this animate__this2 left-0">
//             Art<span className="yellow__it">.</span>
//           </span>
//           <span>&nbsp;</span>
//         </div>
//       </h2>
//       <ScribbleReveal/> 
//       <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-right max-w-md p-4">
//         If we can turn your scribble into an art, think what we could do to your Brand!
//       </div>    </main>
//   );
// }
// {/* <HeroButton /> */}
// {/* <HeroMarquee /> */}
import React from "react";
import { HeroButton } from "./heroButton";
import { HeroMarquee } from "./heroMarquee";
import ScribbleReveal from "../scribble";
import { Span } from "next/dist/trace";

export function HeroWrapper({}) {
  return (
    <main className="section1__wrapper relative max-w-maxWidth grow">
      <div className="myImage"></div>

      <h2 className="left mask pointer-events-none z-20 pt-20">
        <div className="free anime text-white">
          Advart&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="animation__wrapper anime">
          <span className="animate__this animate__this1 left-0 text-white">
            Ad <span className="yellow__it text-yellow-400">.</span>
            <br />
          </span>
          <span className="animate__this animate__this2 left-0 text-white">
            Art<span className="yellow__it text-yellow-400">.</span>
          </span>
          <span>&nbsp;</span>
        </div>
      </h2>

      <ScribbleReveal  />
      

      {/* Styled h1 similar to Advart */}
      <h1 className="absolute right-0 top-1/2 transform -translate-y-1/2 text-right max-w-md p-4 text-6xl font-bold text-white">
        <div className="free anime text-white">
          We make <br/>your <span className="text-white hover:bg-yellow-400 hover:text-black hover:rounded-[20px] ">Brand</span>,
        </div>
        a piece of <br/><span className="text-white hover:bg-yellow-400 hover:text-black ">Art</span> <span className="yellow__it text-yellow-400">.</span>
        <div className="animation__wrapper anime animate__this animate__this1 left-0 text-white">
          
            
            <br />
          
          <span className="animate__this animate__this2 left-0 text-white">
            
          </span>
          
        </div>
      </h1>
    </main>
  );
}
