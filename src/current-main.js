
import './style.css';

import { Navbar } from './components/navbar';
import { Footer } from './components/footer';

document.querySelector('#app').innerHTML = `

${Navbar()}

<main class="current-page">
    <div class="container">
        <div class="current-image">
            <img src="/images/team-placeholder.jpg" alt="The Current" />
        </div>
    </div>
</main>

${Footer()}

`;
