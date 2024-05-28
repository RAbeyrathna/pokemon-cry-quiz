import { NavLink } from "react-router-dom"

export default function Header(){

    return(
        <header>
            <div id="headerBranding">
                Pokémon Quiz
            </div>
            <nav id="headerNavbar">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/quiz"}>Quiz</NavLink>
            </nav>
        </header>
    )
}