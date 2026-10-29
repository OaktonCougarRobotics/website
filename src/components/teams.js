import { TeamCard } from "./teamCard";


export function Teams() {

return `

<section class="team-hero">

    <div class="team-hero-background"></div>


    <div class="team-hero-content">

        <div class="fade-up">

            <p class="eyebrow">
                OAKTON COUGAR ROBOTICS
            </p>

            <h1>
                Meet Our Teams
            </h1>

            <p>
                Five programs. One community.
                Building engineers, leaders, and innovators
                through robotics.
            </p>

        </div>

    </div>

</section>



<section class="teams">


<div class="container">


<h2>
    Explore Our Teams
</h2>


<p class="teams-intro">

Oakton Cougar Robotics is built from
multiple programs working together to
design, build, compete, and inspire.

</p>



<div class="team-grid">


${TeamCard(
"/images/623Team2026.jpg",
"FRC Team 623",
"FIRST Robotics Competition",
"Oakton's flagship robotics team competing at the highest level of FIRST Robotics.",
"/frc-623.html"
)}



${TeamCard(
"/images/ftc226Photo.jpg",
"FTC Team 226",
"FIRST Tech Challenge",
"Students designing, building, and programming competitive robots.",
"/ftc-226.html"
)}



${TeamCard(
"/images/FTC369GroupPhoto1.jpg",
"FTC Team 369",
"FIRST Tech Challenge",
"A student-led engineering team focused on innovation and competition.",
"/ftc-369.html"
)}



${TeamCard(
"/images/businessTeam2026.jpg",
"Business Team",
"Marketing & Operations",
"Supporting Cougar Robotics through branding, sponsorships, and outreach.",
"/business.html"
)}



${TeamCard(
"/images/R&DGroupPhoto.jpg",
"R&D",
"Research & Development",
"Exploring new technologies and developing future robotics solutions.",
"/rnd.html"
)}


</div>


</div>


</section>

`;

}