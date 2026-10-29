export function EventCard(
    date,
    title,
    location,
    description
) {

return `

<div class="event-card">

    <p class="event-date">
        ${date}
    </p>

    <h3>
        ${title}
    </h3>

    <p class="event-location">
        📍 ${location}
    </p>

    <p class="event-description">
        ${description}
    </p>

</div>

`;

}