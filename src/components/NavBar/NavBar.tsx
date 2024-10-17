import { Avatar } from "@mui/material";
import UserImage from "../../assets/profileImage.jpg";
import "./NavBar.css";

function Navbar(){
    return (<>
        <div className="navigation-bar">
            <h3 className="heading">Questions</h3>
            <h2 className="heading">CodeNest</h2>
            <Avatar alt="Shrajan Pandey" src={UserImage} sx={{ width: 45, height: 45 }}/>
        </div>
    </>);
}

export default Navbar;