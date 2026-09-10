export function TeamPage(
    name,
    subtitle,
    description,
    image,
    awards
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

    <div class="team-detail-content fade-up team-delay">
    
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
    Recent Awards
</h2>

<div class="award-grid">

${awards.map(award => `

<div class="award-card">

🏆 ${award}

</div>

`).join("")}

</div>

</div>

</section>

`;

}