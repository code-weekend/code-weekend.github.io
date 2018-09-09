const addCardProject = ({title, desc, link, img}) => {
    const container = $('#projects .row')
    const demo_link = `https://code-weekend.github.io/${title}/`

    if (title === 'code-weekend.github.io') return

    // Create Element
    const elementString = `
    <div class="col l4 m6 s12">
        <div class="card">
            <div class="card-image">
                <img src="${img}">
                <a target="_blank" href="${demo_link}">
                    <div style="position: absolute; background: rgba(110,110,110,0.2); width: 100%; height: 100%; top: 0"></div>
                </a>
                <span class="card-title">${title}</span>
                <a target="_blank" href="${link}" class="btn-floating btn-small halfway-fab waves-effect waves-light white" style="padding: 0px">
                    <img src="./images/mark-github.svg" alt="github"/>
                </a>
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

const url = 'https://api.github.com/users/code-weekend/repos?access_token=0f763c68295632e9a4b3a0c52c3721bb62a0e48f'
let projects
const getProjects = () => $.ajax({
    method: 'GET',
    url,
    dataType: 'jsonp', //change the datatype to 'jsonp' works in most cases
    success: (res) => {
        projects = res.data.map(proj => ({
            title: proj.name,
            desc: proj.description,
            link: proj.html_url,
            img: `${proj.html_url}/raw/master/presentation.gif`,
        }));
        projects.map(addCardProject)
    }
})

getProjects()
