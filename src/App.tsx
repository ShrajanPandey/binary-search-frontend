import "./App.css";
import CodingPage from "./pages/CommonCodingPage/CodingPage";
import Navbar from "./components/NavBar/NavBar";
import PeerCodingPage from "./pages/PeerCodingPage/PeerCodingPage";

function App() {
    return (
        <>
            <Navbar />
            {/* <PeerCodingPage /> */}
            <CodingPage />
        </>
    );
}

export default App;
