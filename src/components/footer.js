export function Footer() {

    const year = new Date().getFullYear();

    return `

<footer class="footer">

    <div class="container">

        <div class="footer-logo">
            Oakton Cougar Robotics
        </div>

        <p class="footer-tagline">
            Designing • Building • Competing • Inspiring
        </p>

        <div class="footer-links">

            <a href="#about">About</a>
            <a href="#teams">Teams</a>
            <a href="#robot">Robot</a>
            <a href="#events">Events</a>
            <a href="#sponsors">Sponsors</a>

        </div>

        <div class="footer-divider"></div>

        <p class="footer-copy">
            © ${year} Oakton Cougar Robotics • FIRST Robotics Competition • Vienna, Virginia
        </p>

    </div>

</footer>

`;

}