export function TeamCard(image, title, subtitle, description, link) {

    return `

<div class="team-card">

    <div class="team-image">

        <img 
        src="${image}" 
        alt="${title}">

    </div>


    <div class="team-content">

        <h3>
            ${title}
        </h3>


        <p class="team-subtitle">
            ${subtitle}
        </p>


        <p>
            ${description}
        </p>


        <a href="${link}" class="btn btn-primary">
            Learn More
        </a>

    </div>

</div>

`;

}