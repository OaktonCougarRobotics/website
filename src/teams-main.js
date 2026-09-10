import './style.css';

import { Navbar } from './components/navbar';
import { Teams } from './components/teams';
import { Footer } from './components/footer';


document.querySelector('#app').innerHTML = `

${Navbar()}

${Teams()}

${Footer()}

`;