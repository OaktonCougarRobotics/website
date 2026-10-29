import { EventCard } from "./eventCard";

export function Events() {

return `

<section class="events-hero">

    <div class="events-hero-background"></div>

    <div class="events-hero-content fade-up">

        <p class="eyebrow">
            OAKTON COUGAR ROBOTICS
        </p>

        <h1>
            <span>Events</span>
        </h1>

        <p class="description">

            Discover where Cougar Robotics
            competes and volunteers!

        </p>

    </div>

</section>



<section class="calendar">

<div class="container">

<h2>
    Cougar Robotics Calendar
</h2>

<div class="calendar-container">

    <!-- Google Calendar goes here -->

    <iframe
        class="calendar-frame"
        src="https://calendar.google.com/calendar/embed?src=fd2ecba73c19ce8f10386c34237c827fd83e30c0d543784cd2457ce5f70e26cd%40group.calendar.google.com&ctz=America%2FNew_York"
        frameborder="0"
        scrolling="no">
    </iframe>

</div>

</div>

</section>



<section class="upcoming-events">

<div class="container">

<h2>
    Upcoming Events
</h2>

<div class="event-grid">

${EventCard(
"Date",
"Event Name",
"Location",
"Description"
)}

${EventCard(
"Date",
"Event Name",
"Location",
"Description"
)}

${EventCard(
"Date",
"Event Name",
"Location",
"Description"
)}

</div>

</div>

</section>



<section class="competition-schedule">

<div class="container">

<h2>
    Competition Schedule
</h2>

<p>

Competition schedule coming soon.

</p>

</div>

</section>



<section class="outreach">

<div class="container">

<h2>
    Community Outreach
</h2>

<p>

Outreach events coming soon.

</p>

</div>

</section>



<section class="timeline">

<div class="container">

<h2>
    Robotics Season Timeline
</h2>

<p>

Timeline coming soon.

</p>

</div>

</section>

`;

}