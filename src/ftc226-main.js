import './style.css';


import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { TeamPage } from './components/teamPage';



document.querySelector('#app').innerHTML = `


${Navbar()}

${TeamPage(

    "FTC Team 226",

    "FIRST Tech Competition",

    "Oakton FTC 226 is one of two FTC (FIRST Tech Challenge) teams at Oakton High School. The 226 team consists of aspiring young engineers tasked with building an 18-inch robot and competing in various challenges under FTC guidelines. Like FTC 369, 226 members specialize in different areas of robot design, such as the build and programming, with individual members focusing on teleoperated or autonomous programming.",

    "/images/ftc226Photo.jpg",

    [
        "2nd INSPIRE (Chesapeake Richmond VA)",
        "3rd INSPIRE (Norfolk)",
        "Finalist Award (Norfolk)",
        "1st INSPIRE (Baltimore)",
        "Finalist Alliance (Baltimore)"
    ]

)}


${Footer()}


`;