class ContentSection {
    constructor(title, content, isList = false, isNews = false) {
        this.title = title;
        this.content = content;
        this.isList = isList;
        this.isNews = isNews
    }

    render() {
        const section = document.createElement('section');

        // Title
        const titleDiv = document.createElement('div');
        titleDiv.className = 'title';
        titleDiv.textContent = this.title;
        section.appendChild(titleDiv);

        // Content
        if (this.isList) {
            if (!this.isNews){
                this.content.forEach(item => {
                    const listItem = document.createElement('div');
                    listItem.className = 'list';
    
                    const numberDiv = document.createElement('div');
                    numberDiv.className = 'list_number';
                    numberDiv.textContent = `${item.number}`;
                    listItem.appendChild(numberDiv);
    
                    const listContent = document.createElement('li');
                    listContent.innerHTML = `
                        <h1>${item.title}</h1>
                        <h2>${item.subtitle}</h2>
                        ${item.link ? `<a href="${item.link}">${item.linkText}</a>` : ''}
                    `;
                    listItem.appendChild(listContent);
    
                    section.appendChild(listItem);
                });
            }
            else {
                this.content.forEach(item => {
                    const listItem = document.createElement('div');
                    listItem.className = 'list';
    
                    const numberDiv = document.createElement('div');
                    numberDiv.className = 'list_number';
                    numberDiv.textContent = `${item.number}`;
                    listItem.appendChild(numberDiv);
    
                    const listContent = document.createElement('li');
                    listContent.innerHTML = `
                        <h3>${item.title}</h3>
                    `;
                    listItem.appendChild(listContent);
    
                    section.appendChild(listItem);
                });
            }
            
        } else {
            const contentDiv = document.createElement('div');
            contentDiv.className = 'intro';
            contentDiv.innerHTML = this.content;
            section.appendChild(contentDiv);
        }

        return section;
    }
}

class WorkItem {
    constructor(id, title, subtitle, imageUrl, link = '') {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.imageUrl = imageUrl;
        this.link = link;  // New link property
    }

