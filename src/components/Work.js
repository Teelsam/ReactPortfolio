import React from 'react';
import WorkDayScheduler from "../images/WorkDayScheduler.png";
import EmployeeTrackerSQL from "../images/EmployeeManager.png";
import SVGMaker from "../images/SVGMaker.png";
import CheatSheetGen from "../images/CheatSheetGen.png";
import EconORM from '../images/EcomORM.png';
import ExpressjsNoteTaker from '../images/ExpressjsNoteTaker.png';
//imports for functionality

function Work() {//linked images to my projects are returned as html elements
    return (
        <div>
            <section id="employeeTracker">
                <a href="https://github.com/Teelsam/EmployeeTrackerSQL" ><img src={EmployeeTrackerSQL} alt="emplyeetracker terminal"></img></a>
            </section>
            <section id="workDayScheduler">
                <a href="https://teelsam.github.io/Work-Day-Scheduler/"><img src={WorkDayScheduler} alt="work day scheduler site"></img></a>
            </section>
            <section id="SVGMaker">
                <a href="https://github.com/Teelsam/OOPSVGMaker"><img src={SVGMaker} alt="SVG shape created"></img></a>
            </section>
            <section id="EcomORM">
                <a href="https://github.com/Teelsam/ECom-ORM"><img src={EconORM} alt="backend project json data"></img></a>
            </section>
            <section id="CheatSheetGen">
                <a href="https://github.com/Teelsam/CheatSheetGen"><img src={CheatSheetGen} alt="homepage of cheatsheet site"></img></a>
            </section> <section id="ExpressjsNoteTaker">
                <a href="https://github.com/Teelsam/ExpressJSNoteTaker"><img src={ExpressjsNoteTaker} alt="homepage of note taker site"></img></a>
            </section>
        </div>
    )
}
export default Work;