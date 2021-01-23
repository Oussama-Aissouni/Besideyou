import React from 'react';
import "./infos.css";
import {BrowserRouter as Router , Switch , Route,Link } from 'react-router-dom';
import Details from './Tabs/Details/Details';
import Absence from './Tabs/Absence/Absence';
import Finance from './Tabs/Finance/Finance';
import Grades from './Tabs/Grades/Grades';
import Exams from './Tabs/Exams/Exams';
import Homework from './Tabs/Homework/Homework';
import Attitude from './Tabs/Attitude/Attitude';

export default function Infos() {
    return (
        <div className="Infos-container">
            <div className="Infos-data">
                <div className="Photo">
                    <div className="Student-photo"></div>
                    <div className="add">+</div>
                </div>
                <div className="Student-name">Student name</div>
            </div>
            <Router>
                <div className="Infos-navbar">
                    <ul className="Infos-list">
                        <li><Link to="/Details" className="link">Details</Link></li>
                        <li><Link to="/Absence" className="link">Absence</Link></li>
                        <li><Link to="/Finance" className="link">Finance</Link></li>
                        <li><Link to="/Grades" className="link">Grades</Link></li>
                        <li><Link to="/Exams" className="link">Exams</Link></li>
                        <li><Link to="/Homework" className="link">Homework</Link></li>
                        <li><Link to="/Attitude" className="link">Attitude</Link></li>
                    </ul>
                </div>
                <div className="Infos-forms">
                    <Switch>
                        <Route path="/Details" component={Details}></Route>
                        <Route path="/Absence" component={Absence}></Route>
                        <Route path="/Finance" component={Finance}></Route>
                        <Route path="/Grades" component={Grades}></Route>
                        <Route path="/Exams" component={Exams}></Route>
                        <Route path="/Homework" component={Homework}></Route>
                        <Route path="/Attitude" component={Attitude}></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
