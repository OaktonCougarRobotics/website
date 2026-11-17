
export function Navbar() {
    return `
    <header class="navbar">
        <div class="container">

            <div class="logo">
                OAKTON ROBOTICS
            </div>

            <button class="mobile-menu-toggle" aria-label="Toggle navigation" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav>

                <a href="/">Home</a>

                <div class="nav-dropdown">
                    <a href="/teams.html" class="dropdown-toggle">
                        Teams
                        <span class="chevron">⌄</span>
                    </a>
                    <div class="dropdown-menu">
                        <a href="/frc-623.html">FRC 623</a>
                        <a href="/ftc-226.html">FTC 226</a>
                        <a href="/ftc-369.html">FTC 369</a>
                        <a href="/business.html">Business</a>
                        <a href="/rnd.html">R&amp;D</a>
                    </div>
                </div>

                <a href="/robot.html">Robot</a>
                <a href="/events.html">Events</a>
                <a href="/outreach.html">Outreach</a>
                <a href="/sponsors.html">Sponsors</a>
                <a href="/current.html">The Current</a>
                <a href="/awards.html">Award History</a>
                <a href="/photos.html">Team Photos</a>
                <a href="/reach-out.html">Reach Out to Us</a>
                <a href="/what-is-robotics.html">What is Robotics?</a>

                <div class="donate-button">
                    <givebutter-widget id="jDray6"></givebutter-widget>
                </div>

            </nav>

        </div>
    </header>
    `;
}

document.addEventListener('click', (event) => {
    const toggle = event.target.closest('.mobile-menu-toggle');

    if (toggle) {
        const nav = toggle.parentElement.querySelector('nav');
        const isOpen = nav.classList.toggle('nav-open');

        toggle.setAttribute('aria-expanded', String(isOpen));
    }
});