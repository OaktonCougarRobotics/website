import { ContactCard } from "./contactCard";
import { SocialCard } from "./socialCard";

export function ReachOut() {

return `

<section class="reach-hero">

    <div class="reach-hero-background"></div>

    <div class="reach-hero-content fade-up">

        <p class="eyebrow">
            OAKTON COUGAR ROBOTICS
        </p>

        <h1>
            Reach Out to Us
        </h1>

        <p class="description">

            Questions? Interested in joining?
            Connect with Cougar Robotics below.

        </p>

    </div>

</section>



<section class="contact-section">

<div class="container">

<h2>

Contact Our Team

</h2>

<div class="contact-grid">

${ContactCard(
"FRC Team 623",
"frc-interest@cougarrobotics.org"
)}

${ContactCard(
"Business Team",
"cougar.robotics.business@gmail.com"
)}

</div>

</div>

</section>



<section class="social-section">

<div class="container">

<h2>

Follow Cougar Robotics

</h2>

<div class="social-grid">

${SocialCard(
"📷 Instagram",
"@oaktonrobotics",
"https://www.instagram.com/oaktonrobotics/"
)}

${SocialCard(
"📷 FRC Instagram",
"@frc_623",
"https://www.instagram.com/frc_623/"
)}

${SocialCard(
"🎶 TikTok",
"@oakton.robotics",
"https://www.tiktok.com/@oakton.robotics"
)}

${SocialCard(
"🕊 X",
"@FRC623",
"https://x.com/FRC623"
)}

${SocialCard(
"🟦 Facebook",
"Cougar Robotics",
"https://www.facebook.com/CougarRobotics/"
)}

${SocialCard(
"▶ YouTube",
"@OaktonCougarRobotics",
"https://www.youtube.com/@OaktonCougarRobotics"
)}

</div>

</div>

</section>

`;

}