import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

type imageInfo = {
    srcs: string[] | unknown[]
};

export const ImageSlider:React.FC<imageInfo> = (
    {srcs}
) => {
    const [_srcs, setSrcs] = useState([]);
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(1); 
        
    const goLeft = () => {
        setLeft(l=> l-1);
        setRight(r => r-1);
    };
    
    const goRight = () => {
        setLeft(l=> l+1);
        setRight(r => r+1);
    };

    useEffect(()=> {
        const images: Record<string,string> = import.meta.glob("../assets/screenshot/*.{png,jpg,jpeg,gif,svg,webp}", {
            eager: true, // 바로 import (Promise 아님)
            import: "default", // default export만 가져오기
        });

        const imageNames = Object.keys(images).reduce((acc:string[], image:string)=> {
            const match = image.match(/assets\/screenshot\/([^\/]+)\.\w+$/);
            if (match) acc.push(match?.[1]);
            return acc;
        }, []);

        const sliderImages = Object.values(srcs).map(([k,v]:any,i)=> ([
            imageNames[i], v
        ])) as [];

        setSrcs(sliderImages);

    }, [srcs]);

    return (
        <div className="relative w-full">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {
                    _srcs?.slice(left, right).map((([key, _value]:[string, string])=> (
                        <div key={key} className={"mx-2"}> 
                            <div className="card reponsive-card">
                                <div className="card-image">
                                    <figure className="duration-700 ease-in-out">
                                        <img src={('/src/assets/screenshot/'+key+'.png')} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    )))
                }                

                <button onClick={goLeft}  hidden={left==0} type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/60 ring-white ring-2 dark:bg-gray-800 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-white group-focus:outline-none">
                        <FontAwesomeIcon icon={faCaretLeft} color={"white"}></FontAwesomeIcon>
                    </span>
                </button>
                <button onClick={goRight} hidden={right==_srcs.length} type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/60 ring-white ring-2 dark:bg-gray-800 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-white group-focus:outline-none">
                        <FontAwesomeIcon icon={faCaretRight} color="white"></FontAwesomeIcon>
                    </span>
                </button>
            </div>
        </div>
    )
};