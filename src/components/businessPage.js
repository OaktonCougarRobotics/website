export function BusinessPage(
    name,
    subtitle,
    description,
    image,
    focusAreas
) {

return `

<section class="team-detail-hero">

    <div class="team-detail-background"
         style="background-image:
         linear-gradient(
         rgba(5,8,14,.65),
         rgba(5,8,14,.75)
         ),
         url('${image}')">
    </div>


    <div class="team-detail-content">

        <div class="fade-up">

            <p class="eyebrow">
                OAKTON COUGAR ROBOTICS
            </p>

            <h1>
                ${name}
            </h1>

            <h3>
                ${subtitle}
            </h3>

        </div>

    </div>

</section>


<section class="team-about">

<div class="container">

<h2>
    About ${name}
</h2>

<p>
    ${description}
</p>

</div>

</section>


<section class="team-awards">

<div class="container">

<h2>
    What We Do
</h2>


<div class="award-grid">

${focusAreas.map(area => `

<div class="award-card">

⭐ ${area}

</div>

`).join("")}


</div>

</div>

</section>


`;

}