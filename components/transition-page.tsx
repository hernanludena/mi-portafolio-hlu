"use client"

import { pageTransitionTiming, transitionVariantsPage } from "@/utils/motion-transitions";
import { AnimatePresence, motion } from "framer-motion";

const TransitionPage = () => {
    return (
        <AnimatePresence mode="wait">
            <div>
                <motion.div
                    className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#1e3a8a]"
                    variants={transitionVariantsPage}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={pageTransitionTiming}
                ></motion.div>
            </div>
        </AnimatePresence>
    );
}

export default TransitionPage;