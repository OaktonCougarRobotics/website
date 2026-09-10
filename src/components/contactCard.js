export function ContactCard(title, email) {

return `

<div class="contact-card">

    <h3>
        ${title}
    </h3>

    <p class="contact-email">

        ${email}

    </p>

    <a
        href="mailto:${email}"
        class="btn btn-primary">

        Email ${title}

    </a>

</div>

`;

}