import './style.css';

import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { TeamPhotos } from './components/teamPhotos';



document.querySelector('#app').innerHTML = `


${Navbar()}

${TeamPhotos()}

${Footer()}


`;

const tabs = document.querySelectorAll(".year-tab");

const galleries = document.querySelectorAll(".gallery-year");


tabs.forEach(tab => {

    tab.addEventListener("click", () => {


        const year = tab.dataset.year;


        tabs.forEach(button => {

            button.classList.remove("active");

        });


        galleries.forEach(gallery => {

            gallery.classList.remove("active");

        });



        tab.classList.add("active");


        document
        .querySelector(`#gallery-${year}`)
        .classList.add("active");


    });

});