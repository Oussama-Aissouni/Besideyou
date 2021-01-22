import React from 'react';
import "./students.css";
import bg_dash from "../../images/dashboard@2x.png";

export default function students() {
    const Std =[
        {
            id:1,
            name:"Carole Chimako",
            class:"class",
            image:bg_dash
        },
        {
            id:2,
            name:"Chloé Modibo",
            class:"class",
            image:bg_dash
        },
        {
            id:3,
            name:"Diego Morata",
            class:"class",
            image:bg_dash
        },
        {
            id:4,
            name:"Grigoriy Kozhukhov",
            class:"class",
            image:bg_dash
        },
        {
            id:5,
            name:"Laura Sofía Ureña",
            class:"class",
            image:bg_dash
        },
        {
            id:6,
            name:"María Paula Morterero",
            class:"class",
            image:bg_dash
        },
        {
            id:7,
            name:"Núria Moura",
            class:"class",
            image:bg_dash
        },
        {
            id:8,
            name:"Sofía Alcocer",
            class:"class",
            image:bg_dash
        }
    ]
    return (
        <div className="students-container">
            <div className="filter">
                <div className="dropdown">
                    <div className="dropdown-text">Select Class</div>
                    <div className="dropdown-icon"></div>
                </div>
                <div className="search-box">
                    <div className="search-box-text">Select Class</div>
                    <div className="search-box-icon"></div>
                </div>
                <div className="plus">
                    <div className="plus-icon"></div>
                </div>
            </div>
            {Std.map(student =>{
                return(
                    <div className="student">
                        <div className="student-image" style={{backgroundImage:"url(" + student.image + ")"}}></div>
                        <div className="student-infos">
                            <div className="student-name">{student.name}</div>
                            <div className="student-class">{student.class}</div>
                        </div>
                    </div>
                )}
           )}
        </div>
    )
}