    render() {
        const unitDiv = document.createElement('div');
        unitDiv.className = 'unit';
        unitDiv.id = this.id;
        unitDiv.style.setProperty('--background-image-url', `url('${this.imageUrl}')`);

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h1>${this.title}</h1>
            <h2>${this.subtitle}</h2>
        `;
        unitDiv.appendChild(listItem);

        // If a link is provided, create a clickable behavior
        if (this.link) {
            unitDiv.classList.add('clickable');
            unitDiv.addEventListener('click', () => {
                window.location.href = this.link;  // Navigate to the specific HTML page
            });
        }

        return unitDiv;
    }
}


class WorksSection {
    constructor(title, workItems) {
        this.title = title;
        this.workItems = workItems;
    }

    render() {
        const section = document.createElement('section');

        // Title
        const titleDiv = document.createElement('div');
        titleDiv.className = 'title';
        titleDiv.textContent = this.title;
        section.appendChild(titleDiv);

        // Work items container
        const containerDiv = document.createElement('div');
        containerDiv.className = 'U_container';

        this.workItems.forEach(workItem => {
            containerDiv.appendChild(workItem.render());
        });

        section.appendChild(containerDiv);

        return section;
    }
}

// Create content
const introSection = new ContentSection('', `
    <h1><span class="color">Hello!</span> this is Yeji Park</h1>
    <h2>
    I am deeply passionate about pioneering next-generation <span class="highlight">Wearable and Interactive AI</span>, where intelligent systems seamlessly adapt to users in real-time. My research broadly focuses on human-centered AI, with an emphasis on integrating wearable technology and AI from both technical and theoretical perspectives.
    I am a Master-Ph.D. integrated student at <a href="https://unist-kor.unist.ac.kr/" target="_blank">UNIST</a> <a href="https://aigs.unist.ac.kr/web/index.php" target="_blank">AIGS</a>, conducting research in the <a href="https://sites.google.com/view/uailab" target="_blank">Ubiquitous AI Lab</a> under the supervision of professor <a href="https://taesikgong.com/" target="_blank">Taesik Gong</a>.  
    Before starting my graduate studies, I pursued a dual major in Electrical Engineering and Design during my bachelor's degree at UNIST.   
    If you are interested in my experience, please check out my CV and works on this website. Enjoy your time!
    </h2>
`);

const newsSection = new ContentSection('News',
[
    {number: '🌱', title: 'My first! first authored paper GazeHandSync was accepted ETRA\'25 Short Papers! <span class="date">(2025.03)</span>'},
    {number: '✨', title: 'I started Master-Ph.D. integrated program at UNIST, Ulsan with Prof. Taesik Gong <span class="date">(2025.03)</span>'},
]    
, true, true);

const worksSection = new WorksSection('Works', [
    new WorkItem('button-6', 'Research', 'GazeHandSync: Mitigating Late-Trigger Errors for Seamless Gaze-Hand Interactions', 'image/gazehandsync.png', '6.html'),
    new WorkItem('button-1', 'Research', 'The Impact of Gaze and Hand Gesture Complexity on Gaze-Pinch Interaction Performances', 'image/ubicomopworkshop.png', '1.html'),
    new WorkItem('button-2', 'Graduation Research', 'O-K Text: Hangul Input System in Head Mounted Display Utilizing Gaze and Hand Gestures', 'image/oktext.png', '2.html'),
    new WorkItem('button-3', 'Research', 'Wishes: An Emerging Media Art For Improving Reliance in a Post-Pandemic Era', 'image/wishes.png', '3.html'),
    new WorkItem('button-4', 'Design Project', 'BBB: Revolutionising Cross-Language Communication Services in a Multilingual World', 'image/bbbk_reddot.png', '4.html'),
    new WorkItem('button-5', 'Industrial Collaboration - bbb Korea', 'bbb Korea Interpreting Request and Volunteer App Design', 'image/bbbk.png', '5.html')
]);

const publicationsSection = new ContentSection('Publications', [
    { number: '2.', title: 'GazeHandSync: Mitigating Late-Trigger Errors for Seamless Gaze-Hand Interactions', subtitle: '<span class="worksHL">Yeji Park</span>, Jiwan Kim, and Ian Oakley. Accepted to ETRA 2025 Short Papers: ACM Symposium on Eye Tracking Research and Applications <span class="ac">(Acceptance Rate: 33.3%)</span>', link: 'https://doi.org/10.1145/3715669.3723126', linkText: '[acm dl]'},
    { number: '1.', title: 'The Impact of Gaze and Hand Gesture Complexity on Gaze-Pinch Interaction Performances', subtitle: '<span class="worksHL">Yeji Park</span>, Jiwan Kim, and Ian Oakley. UbiComp\'24: Companion of the 2024 on ACM International Joint Conference on Pervasive and Ubiquitous Computing', link: 'https://dl.acm.org/doi/10.1145/3675094.3678990', linkText: '[acm dl]' },
    // { number: 1, title: 'Wishes: An Emerging Media Art For Improving Reliance in a Post-Pandemic Era', subtitle: '<span class="worksHL">Yeji Park</span>, and Kyungho Lee. <span class="kor">2022 한국디자인학회 가을 국제학술대회 논문집 - 대학생학술대회 구두발표 : 전시 경험</span>', link: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11186842', linkText: '[Paper]' }
], true);

const awardsSection = new ContentSection('Awards', [
    { number: '1.', title: 'BBB: Revolutionising Cross-Language Communication Services in a Multilingual World', subtitle: 'Sangyun Lee, Seoyeong Hwang, Juhyeok Yoon, <span class="worksHL">Yeji Park</span>, and Kyungho Lee. reddot winner 2023, Brand & Communication Design', link:'https://www.red-dot.org/project/bbb-revolutionising-cross-language-communication-services-in-a-multilingual-world-66656', linkText: '[Reddot Awards]' }
], true);

document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector('main');
    const pageType = main.dataset.page; // HTML의 data-page 값 읽기

    switch (pageType) {
        case "works":
            main.appendChild(worksSection.render());
            break;
        case "publications":
            main.appendChild(publicationsSection.render());
            break;
        case "awards":
            main.appendChild(awardsSection.render());
            break;
        default: // 홈 또는 기본 페이지
            main.appendChild(introSection.render());
            main.appendChild(newsSection.render());
            main.appendChild(worksSection.render());
            main.appendChild(publicationsSection.render());
            main.appendChild(awardsSection.render());
    }
});

// Render content
// const main = document.querySelector('main');
// main.appendChild(introSection.render());
// main.appendChild(worksSection.render());
// main.appendChild(publicationsSection.render());
// main.appendChild(awardsSection.render());

