export function Gallery(year, photos) {

return `

<div class="gallery-content">

    <h2>
        ${year}
    </h2>


    <div class="photo-grid">


        ${photos.map(photo => `

            <div class="photo-card">

                <img 
                src="${photo}"
                alt="${year} team photo">

            </div>

        `).join("")}


    </div>


</div>

`;

}