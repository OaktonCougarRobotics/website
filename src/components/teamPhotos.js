import { Gallery } from "./gallery";


export function TeamPhotos() {

return `


<section class="photos-hero">


    <div class="photos-hero-background"></div>


    <div class="photos-hero-content fade-up">


        <p class="eyebrow">
            OAKTON COUGAR ROBOTICS
        </p>


        <h1>
            Team <span>Photos</span>
        </h1>


        <p class="description">

            Explore memories from seasons,
            competitions, and moments
            throughout Cougar Robotics.

        </p>


    </div>


</section>




<section class="photos">


<div class="container">


<h2>
    Our Journey Through the Years
</h2>



<div class="year-tabs">


<button class="year-tab active" data-year="2026">
    2026
</button>


<button class="year-tab" data-year="2025">
    2025
</button>


<button class="year-tab" data-year="2024">
    2024
</button>



</div>





<div class="gallery-container">


<div class="gallery-year active" id="gallery-2026">

${Gallery(

"2026",

[
"/images/teamsMainPhoto.PNG",
"/images/FTC369GroupPhoto1.jpg",
"/images/R&DGroupPhoto.jpg",
"/images/2026pic1.jpg",
"/images/2026pic2.jpg",
"/images/2026pic3.jpg",
"/images/20261.jpg",
"/images/20262.jpg",
"/images/20263.jpg",
"/images/20264.jpg",
"/images/20265.jpg",
]

)}

</div>




<div class="gallery-year" id="gallery-2025">

${Gallery(

"2025",

[
"/images/2025pic1.png",
"/images/team.jpg",
"/images/photo-placeholder.jpg"

]

)}

</div>




<div class="gallery-year" id="gallery-2024">

${Gallery(

"2024",

[
"/images/2024pic1.jpg",
"/images/2024pic2.jpg",
"/images/photo-placeholder.jpg"

]

)}

</div>


</div>



</div>


</section>


`;

}