import './style.css';


import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { TeamPage } from './components/teamPage';
import { BusinessPage } from './components/businessPage';


document.querySelector('#app').innerHTML = `


${Navbar()}

${BusinessPage(

    "R&D",

    "Research & Development",

    "The Oakton R&D Team serves as the robotics team’s center for research and design. The goal of the robotics team is to provide Oakton’s youth with opportunities to learn robotics-related skills and enhance them through hands-on practice and collaboration. R&D members are responsible for solving problems by designing and building robots under the guidance of the R&D captains and leadership team. Outstanding members who demonstrate excellent potential and technical skills may be selected to join one of the FTC/FRC teams the following year.",

    "/images/R&DGroupPhoto.jpg",

    [
        "New Technology Exploration",
        "Prototype Development",
        "Engineering Research",
        "Innovation & Design"
    ]

)}


${Footer()}


`;