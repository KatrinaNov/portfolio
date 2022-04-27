import React from 'react';
import styleContainer from "../../assets/styles/Container.module.css";
import style from './Skills.module.css';
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsSection}>
            <div className={styleContainer.container}>
                <h2>My skills</h2>
                <div className={style.skills}>
                    <Skill/>
                </div>
            </div>
        </div>
    );
};

export default Skills;