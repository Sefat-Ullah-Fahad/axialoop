// "use client";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const CustomCursor = () => {
//   const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

//   useEffect(() => {
//     const moveMouse = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", moveMouse);
//     return () => window.removeEventListener("mousemove", moveMouse);
//   }, []);

//   return (
//     <motion.div
//       animate={{
//         x: mousePosition.x - 10, 
//         y: mousePosition.y - 10,
//       }}
//       transition={{
//         type: "tween", 
//         ease: "backOut", 
//         duration: 0 
//       }}
//       className="fixed top-0 left-0 w-5 h-5 bg-[#4ADE80] rounded-full pointer-events-none z-[9999]"
//     />
//   );
// };

// export default CustomCursor;