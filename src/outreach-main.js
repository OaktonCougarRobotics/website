import './style.css';

import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Outreach } from './components/outreach';


document.querySelector('#app').innerHTML = `

${Navbar()}

${Outreach()}

${Footer()}

`;