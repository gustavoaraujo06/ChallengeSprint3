import { Link } from "react-router-dom";

export default function Card({title, description, image, path}: {title: string, description: string, image: string, path: string}){
    return (
        <Link className="card" to={path}>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </Link>
    )

}