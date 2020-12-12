import React from 'react'
import s from '../styles/banner.module.css'
import { FaFacebookF } from "react-icons/fa";

const Banner = () => {
    return (
        <div className={s.cont__banner}>
            <div className={s.container}>
                 <div className={s.cont__banner__text}>
                    
                    <ul className={s.cont__banner__icons}>
                        <li><FaFacebookF className={s.cont__banner__icons__item}/></li>
                        <li><FaFacebookF className={s.cont__banner__icons__item}/></li>
                        <li><FaFacebookF className={s.cont__banner__icons__item}/></li>
                        <li><FaFacebookF className={s.cont__banner__icons__item}/></li>
                        <li><FaFacebookF className={s.cont__banner__icons__item}/></li>
                        <li><FaFacebookF className={s.cont__banner__icons__item}/></li>
                    </ul>
                    <div>
                        <h1> Hello, i am Camilo Lindarte</h1>
                    </div>
                    <div>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dolorem?</p>
                    </div>
                    
                
                </div>
                <div className={s.cont__banner__img}>
                    
                    
                    
                
                </div>
            </div>
        </div>
    )
}

export default Banner   