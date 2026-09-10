import './style.css';

import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { WhatIsRobotics } from './components/whatIsRobotics';

document.querySelector('#app').innerHTML = `

${Navbar()}

${WhatIsRobotics()}

${Footer()}

`;