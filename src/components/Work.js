import React from 'react';
import WorkDayScheduler from "../images/WorkDayScheduler.png";
import EmployeeTrackerSQL from "../images/EmployeeManager.png";
import SVGMaker from "../images/SVGMaker.png";


function Work() {
    return (
        <div>
            <section id="employeeTracker">
                <a href="https://github.com/Teelsam/EmployeeTrackerSQL" ><img src={EmployeeTrackerSQL}></img></a>
            </section>
            <section id="workDayScheduler">
                <a href="https://teelsam.github.io/Work-Day-Scheduler/"><img src={WorkDayScheduler}></img></a>
            </section>
            <section id="SVGMaker">
                <a href="https://github.com/Teelsam/OOPSVGMaker"><img src={SVGMaker}></img></a>
            </section>
        </div>
    )
}
export default Work;