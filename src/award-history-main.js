import './style.css';

import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { AwardHistory } from './components/awardHistory';


document.querySelector('#app').innerHTML = `

${Navbar()}

${AwardHistory()}

${Footer()}

`;