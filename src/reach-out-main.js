import './style.css';

import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { ReachOut } from './components/reachOut';

document.querySelector('#app').innerHTML = `

${Navbar()}

${ReachOut()}

${Footer()}

`;