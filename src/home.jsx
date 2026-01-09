import { Link } from 'react-router-dom';
// import axios from 'axios';
export function Home(){
    return (
        < >
        <p style={{"color": "white"}} >you have logged in  here logout</p>
        <Link style={{"color": "white"}}to="../">logout?</Link> 
        </>

    );
}

