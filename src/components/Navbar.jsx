import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <div className="logo">KD</div>
            <nav className="nav--list">
                <ul>
                    <li>
                        <Link to={'/products'}>Products</Link>
                    </li>
                    <li>
                        <Link to={'/account'}>Account</Link>
                    </li>
                    <li>
                        <Link to={'/cart'}>Cart</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}