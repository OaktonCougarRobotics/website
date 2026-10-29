export function ProgramCard(icon, title, items) {
    return `
<div class="program-card">

    <div class="program-icon">${icon}</div>

    <h3>${title}</h3>

    <ul>
        ${items.map(item => `
            <li>${item}</li>
        `).join("")}
    </ul>

</div>
`;
}