import React from 'react';
import "./sideMenu.css";
import bg_dash from "../../images/dashboard.png";
import bg_std from "../../images/icons-students.png";
import bg_ex from "../../images/icons-exams.png";
import bg_fin from "../../images/icons-finances.png";
import bg_tch from "../../images/icons-teachers.png";
import bg_homew from "../../images/icons-homwork.png";

export default function sideMenu() {
    return (
        <div className="sideMenu ">
                <div className="sideMenu-Header">
                    <div className="image"></div>
                    <div className="text">School name</div>
                </div>
                <div className="headings-Container">
                    <ul>
                        <li className="item">
                            <div className="item-content">
                                <div className="item-image" style={{backgroundImage: `url(${bg_dash})`}}></div>
                                <a href="#" className="item-link" >Dashboard</a>
                            </div> 
                        </li>
                        <li className="item">
                            <div className="item-content">
                                <div className="item-image" style={{backgroundImage: `url(${bg_std})`}}></div>
                                <a href="#" className="item-link" >Students</a>
                            </div> 
                        </li>
                        <li className="item">
                            <div className="item-content">
                                <div className="item-image" style={{backgroundImage: `url(${bg_tch})`}}></div>
                                <a href="#" className="item-link">Teachers</a>
                            </div> 
                        </li>
                        <li className="item">
                            <div className="item-content">
                                <div className="item-image" style={{backgroundImage: `url(${bg_ex})`}}></div>
                                <a href="#" className="item-link">Exams</a>
                            </div> 
                        </li>
                        <li className="item">
                            <div className="item-content">
                                <div className="item-image" style={{backgroundImage: `url(${bg_homew})`}}></div>
                                <a href="#" className="item-link">Homework</a>
                            </div> 
                        </li>
                        <li className="item">
                            <div className="item-content">
                                <div className="item-image" style={{backgroundImage: `url(${bg_fin})`}}></div>
                                <a href="#" className="item-link">Finances</a>
                            </div> 
                        </li>
                    </ul>
                </div>
                <div className="sideMenu-footer">
                    <div className="sideMenu-footer-text ">New action</div>
                    <div className="sideMenu-footer-sign">+</div>
                </div>
            </div>
    )
}