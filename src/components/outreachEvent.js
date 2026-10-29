export function OutreachEvent(
    name,
    image,
    description,
    reverse = false
) {

return `

<div class="outreach-event ${reverse ? "reverse" : ""}">

    <div class="outreach-image">

        <img
            src="${image}"
            alt="${name}"
        >

    </div>

    <div class="outreach-content">

        <h2>
            ${name}
        </h2>

        <p>
            ${description}
        </p>

    </div>

</div>

`;

}