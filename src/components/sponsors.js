import { SponsorLogo } from "./sponsorLogo";

export function Sponsors() {

    const sponsors = [

        {
            name: "Lockheed Martin",
            image: "/images/lockheedMartin-removebg-preview.png",
            website: "https://www.lockheedmartin.com/"
        },

        {
            name: "Cascade Insurance",
            image: "/images/cascadeInsurance.PNG",
            website: "https://www.cascadeig.com/"
        },

        {
            name: "NearStar Fusion",
            image: "/images/nearStar-removebg-preview.png",
            website: "https://nearstarfusion.com/"
        },

        {
            name: "Alarm.com",
            image: "/images/alarm.webp",
            website: "https://alarm.com/"
        },

        {
            name: "Optimist Club of Vienna",
            image: "/images/optimist-removebg-preview.png",
            website: "https://www.optimistclubofgreatervienna.org/"
        },

        {
            name: "Salesforce",
            image: "/images/Salesforce.com_logo.svg.webp",
            website: "https://www.salesforce.com/"
        },

        {
            name: "Capital One",
            image: "/images/Capital_One_logo.svg.webp",
            website: "https://www.capitalone.com/"
        },

        {
            name: "Berkshire Hathaway",
            image: "/images/berkshire.png",
            website: "https://www.berkshirehathaway.com/"
        },

        {
            name: "Metric5",
            image: "/images/metric5Logo-removebg-preview.png",
            website: "https://metric5.com/"
        },

        {
            name: "Cooley LLP",
            image: "/images/Cooley.webp",
            website: "https://www.cooley.com/"
        },

        {
            name: "Ploutis Contracting",
            image: "/images/ploutis.png",
            website: "https://ploutiscontracting.com/"
        },

        {
            name: "Gate Logic",
            image: "/images/gateLogic-removebg-preview.png",
            website: "https://gatelogicsecurity.com/"
        },

        {
            name: "Kolas Construction",
            image: "/images/kolas-removebg-preview.png",
            website: "https://www.kolasinc.com/"
        },

        {
            name: "Fabworks",
            image: "/images/fabworks.jpg",
            website: "https://www.fabworks.com/"
        }

    ];

    return `

<section id="sponsors" class="sponsors">

    <div class="container">

        <p class="section-tag">
            OUR SPONSORS
        </p>

        <h2>Proudly Supported By</h2>

        <p class="sponsors-intro">
            Oakton Cougar Robotics is grateful for the organizations
            whose support helps students innovate, compete, and inspire
            the next generation of engineers.
        </p>

        <div class="sponsor-grid">

            ${sponsors.map((sponsor, index) => `

                <div class="sponsor" data-delay="${index * 100}">

                    ${SponsorLogo(
                        sponsor.image,
                        sponsor.name,
                        sponsor.website
                    )}

                </div>

            `).join("")}

        </div>

    </div>

</section>

`;

}