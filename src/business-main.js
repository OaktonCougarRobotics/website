import './style.css';


import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { TeamPage } from './components/teamPage';
import { BusinessPage } from './components/businessPage';


document.querySelector('#app').innerHTML = `


${Navbar()}

${BusinessPage(

    "Business Team",

    "Marketing, Outreach & Operations - Email us at: cougar.robotics.business@gmail.com",

    "The business team is the behind the scenes group of our robotics team which founded by Aspen Harter in 2018. They are responsible for community outreach, sponsorships, engineering notebook, scouting, the official Oakton Cougar Robotics website, and social media. The business team members are on the team for both FTC and FRC. The Business team is much smaller than FTC & FRC but is beneficial to the success of the Oakton Cougar Robotics. They attend competitions and talk to other teams for possible collaborations for outreach events and scout for alliances. We are the head of the behind the scenes activity! The business team paves the way for FTC and FRC to succeed in competitions, financially, and popularity of this club.",

    "/images/businessTeam2026.jpg",

    [
        "Sponsorship Development",
        "Marketing & Branding",
        "Community Outreach",
        "Team Operations"
    ]

)}


${Footer()}


`;