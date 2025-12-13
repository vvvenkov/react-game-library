import { Link } from "react-router"

export default function Header({
    user,
}) {
    console.log(user)
    return (
        <header>

            {/* <!-- Navigation --> */}
            <nav>
                <Link className="home" to="/"> <img src="./images/logo.png" alt="logo" /> </Link>
                <Link to="/games">Catalog</Link>
                {/* <!-- Logged-in users --> */}
                <div id="user">
                    <Link to="/games/create">Add Game</Link>
                    <Link to="/users/logout">Logout</Link>\
                </div>
                {/* <!-- Guest users --> */}
                <div id="guest">
                    <Link to="/users/login">Login</Link>
                    <Link to="/users/register">Register</Link>
                </div>
            </nav>
        </header>
    )
}