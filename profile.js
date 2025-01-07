class Profile {
    constructor() {
        this.name = "Yeji Park";
        this.email = "pyj201113@unist.ac.kr";
        this.linkedin = "https://www.linkedin.com/in/yeji00park";
        this.cv = "https://docs.google.com/document/d/1l8ACnqmVeRhkKDL8u9deGYdHPwSbz_Ah/edit?usp=sharing&ouid=111472790219546371691&rtpof=true&sd=true";
        this.tags = ["#Human_Computer_Interaction", "#Human_AI_Interaction", "#Ubiquitous_Computing", "#Wearable_Interactive_Computing"];
        this.profileImg = "image/profile.png";
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container with ID '${containerId}' not found.`);
            return;
        }

        const profileHTML = `
            <div class="Profile">
                <img src="${this.profileImg}" alt="${this.name}-profile" width="200" height="200">
                <h1>${this.name}</h1>
                <div class="contact">
                    <div class="box">
                        <img src="svg/mail.svg" alt="Icon">
                        <a href="mailto:${this.email}">${this.email}</a>
                    </div>
                    <div class="box">
                        <img src="svg/linkedin.svg" alt="Icon">
                        <a href="${this.linkedin}">LinkedIn</a>
                    </div>
                    <div class="box">
                        <img src="svg/cv.svg" alt="Icon">
                        <a href="${this.cv}">CV</a>
                    </div>
                </div>
                <div class="tags">
                    ${this.tags.map(tag => `<ul><h1>${tag}</h1></ul>`).join('')}
                </div>
            </div>
        `;

        container.innerHTML = profileHTML;
    }
}
