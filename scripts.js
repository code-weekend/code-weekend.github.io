const addCardProject = ({title, desc, link, img}) => {
    const container = $('#projects .row')

    // Create Element
    const elementString = `
    <div class="col s4">
        <div class="card">
            <div class="card-image">
                <img src="${img}">
                <span class="card-title">${title}</span>
                <a target="_blank" href="${link}" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
            </div>

            <div class="card-content">
                <p>${desc}</p>
            </div>
        </div>
    </div>
    `
    const element = $(elementString)
    container.append(element)
}

fetch('https://api.github.com/users/code-weekend/repos')
    .then(console.log)

// JSON data
const projects = [{
    title: 'It follows',
    desc: 'A simple game made without external dependencies, just using JS and Canvas.',
    link: 'https://github.com/codeweekend/it-follows/',
    img: 'https://materializecss.com/images/sample-1.jpg'
},]

$(document).ready(() => {
    // TODO: Create cards
    projects.map(addCardProject)
})