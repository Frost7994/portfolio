"use client";

// base
import { CircleArrowDown } from "lucide-react";

// components
import { Container } from "@/components/ui/container";
import { HorizontalGridLine, GridLineWrapper } from "@/components/ui/gridLine";
import { DecodeWord } from "@/components/sections/hero/components/decodeWord";

// utils
import { motion } from "framer-motion";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

export const Hero = () => {
  // media query
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <section className="flex flex-col gap-4">
      {/* top grid lines */}
      <div className="flex flex-col gap-4">
        <div className="relative">
          <HorizontalGridLine />
        </div>
        <div className="relative">
          <HorizontalGridLine size="sm" dashed />
        </div>
      </div>

      {/* content */}
      <Container>
        <div className="flex flex-col gap-4 py-8">
          {/* decoder */}
          <GridLineWrapper className="col-span-2 sm:col-span-3">
            <p className="whitespace-nowrap text-sm font-medium md:text-base">
              <DecodeWord
                word={
                  isMobile
                    ? "Full Stack Developer · Dublin"
                    : "Full Stack Developer · Dublin · Tommy"
                }
              />
            </p>
          </GridLineWrapper>

          {/* heading */}
          <GridLineWrapper className="col-span-2 sm:col-span-4 lg:col-span-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-4xl font-semibold sm:text-5xl lg:leading-[3.5rem]"
            >
              Hey there, I&apos;m Tommy! A full stack developer from Ireland
            </motion.h1>
          </GridLineWrapper>

          {/* subtitle */}
          <GridLineWrapper className="col-span-3 lg:col-span-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-muted-foreground sm:text-lg"
            >
              Currently I&apos;m working as a full time firefighter / paramedic
              while pursuing my passion in tech and web development.
            </motion.p>
          </GridLineWrapper>

          {/* CTA */}
          <GridLineWrapper className="col-span-3 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-1.5"
            >
              <p className="text-sm sm:text-base">
                Check out more about me below!
              </p>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  delay: 1.5,
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden xs:block"
              >
                <CircleArrowDown className="size-5 text-brand" />
              </motion.div>
            </motion.div>
          </GridLineWrapper>
        </div>
      </Container>

      {/* bottom grid lines */}
      <div className="flex flex-col gap-4">
        <div className="relative">
          <HorizontalGridLine size="sm" dashed />
        </div>
        <div className="relative">
          <HorizontalGridLine />
        </div>
      </div>
    </section>
  );
};

// "use client";

// // base
// import { ArrowDownCircle } from "lucide-react";

// // components
// import { Container } from "@/components/ui/container";
// import { HorizontalGridLine, GridLineWrapper } from "@/components/ui/gridLine";
// import { DecodeWord } from "@/components/sections/hero/components/decodeWord";

// // utils
// import { motion } from "framer-motion";

// export const Hero = () => {
//   return (
//     <div className="flex flex-col gap-4">
//       {/* top lines */}
//       <div className="flex flex-col gap-4">
//         <div className="relative">
//           <HorizontalGridLine />
//         </div>
//         <div className="relative">
//           <HorizontalGridLine size="sm" dashed />
//         </div>
//       </div>

//       {/* content */}
//       <Container>
//         <div className="py-8 flex flex-col gap-4">
//           <GridLineWrapper className="col-span-2 sm:col-span-3 lg:col-span-2">
//             <p className="font-medium text-lg whitespace-nowrap">
//               <DecodeWord word="Full Stack Developer &#183; Dublin &#183; Tommy" />
//             </p>
//           </GridLineWrapper>

//           <GridLineWrapper className="col-span-2 sm:col-span-3 lg:col-span-2">
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//               className="text-5xl leading-[3.5rem] font-semibold"
//             >
//               Hey there, I&apos;m Tommy! A full stack developer from Ireland
//             </motion.h1>
//           </GridLineWrapper>

//           <GridLineWrapper className=" col-span-2">
//             <div className="pr-4">
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.6 }}
//                 className="text-lg text-tertiary-500"
//               >
//                 Currently I&apos;m working as a full time firefighter /
//                 paramedic while pursuing my passion in tech and web development.
//               </motion.p>
//             </div>
//           </GridLineWrapper>

//           <GridLineWrapper className="col-span-2">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.7 }}
//               className="flex items-center gap-1"
//             >
//               <p>Check out more about me below!</p>
//               <motion.div
//                 animate={{ y: [0, -5, 0] }}
//                 transition={{
//                   delay: 1.5,
//                   duration: 1.2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <ArrowDownCircle className="w-5 h-5 text-brand" />
//               </motion.div>
//             </motion.div>
//           </GridLineWrapper>
//         </div>
//       </Container>

//       {/* bottom lines */}
//       <div className="flex flex-col gap-4">
//         <div className="relative">
//           <HorizontalGridLine size="sm" dashed />
//         </div>
//         <div className="relative">
//           <HorizontalGridLine />
//         </div>
//       </div>
//     </div>
//   );
// };
