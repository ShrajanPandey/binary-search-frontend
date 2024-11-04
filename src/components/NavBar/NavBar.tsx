import { Avatar } from "@mui/material";
import { Icon } from '@iconify/react';
import UserImage from "../../assets/profileImage.jpg";
import "./NavBar.css";
import {backendApiCaller} from "../../apiCaller/backendApiCaller";

function Navbar(){

    const loadProblemDetails = async () => {

        await backendApiCaller.getProblemDescription("1");
        console.log(" FETCHED DETAILS --- ");
        
    }

    return (<>
        <div className="navigation-bar">
            <h3 className="heading">Questions</h3>
            <h2 className="heading">CodeNest <Icon icon="line-md:play-filled" width="1.45em" height="1.45em" onClick={loadProblemDetails}/> </h2>
            <Avatar alt="Shrajan Pandey" src={UserImage} sx={{ width: 45, height: 45 }}/>
        </div>
    </>);
}

export default Navbar;