//   <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden">
//           {/* Main video */}
//           <video
//             className="w-full rounded-lg"
//             // src="your-video.mp4"
//             src="https://www.w3schools.com/html/mov_bbb.mp4"
//             controls
//             autoPlay
//             muted
//             loop
//           />

//           {/* Left blurred edge */}
//           <div className="absolute left-0 top-0 h-full w-20 backdrop-blur-xl">
//             <div className="w-full h-full bg-gradient-to-r from-white/40 to-transparent" />
//           </div>

//           {/* Right blurred edge */}
//           <div className="absolute right-0 top-0 h-full w-20 backdrop-blur-xl">
//             <div className="w-full h-full bg-gradient-to-l from-white/40 to-transparent" />
//           </div>
//         </div>
//         <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden">
//           {/* Foreground video */}
//           <video
//             className="w-full rounded-lg"
//             src="https://www.w3schools.com/html/mov_bbb.mp4"
//             controls
//             autoPlay
//             muted
//             loop
//           />

//           {/* Blurred sides using backdrop */}
//           <div className="pointer-events-none absolute inset-0 bg-transparent backdrop-blur-xl" />
//         </div>
