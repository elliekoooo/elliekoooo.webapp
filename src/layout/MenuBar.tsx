import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faContactBook, faFolder, faHomeAlt, faPerson } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const MenuBar = () => {

    const menus = [
        {name: "home", icon: faHomeAlt},
        {name: "about", icon: faPerson},
        {name: "projects", icon: faFolder},
        {name: "contact", icon: faContactBook}
    ]

    const location = useLocation();

    const selected = useLocation().pathname.replace("/", "");
    
    return (
        <div className="flex gap-10 justify-end mx-20 my-8" style={{"visibility": location.pathname == ("/home" || "/")? "hidden" : "visible"}}>
            {
                menus.map((m: {name: string, icon: IconDefinition})=> (
                    <div className={"uppercase hover:text-yellow-500 hover:cursor-pointer hover:rounded-sm tracking-widest"}>
                        {
                            <Link to={m.name}>
                                {
                                    selected == m.name ?
                                        <FontAwesomeIcon icon={faCheckCircle} color="red"></FontAwesomeIcon>
                                        :
                                        <FontAwesomeIcon icon={m.icon}></FontAwesomeIcon>
                                }
                            </Link>
                        }
                    </div>
                ))
            }
        </div>
    )
}