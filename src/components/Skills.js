import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase,  FaGitAlt, FaGithub  } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiPostman,  SiMysql } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

import "./Skills.css";



function Skills() {
    return (
        <>
            <div id="Skills">
                <div className="skills">
                    <h2>Skills</h2>
                    <div className="AllSkill">
                        <div className="Frontend">
                            <h3>Frontend</h3>
                            <div className="Fskill">
                                <div className="Html">
                                    <span className="icon"><FaHtml5 /></span>HTML
                                </div>
                                <div className="Css">
                                    <span className="icon"><FaCss3Alt /> </span>CSS
                                </div>
                                <div className="JavaScript">
                                    <span className="icon"><FaJs /> </span>JavaScript
                                </div>
                                <div className="ReactJs">
                                    <span className="icon"><FaReact /> </span>React Js
                                </div>
                                <div className="Tailwind">
                                    <span className="icon"><SiTailwindcss /></span> Tailwind
                                </div>

                                <div className="Bootstrap">
                                    <span className="icon"><SiBootstrap /></span> Bootstrap
                                </div>

                            </div>
                        </div>
                        {/* <div className="Backend">
                               <h3>Backend</h3>
                            <div className="Bskill">
                                <div className="">
                                    <span className="icon"><FaHtml5 /></span>HTML
                                </div>
                                <div className="Css">
                                    <span className="icon"><FaCss3Alt /> </span>CSS
                                </div>
                                <div className="JavaScript">
                                    <span className="icon"><FaJs /> </span>JavaScript
                                </div>
                                <div className="ReactJs">
                                    <span className="icon"><FaReact /> </span>React Js
                                </div>
                                <div className="Tailwind">
                                    <span className="icon"><SiTailwindcss /></span> Tailwind
                                </div>

                                <div className="Bootstrap">
                                    <span className="icon"><SiBootstrap /></span> Bootstrap
                                </div>

                            </div>
                        </div> */}
                        <div className="ToolsandTechnology">
                             <h3>Tools & Technologies</h3>
                            <div className="Dskill">
                                <div className="Sql">
                                    <span className="icon"><FaDatabase /></span>MySql
                                </div>
                                <div className="Git">
                                    <span className="icon">< FaGitAlt /> </span>Git
                                </div>
                                <div className="GitHub">
                                    <span className="icon">< FaGithub  /> </span>GitHub
                                </div>
                                <div className="VsCode">
                                    <span className="icon"><VscVscode /> </span>VsCode
                                </div>
                                <div className="Postman">
                                    <span className="icon"><SiPostman /></span> Postman
                                </div>

                                <div className="MySqlWorkBench">
                                    <span className="icon">< SiMysql /></span> MySql WorkBench
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Skills;