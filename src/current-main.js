
import './style.css';

import { Navbar } from './components/navbar';
import { Footer } from './components/footer';

document.querySelector('#app').innerHTML = `

${Navbar()}

<main class="current-page">
    <div class="container">
        <div class="current-image">
            <img src="/images/currentImage1.webp" alt="The Current" />
        </div>
    </div>
</main>

${Footer()}

`;
