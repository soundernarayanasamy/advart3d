// "use client"

// import type React from "react"

// import { useEffect, useRef, useState } from "react"
// import Image from "next/image"

// export default function ScribbleReveal() {
//   const canvasRef = useRef<HTMLCanvasElement>(null)
//   const [isDrawing, setIsDrawing] = useState(false)
//   const [canDraw, setCanDraw] = useState(true)
//   const [opacity, setOpacity] = useState(1)
//   const [timerStarted, setTimerStarted] = useState(false)
//   const contextRef = useRef<CanvasRenderingContext2D | null>(null)
//   const timerRef = useRef<NodeJS.Timeout | null>(null)

//   // Initialize canvas
//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     // Set canvas dimensions to match image exactly
//     canvas.width = 600 * 2 // Account for retina displays
//     canvas.height = 400 * 2
//     canvas.style.width = "600px"
//     canvas.style.height = "400px"

//     // Get context and set drawing styles
//     const context = canvas.getContext("2d")
//     if (context) {
//       context.scale(2, 2)
//       context.lineCap = "round"
//       context.strokeStyle = "white" // Changed to white for better visibility on black background
//       context.lineWidth = 5
//       contextRef.current = context
//     }

//     return () => {
//       if (timerRef.current) {
//         clearTimeout(timerRef.current)
//       }
//     }
//   }, [])

//   // Start timer when user begins scribbling
//   const startTimer = () => {
//     if (timerStarted) return

//     setTimerStarted(true)
//     timerRef.current = setTimeout(() => {
//       setCanDraw(false)
//       fadeOut()
//     }, 2000)
//   }

//   // Fade out animation
//   const fadeOut = () => {
//     const fadeInterval = setInterval(() => {
//       setOpacity((prev) => {
//         if (prev <= 0.05) {
//           clearInterval(fadeInterval)
//           return 0
//         }
//         return prev - 0.05
//       })
//     }, 50)
//   }

//   // Drawing functions
//   const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
//     if (!canDraw) return

//     const canvas = canvasRef.current
//     if (!canvas || !contextRef.current) return

//     setIsDrawing(true)
//     startTimer() // Start the timer when drawing begins

//     let clientX, clientY

//     if ("touches" in e) {
//       clientX = e.touches[0].clientX
//       clientY = e.touches[0].clientY
//     } else {
//       clientX = e.clientX
//       clientY = e.clientY
//     }

//     const rect = canvas.getBoundingClientRect()
//     contextRef.current.beginPath()
//     contextRef.current.moveTo(clientX - rect.left, clientY - rect.top)
//   }

//   const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
//     if (!isDrawing || !canDraw) return

//     const canvas = canvasRef.current
//     if (!canvas || !contextRef.current) return

//     let clientX, clientY

//     if ("touches" in e) {
//       clientX = e.touches[0].clientX
//       clientY = e.touches[0].clientY
//     } else {
//       clientX = e.clientX
//       clientY = e.clientY
//     }

//     const rect = canvas.getBoundingClientRect()
//     contextRef.current.lineTo(clientX - rect.left, clientY - rect.top)
//     contextRef.current.stroke()
//   }

//   const stopDrawing = () => {
//     if (!contextRef.current) return
//     contextRef.current.closePath()
//     setIsDrawing(false)
//   }

//   return (
//     <div className="relative w-[600px] h-[400px] mx-auto">
//       {/* Image that will be revealed */}
//       <div className="absolute inset-0">
//         <Image
//           src="/placeholder.svg?height=400&width=600"
//           alt="Revealed image"
//           width={600}
//           height={400}
//           className="w-full h-full"
//           priority
//         />
//       </div>

//       {/* Canvas overlay for scribbling */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full cursor-crosshair z-10 transition-opacity duration-500 border-rounded-xs"
//         style={{ opacity: opacity, backgroundColor: "black" }}
//         onMouseDown={startDrawing}
//         onMouseMove={draw}
//         onMouseUp={stopDrawing}
//         onMouseLeave={stopDrawing}
//         onTouchStart={startDrawing}
//         onTouchMove={draw}
//         onTouchEnd={stopDrawing}
//       />
//     </div>
//   )
// }
// "use client";

// import type React from "react";
// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// export default function ScribbleReveal() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [canDraw, setCanDraw] = useState(true);
//   const [opacity, setOpacity] = useState(1);
//   const [timerStarted, setTimerStarted] = useState(false);
//   const contextRef = useRef<CanvasRenderingContext2D | null>(null);
//   const timerRef = useRef<NodeJS.Timeout | null>(null);
//   const [canvasSize, setCanvasSize] = useState({ width: 600, height: 400 });

//   // Adjust canvas size based on container dimensions
//   useEffect(() => {
//     const resizeCanvas = () => {
//       if (!containerRef.current || !canvasRef.current) return;

//       const { width, height } = containerRef.current.getBoundingClientRect();
//       setCanvasSize({ width, height });

//       const canvas = canvasRef.current;
//       const dpr = window.devicePixelRatio || 1;
//       canvas.width = width * dpr;
//       canvas.height = height * dpr;
//       canvas.style.width = `${width}px`;
//       canvas.style.height = `${height}px`;

//       const context = canvas.getContext("2d");
//       if (context) {
//         context.scale(dpr, dpr);
//         context.lineCap = "round";
//         context.strokeStyle = "yellow";
//         context.lineWidth = 5;
//         contextRef.current = context;
//       }
//     };

