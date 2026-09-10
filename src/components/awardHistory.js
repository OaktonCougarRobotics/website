import { AwardSection } from "./awardSection";

export function AwardHistory() {

return `

<section class="awards-hero">

    <div class="awards-hero-background"></div>

    <div class="awards-hero-content fade-up">

        <p class="eyebrow">
            OAKTON COUGAR ROBOTICS
        </p>

        <h1>
            Award History
        </h1>

        <p class="description">
            Celebrating the achievements of Cougar Robotics
            teams throughout the years.
        </p>

    </div>

</section>



<section class="awards-current">

<div class="container">

    <p class="section-tag">
        2025–2026 SEASON
    </p>

    <h2>
        2025–2026 Awards
    </h2>


    ${AwardSection(
        "FRC Team 623",
        [
            "2026 - Regional Semifinalists, CHS District Severn MD",
            "2025 - District Event Finalist, CHS District Severn MD"
        ]
    )}


    ${AwardSection(
        "FTC Team 226",
        [
            "First Alliance at Norfolk Qualifiers",

            "Inspire Award at Norfolk Qualifiers 3rd Place",

            "Inspire Award at Richmond Qualifiers 2nd Place",

            "Chesapeake Baltimore, MD Qualifier II 1st Place"
        ]
    )}


    ${AwardSection(
        "FTC Team 369",
        [
            "First Alliance Captain at Norfolk Qualifiers",

            "Winning Team Alliance Captain at Richmond Qualifiers",

            "Inspire Award at Richmond Qualifiers 3rd Place",

            "Alliance 4 Captain - District Championship"
        ]
    )}

</div>

</section>


<section class="awards-previous">

<div class="container">

    <p class="section-tag">
        2024–2025 SEASON
    </p>

    <h2>
        2024–2025 Awards
    </h2>

    ${AwardSection(
        "Awards",
        [
            "Division Team Captain at FTC World Championships",

            "Finalist at Chesapeake Championships",

            "Finalist at Haymarket VA Qualifier",

            "Won Innovate Award sponsored by RTX",

            "Finalist at Virginia Beach Qualifier",

            "Won Control Award - Celebrates an innovative control system or application of control components – electrical, mechanical or software – to provide unique machine functions.",

            "2024 - Innovation in Control Award, CHS District Portsmouth VA Event",

            "2024 - Creativity Award sponsored by Rockwell Automation, CHS District Falls Church VA Event",

            "2024 - Creativity Award sponsored by Rockwell Automation, FIRST Chesapeake District Championship"

        ]
    )}

</div>

</section>



<section class="awards-past">

<div class="container">

    <p class="section-tag">
        OUR HISTORY
    </p>

    <h2>
        Past Awards
    </h2>

    ${AwardSection(
        "Awards",
        [
            "2023 - Innovation in Control Award, CHS District Alexandria VA Event",

            "Think Award (2023-2024 Season) - Celebrates and recognizes a team which has developed sustainable practices to have a positive environmental impact and achieve long-term continuity.",

            "Team Sustainability Award(2023-2024 Season) - Celebrates and recognizes a team which has developed sustainable practices to have a positive environmental impact and achieve long-term continuity.",

            "Imagery Award in honor of Jack Kamen (2023-2024 Season) - Celebrates attractiveness in engineering and outstanding visual aesthetic integration of machine and team appearance.",

            "Team Spirit Award (2023-2024 Season) - Celebrates extraordinary enthusiasm and spirit through exceptional partnership and teamwork furthering the objectives of FIRST.",

            "Inspire Award (2023-2024 Season) - Celebrates Gracious Professionalism® on and off the playing field and success in the team’s robot. This team shares experiences and enthusiasm with everyone involved.",

            "Judges’ Award (may not be at all tournaments) (2023-2024 Season) Celebrates unique efforts, performance, or dynamics that merit recognition, but does not fit into any other categories.",

            "Gracious Professionalism® Award (2023-2024 Season) - Celebrates outstanding demonstration of FIRST Core Values such as continuous Gracious Professionalism® and working together both on and off the playing field.",

            "Engineering Inspiration Award (2023-2024 Season) Celebrates outstanding success in advancing respect and appreciation for engineering within a team’s school or organization and community.",

            "Creativty Award (2023-2024 Season)",

            "Design Award (2023-2024 Season) - Recognizes design elements that are both functional and aesthetic",

            "Quality Award (2023-2024 Season) - Celebrates machine robustness in concept and fabrication.",

            "(Won) Control Award (2023-2024 Season) - Celebrates an innovative control system or application of control components – electrical, mechanical or software – to provide unique machine functions.",

            "Excellence in Engineering Award (2023-2024 Season) - Celebrates the team that demonstrates a professional approach to the design process.",

            "Autonomous Award (2023-2024 Season) -Celebrates the team that has demonstrated consistent, reliable, high-performance robot operation during autonomously managed actions. Evaluation is based on the robot’s ability to sense its surroundings, position itself or onboard mechanisms appropriately, and execute tasks.",

            "Think Award #2 (Districts 2022)",

            "Competed in 2022 World Championship",

            "Top 3 at Battle Of Baltimore, Fall 2021",

            "Excellence in Engineering 2019 and 2020",

            "FTC Made it to State Championships"
        ]
    )}

</div>

</section>

`;

}