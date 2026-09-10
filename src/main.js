import './style.css';

import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { Stats } from './components/stats';
import { Why } from './components/why';
import { Journey } from "./components/journey";
import { Programs } from "./components/programs";
import { Sponsors } from "./components/sponsors";
import { Footer } from "./components/footer";

document.querySelector('#app').innerHTML = `
${Navbar()}
${Hero()}
${Stats()}
${Why()}
${Journey()}
${Sponsors()}
${Footer()}
`;

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        entry.target.querySelectorAll("[data-target]").forEach(counter => {

            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = Math.max(1, Math.ceil(target / 80));

            const timer = setInterval(() => {

                current += increment;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                counter.textContent =
                    target >= 100
                    ? current.toLocaleString() + "+"
                    : current + "+";

            }, 20);

        });

        observer.unobserve(entry.target);

    });

});

observer.observe(document.querySelector(".stats"));

const hero = document.querySelector("#hero");

if (hero) {
    window.addEventListener("mousemove", e => {

        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        hero.style.setProperty("--mouse-x", (x * 100) + "%");
        hero.style.setProperty("--mouse-y", (y * 100) + "%");

    });
}

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const delay = Number(entry.target.dataset.delay || 0);

        setTimeout(() => {
            entry.target.classList.add("visible");
        }, delay);

        revealObserver.unobserve(entry.target);

    });

}, {
    threshold: 0.2
});

document
    .querySelectorAll(".card,.stat,.journey-image,.journey-content,.sponsor")
    .forEach(el => revealObserver.observe(el));