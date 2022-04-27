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
                    <Skill
                        title={'React'}
                        description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  since the 1500s, when an unknown '}
                    />
                    <Skill title={'Js'} description={'Lorem Ipsum has been the industry\'s standard dummy text ever'}/>
                    <Skill title={'CSS'} description={'printer took a galley of type and scrambled it to make a type specimen book.'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;