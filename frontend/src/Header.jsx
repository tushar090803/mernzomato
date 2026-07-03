import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import api from './api';
function Header() {
    const navigate=useNavigate()
    
    const handleLogout = async (e) => {
    e.preventDefault();

    try {
        await api.get("/api/auth/logout")

        navigate("/register");
    } catch (error) {
        console.error(error);
    }
};

    return (
        <header
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 30px",
                backgroundColor: "#222",
                color: "white"
            }}
        >
            <h2>Food Delivery</h2>

            <button
                onClick={handleLogout}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#ff4d4f",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                    zIndex:1000
                }}
            >
                Logout
            </button>
        </header>
    );
}

export default Header;