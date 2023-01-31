import { Link } from "react-router-dom";

export default function Card(props) {
    return (
        <Link className="card" to={`/products/${props.id}`} >
            <div className="card--img">
                <img src={props.img} alt="bread pic" width={200} />
            </div>
            <div className="card--details">
                <h3 className="card--title">
                    {props.title}
                </h3>
                <p className="card--price">
                    #{props.price}
                </p>
            </div>
        </Link>
    )
}