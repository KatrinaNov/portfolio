import React from 'react';
import '../../assets/styles/container.css'
import style from './Hero.module.css';

const Hero = () => {
    return (
        <div className={style.hero}>
            <div className={"container"}>
                <div className={style.text}>
                    <span>Hi there</span>
                    <h1>I am Katrin Novik</h1>
                    <span>Frontend developer</span>
                </div>
                <div className={style.photo}>

                </div>
            </div>

        </div>
    );
};

export default Hero;