const createHeader = () =>{
    const header = document.createElement('header')
    header.appendChild(createNav())
    
    return header
}

const createNav = () =>{
    
    const navBar = document.createElement('nav')
    const navUl = document.createElement('ul')

    const buttonLabels = ["Home", "Menu", "Contact"]
    buttonLabels.forEach(label => {
        const li = document.createElement('li');
        const button = document.createElement('button')
        button.textContent = label
        li.appendChild(button)
        navUl.appendChild(li)
    });
    
    navBar.appendChild(navUl)
    
    return navBar
}

const createMain = () => {
    const title = document.createElement('div')

    const h1 = document.createElement('h1')
    h1.textContent = 'Pizza Italiana'

    const p = document.createElement('p')
    p.textContent = 'Indulge your senses in the rich and authentic flavors of Italy with our exquisite selection of Italian cuisine.'

    const img = document.createElement('img')
    img.src = '../pizza.jpg';
    img.alt = 'Pizza';
    img.width = '250';
    img.height = '150';

    title.classList.add('main-page');
    title.appendChild(h1)
    title.appendChild(p)
    title.appendChild(img)

    return title //switch variable name to main upon completion
}

const createFooter = () => {
    const footer = document.createElement('footer')
    
    const copyright = document.createElement('div')
    copyright.textContent = `Copyright © ${new Date().getFullYear()} Tomas Jaggard`

    footer.appendChild(copyright)

    return footer
}

const createPage = () =>{
    const content = document.getElementById('content')
    content.appendChild(createHeader())
    content.appendChild(createMain())
    content.appendChild(createFooter())

    return content
}

export default createPage