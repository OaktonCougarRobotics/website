export function AwardSection(title, awards) {

return `

<div class="award-section">

    <h3>
        ${title}
    </h3>

    <div class="award-list">

        ${awards.map(award => `

            <div class="award-item">

                <span class="award-icon">
                    🏆
                </span>

                <span>
                    ${award}
                </span>

            </div>

        `).join("")}

    </div>

</div>

`;

}