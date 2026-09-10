export function RobotCard(
    team,
    robotName,
    image,
    description,
    sketches,
    cad
) {

return `

<section class="robot-card">

    <div class="robot-header">

        <p class="eyebrow">
            ${team}
        </p>

        <h2>
            ${robotName}
        </h2>

    </div>


    <div class="robot-showcase">

        <div class="robot-image">

            <img
            src="${image}"
            alt="${robotName}">

        </div>


        <div class="robot-description">

            <h3>
                About the Robot
            </h3>

            <p>
                ${description}
            </p>

        </div>

    </div>



    <div class="design-process">

        <h3>
            Design Process
        </h3>


        <div class="design-grid">


            <div class="design-item">

                <img
                src="${sketches}"
                alt="Robot sketches">

            </div>



            <div class="design-item">

                <img
                src="${cad}"
                alt="CAD drawings">

            </div>


        </div>


    </div>


</section>


`;

}