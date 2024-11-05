import React from "react"
import blogData from "../data/blog";

function Header() {
    return (
        <header>
            <h1 name = {blogData.name}></h1>
        </header>
    )
}


export default Header;