//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       if (timerRef.current) clearTimeout(timerRef.current);
//     };
//   }, []);

//   // Start timer when user begins scribbling
//   const startTimer = () => {
//     if (timerStarted) return;
//     setTimerStarted(true);
//     timerRef.current = setTimeout(() => {
//       setCanDraw(false);
//       fadeOut();
//     }, 2000);
//   };

//   // Fade out animation
//   const fadeOut = () => {
//     const fadeInterval = setInterval(() => {
//       setOpacity((prev) => {
//         if (prev <= 0.05) {
//           clearInterval(fadeInterval);
//           return 0;
//         }
//         return prev - 0.05;
//       });
//     }, 50);
//   };

//   // Drawing functions
//   const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
//     if (!canDraw) return;
//     const canvas = canvasRef.current;
//     if (!canvas || !contextRef.current) return;

//     setIsDrawing(true);
//     startTimer();

//     let clientX, clientY;
//     if ("touches" in e) {
//       clientX = e.touches[0].clientX;
//       clientY = e.touches[0].clientY;
//     } else {
//       clientX = e.clientX;
//       clientY = e.clientY;
//     }

//     const rect = canvas.getBoundingClientRect();
//     contextRef.current.beginPath();
//     contextRef.current.moveTo(clientX - rect.left, clientY - rect.top);
//   };

//   const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
//     if (!isDrawing || !canDraw) return;
//     const canvas = canvasRef.current;
//     if (!canvas || !contextRef.current) return;

//     let clientX, clientY;
//     if ("touches" in e) {
//       clientX = e.touches[0].clientX;
//       clientY = e.touches[0].clientY;
//     } else {
//       clientX = e.clientX;
//       clientY = e.clientY;
//     }

//     const rect = canvas.getBoundingClientRect();
//     contextRef.current.lineTo(clientX - rect.left, clientY - rect.top);
//     contextRef.current.stroke();
//   };

//   const stopDrawing = () => {
//     if (!contextRef.current) return;
//     contextRef.current.closePath();
//     setIsDrawing(false);
//   };

//   return (
//     <div ref={containerRef} className="relative w-full max-w-lg mx-auto aspect-[3/2]">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src="/us.png"
//           alt="Revealed image"
//           fill
//           className="object-cover w-full h-full rounded-2xl"
//           priority
//         />
//       </div>

//       {/* Canvas */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full cursor-crosshair z-10 transition-opacity duration-500 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20"
//         style={{ opacity }}
//         onMouseDown={startDrawing}
//         onMouseMove={draw}
//         onMouseUp={stopDrawing}
//         onMouseLeave={stopDrawing}
//         onTouchStart={startDrawing}
//         onTouchMove={draw}
//         onTouchEnd={stopDrawing}
//       />
//     </div>
//   );
// }
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline"; // ✅ Corrected Import

// ✅ 3D Model Component
function Model() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Spline scene="https://prod.spline.design/9iok9mg3UvENhEbs/scene.splinecode" />
    </div>
  );
}

// ✅ Scribble Reveal Component
export default function ScribbleReveal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [canDraw, setCanDraw] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [timerStarted, setTimerStarted] = useState(false);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // ✅ Resize Canvas to Fullscreen
  useEffect(() => {
    const resizeCanvas = () => {
      if (!canvasRef.current) return;

      const canvas = canvasRef.current;
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const context = canvas.getContext("2d");
      if (context) {
        context.scale(dpr, dpr);
        context.lineCap = "round";
        context.strokeStyle = "yellow";
        context.lineWidth = 5;
        contextRef.current = context;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // ✅ Start Timer When User Scribbles
  const startTimer = () => {
    if (timerStarted) return;
    setTimerStarted(true);
    timerRef.current = setTimeout(() => {
      setCanDraw(false);
      fadeOut();
    }, 2000);
  };

  // ✅ Fade Out Animation
  const fadeOut = () => {
    const fadeInterval = setInterval(() => {
      setOpacity((prev) => {
        if (prev <= 0.05) {
          clearInterval(fadeInterval);
          return 0;
        }
        return prev - 0.05;
      });
    }, 50);
  };

  // ✅ Start Drawing
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!canDraw) return;
    const canvas = canvasRef.current;
    if (!canvas || !contextRef.current) return;

    setIsDrawing(true);
    startTimer();

    let clientX, clientY;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const rect = canvas.getBoundingClientRect();
    contextRef.current.beginPath();
    contextRef.current.moveTo(clientX - rect.left, clientY - rect.top);
  };

  // ✅ Draw
  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !canDraw) return;
    const canvas = canvasRef.current;
    if (!canvas || !contextRef.current) return;

    let clientX, clientY;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const rect = canvas.getBoundingClientRect();
    contextRef.current.lineTo(clientX - rect.left, clientY - rect.top);
    contextRef.current.stroke();
  };

  // ✅ Stop Drawing
  const stopDrawing = () => {
    if (!contextRef.current) return;
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  return (
    <div ref={containerRef} className="relative w-screen h-screen overflow-hidden">
      {/* ✅ Background Image */}
      {/* <div className="absolute inset-0">
        <Image
          src="/us.png"
          alt="Revealed image"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div> */}

      {/* ✅ Canvas for Scribbling */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-crosshair z-10 transition-opacity duration-500 backdrop-blur-lg bg-white/10 border border-white/20"
        style={{ opacity }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      />

      {/* ✅ 3D Model */}
      <Model />
    </div>
  );
}
