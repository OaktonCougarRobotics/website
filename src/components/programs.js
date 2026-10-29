import { ProgramCard } from "./programCard";

export function Programs() {

    return `

<section class="programs">

    <div class="container">

        <p class="section-tag">
            FIND YOUR PLACE
        </p>

        <h2>
            Every Student Has a Home Here
        </h2>

        <p class="program-intro">

            Whether you're passionate about programming,
            engineering, business, media, or design,
            there's a place for you on our team.

        </p>

        <div class="program-grid">

            ${ProgramCard(
                "💻",
                "Programming",
                [
                    "Java",
                    "Autonomous",
                    "Vision Processing",
                    "AI & Sensors"
                ]
            )}

            ${ProgramCard(
                "⚙️",
                "Mechanical",
                [
                    "CAD",
                    "3D Printing",
                    "CNC",
                    "Machining"
                ]
            )}

            ${ProgramCard(
                "⚡",
                "Electrical",
                [
                    "Wiring",
                    "Control Systems",
                    "Sensors",
                    "CAN Bus"
                ]
            )}

            ${ProgramCard(
                "📣",
                "Business & Media",
                [
                    "Marketing",
                    "Photography",
                    "Finance",
                    "Outreach"
                ]
            )}

        </div>

    </div>

</section>

`;

}