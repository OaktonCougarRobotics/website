import './style.css';


import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { TeamPage } from './components/teamPage';



document.querySelector('#app').innerHTML = `


${Navbar()}

${TeamPage(

    "FTC Team 369",

    "FIRST Tech Competition",

    "Oakton FTC 369 is the other FTC (FIRST Tech Challenge) team at Oakton High School. The 369 team is composed of Oakton’s most skilled engineers who have prior experience in robotics and are well-versed in building high quality robots to compete under the FIRST Tech Challenge. Like FTC 226, 369 members specialize in different areas of robot design, such as the build and programming, with individual members focusing on teleoperated or autonomous programming.",

    "/images/FTC369GroupPhoto1.jpg",

    [
        "1st Place Think Award and Finalist Alliance 1st Pick at DCI #2 Qualifier",
        "1st Place Control Award and Finalist Alliance Captain at Virginia Beach VA Qualifier",
        "3rd Place Inspire Award and Finalist Alliance 1st Pick at Haymarket VA Qualifier",
        "Division Finalist Alliance Captain at Chesapeake Championship - Dulaman Division",
        "Division Team Captain at FTC World Championship"
    ]

)}


${Footer()}


`;