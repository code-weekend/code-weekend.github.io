const addCardProject = ({title, desc, link, img}) => {
    const container = $('#projects .row')

    if (title === 'code-weekend.github.io') return

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

const url = 'https://api.github.com/users/code-weekend/repos'
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
