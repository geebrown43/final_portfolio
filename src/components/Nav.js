import React from 'react'
import '../App.css'

export default class Nav extends React.Component {
    render(){
        return(
            <div className="menu">
                <div className="menu_brand">
               Ellis Brown
                </div>
               <div className="links">
                    <a href="https://www.linkedin.com/in/geebrown43/" target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                    <a href="https://github.com/geebrown43" target='_blank' rel='noopener noreferrer'>GitHub</a>
               </div>
            </div>
        )
    }
}