import { Link, useLocation } from "react-router-dom";
import { ColorfulText } from "../motion/Colorful";

export const MenuBar = () => {

    const menu = ["about", "projects", "contacts"];

    const selected = useLocation().pathname.replace("/", "");
    
    return (
        <div className="flex gap-10 justify-end mx-20 my-8">
            {
                menu.map((m: string)=> (
                    <div className={"uppercase hover:text-yellow-500 hover:cursor-pointer hover:rounded-sm tracking- p-1"}>
                        {
                            <Link to={m}>
                                {
                                    selected == m ?
                                        <ColorfulText text={m}></ColorfulText>
                                        :
                                        m
                                }
                            </Link>
                        }
                    </div>
                ))
            }
        </div>
    )
}