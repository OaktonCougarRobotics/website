import './style.css';

import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Robot } from './components/robot';


document.querySelector('#app').innerHTML = `


${Navbar()}

${Robot()}

${Footer()}


`;