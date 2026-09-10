export function SponsorLogo(image, alt, website) {

return `

<a
    href="${website}"
    target="_blank"
    rel="noopener noreferrer"
    class="logo-placeholder"
>

    <img
        src="${image}"
        alt="${alt}"
        class="sponsor-logo"
    >

</a>

`;

}