import './style.css';

import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Sponsor } from './components/sponsor';

document.querySelector('#app').innerHTML = `

${Navbar()}

${Sponsor()}

${Footer()}

`;