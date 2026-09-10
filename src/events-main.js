import './style.css';

import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Events } from './components/events';

document.querySelector('#app').innerHTML = `

${Navbar()}

${Events()}

${Footer()}

`;