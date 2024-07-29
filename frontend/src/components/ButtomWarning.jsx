import { Link } from "react-router-dom";
export const ButtomWarning= ({label,to,buttonText})=>{
    return(
        <div className="py-2 text-sm flex justify-center font-sans 	font-family: ui-sans-serif">
            <div>
                    {label}
            </div>
            <Link to={to} className="pointer underline pl-1 cursor-pointer">
            {buttonText} </Link>
        </div>
    )
}