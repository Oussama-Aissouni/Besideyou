import React from 'react';
import "./sideMenu.css";
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import bg_dash from "../../images/dashboard.png";
import bg_std from "../../images/icons-students.png";
import bg_ex from "../../images/icons-exams.png";
import bg_fin from "../../images/icons-finances.png";
import bg_tch from "../../images/icons-teachers.png";
import bg_homew from "../../images/icons-homwork.png";

export default function sideMenu() {
    return (
        
        <SideNav className="Sidenav">
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="Students">
                <NavItem eventKey="Logo">
                    <NavIcon className="icon">
                    <div className="image"></div>
                    </NavIcon>
                    <NavText>
                        School Name
                    </NavText>
                </NavItem>
                <NavItem eventKey="Dashboard">
                    <NavIcon>
                        <div className="item-image" style={{backgroundImage: `url(${bg_dash})`}}></div>
                    </NavIcon>
                    <NavText>
                        Dashboard
                    </NavText>
                </NavItem>
                <NavItem eventKey="Students">
                    <NavIcon>
                        <div className="item-image" style={{backgroundImage: `url(${bg_std})`}}></div>
                    </NavIcon>
                    <NavText>
                        Students
                    </NavText>
                </NavItem>
                <NavItem eventKey="Teachers">
                    <NavIcon>
                        <div className="item-image" style={{backgroundImage: `url(${bg_tch})`}}></div>
                    </NavIcon>
                    <NavText>
                        Teachers
                    </NavText>
                </NavItem>
                <NavItem eventKey="Exams">
                    <NavIcon>
                        <div className="item-image" style={{backgroundImage: `url(${bg_ex})`}}></div>
                    </NavIcon>
                    <NavText>
                        Exams
                    </NavText>
                </NavItem>
                <NavItem eventKey="Homework">
                    <NavIcon>
                        <div className="item-image" style={{backgroundImage: `url(${bg_homew})`}}></div>
                    </NavIcon>
                    <NavText>
                        Homework
                    </NavText>
                </NavItem>
                <NavItem eventKey="Finances">
                    <NavIcon>
                        <div className="item-image" style={{backgroundImage: `url(${bg_fin})`}}></div>
                    </NavIcon>
                    <NavText>
                        Finances
                    </NavText>
                </NavItem>
                {/* <NavItem eventKey="Finances">
                    <NavText>
                    <div className="sideMenu-footer">
                        <div className="sideMenu-footer-text ">New action</div>
                        <div className="sideMenu-footer-sign">+</div>
                    </div>
                    </NavText>
                </NavItem> */}
            </SideNav.Nav>
        </SideNav>
        
    )
}