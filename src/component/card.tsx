import { useState, type PropsWithChildren } from "react";
import { WavyText } from "../motion/WavyText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Card = (props:{order:number, wavyText: string, icon:any} & PropsWithChildren) => {
    const [_order, setOrdering] = useState(0);

    return (
        <div className="hover:cursor-pointer" onMouseEnter={()=> setOrdering(props.order)} onMouseLeave={()=>setOrdering(0)}>
            <div className="uppercase text-lg flex">
                <span>
                    <FontAwesomeIcon icon={props.icon} />
                </span>
                {
                    props.order == _order ?
                        <span className="mx-5">
                            <WavyText text={props.wavyText}></WavyText>
                        </span>
                                :
                        <span className="tracking-widest mx-5">{props.wavyText}</span>
                }
            </div>
            { props.children  }
        </div>
    )
    
}