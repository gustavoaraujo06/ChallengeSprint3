import { Link } from "react-router-dom";

export default function HeaderItem({title, location}: {title: string, location: string}){   
    return (
        <Link to={location} className="headerItem">
            {title}
        </Link>
    )
}