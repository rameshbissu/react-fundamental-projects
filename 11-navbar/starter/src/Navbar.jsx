import React, { useState,useRef } from 'react'
import {FaBars} from 'react-icons/fa'
import {links,social} from './data'
import logo from './logo.svg'
const Navbar = () => {
    const [showLinks,setShowLinks] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)
    const toggleLinks = () => {
        console.log(linksRef.current.getBoundingClientRect())
        setShowLinks(!showLinks)
    }
    const linkStyle  = {
        height : showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : '0px'
    }
  return (
    <nav>
        <div className="nav-center">
            <div className="nav-header">

            <img src={logo} alt="logo"  className='logo'/>
            <button type="button" className="nav-toggle" onClick={toggleLinks}>
                <FaBars className=''/>
            </button>

            </div>
            
            <div className='links-container' ref={linksContainerRef} style={linkStyle}>
                <ul className="links" ref={linksRef}>
                    {links.map((link)=>{
                        const {id,url,text} = link;
                        return <li key={id}>
                            <a href={url}>{text}</a>
                        </li>
                    })}
                </ul>
            </div>
                
        </div>
        
    </nav>
  )
}

export default Navbar