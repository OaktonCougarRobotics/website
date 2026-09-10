export function Navbar() {
    return `
    <header class="navbar">
        <div class="container">

            <div class="logo">
                OAKTON ROBOTICS
            </div>

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
                <a href="/awards.html">Award History</a>
                <a href="/photos.html">Team Photos</a>
                <a href="/reach-out.html">Reach Out to Us</a>
                <a href="/what-is-robotics.html">What is Robotics?</a>
            </nav>

        </div>
    </header>
    `;
}