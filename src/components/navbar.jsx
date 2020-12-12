import React from 'react';
import s from '../styles/navbar.module.css';


const Navbar = () => {
    return (
        <div className={s.cont__princ}>
            <div className={s.cont___nav}>
                <div>
                    <h1 className={s.logo}>C<span>.</span>Lindarte</h1>
                </div>
                <div>
                    <ul className={s.cont___list}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar