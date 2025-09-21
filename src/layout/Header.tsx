import { motion } from "framer-motion";

export const Header = () => {

    return (
        <div className="grid grid-cols-3">
            <div className="col-span-2 flex flex-col justify-center items-start">
                <h1>Ellie Koo</h1>
                <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 3 * 0.05 }}
                >
                This is my Portfolio
                </motion.span>
            </div>
            <div className="col-span-1">
                <img src="/images/image.png"/>
            </div>
        </div>
    )
}



// <div className="grid grid-cols-3 grid-rows-3 px-20 gap-15">
        //     <div className="col-span-2 row-span-3 flex flex-col justify-center items-start">
        //         <h1>Ellie Koo</h1>
        //         <motion.span
        //         initial={{ y: 20, opacity: 0 }}
        //         animate={{ y: 0, opacity: 1 }}
        //         transition={{ duration: 0.5, delay: 3 * 0.05 }}
        //         >
        //         This is my Portfolio
        //         </motion.span>
        //         {/* <div className="text-gray-400 mx-auto"><WavyText text="Hey, This is my Portfolio"/></div> */}
        //     </div>
        //     <div className="col-span-1 row-span-3">
        //         <SlideIn>
        //             <img src="/images/image.png"></img>
        //         </SlideIn>
        //     </div>
        // </div>