import { Link } from "react-router-dom"

export const SideBar = () => {

    const menu = ["About", "Works", "Projects", "Contact"];


    return (
        <div className="flex text-2xs bg-[#FFFDD0] p-5 rounded-4xl m-7">
            {
                menu.map((m:string)=> (
                    <Link to={m} className="group m-1 hover:underline hover:font-bold text-[#9370DB] hover:text-[#000000] flex">
                        <h3>{m}</h3>
                        <img src={"/images/cat.png"} className="invisible w-3 h-3 m-2 group-hover:visible" />
                    </Link>
                ))
            }
        </div>
    )
}