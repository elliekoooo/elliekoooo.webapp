import { useState, type PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GradientShimmer from "../motion/GradientShimmer";

export const Card = (props:{order:number, set:(v:number)=>void, wavyText: string, icon:any} & PropsWithChildren) => {
    const [_order, setOrdering] = useState(0);

    const handleStop = () => {
        props.set(0);
        setOrdering(0);
    }

    const handleMove = () => {
        props.set(props.order);
        setOrdering(props.order);
    }

    return (
        <div className="hover:cursor-pointer" onMouseEnter={()=> handleMove()} onMouseLeave={()=>handleStop()}>
            <div className="uppercase text-lg flex">
                <span>
                    <FontAwesomeIcon icon={props.icon} />
                </span>
                {
                    props.order == _order ?
                        <span className="mx-5">
                            <GradientShimmer text={props.wavyText}></GradientShimmer>
                        </span>
                                :
                        <span className=" mx-5">{props.wavyText}</span>
                }
            </div>
            { props.children  }
        </div>
    )
    
}