export function SocialCard(name, username, link) {

return `

<a
    href="${link}"
    target="_blank"
    rel="noopener noreferrer"
    class="social-card"
>

    <h3>

        ${name}

    </h3>

    <p>

        ${username}

    </p>

</a>

`;

}