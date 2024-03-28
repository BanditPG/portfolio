import { Outlet } from "react-router";
import { useNavigate } from "react-router-dom";

export default function App() {
    const navigate = useNavigate();

    return (
    <main>
    <aside>
        <h1 
            onClick={() => navigate("/portfolio")} 
            className="banner"
        >
            KOŁODZIEJ.DEV
        </h1>
    </aside>

    <Outlet />

    <footer>&copy; { new Date().getFullYear() } Dominik Kołodziej</footer>
    </main>
    )
}