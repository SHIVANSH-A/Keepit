import React from "react";

function Footer(){
    const date = new Date();
    const curr_year = date.getFullYear();
    return <footer>
        <p>Copyright@{curr_year}</p>
    </footer>
}

export default Footer;