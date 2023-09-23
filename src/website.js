import loadHome from "./home"
import loadMenu from "./menu"
import loadContact from "./contact"

const createHeader = () =>{
    const header = document.createElement('header')
    header.appendChild(createNav())
    
    return header
}

const createNav = () =>{
    const navBar = document.createElement('nav')

    const logo = document.createElement('p')
    logo.classList.add('logo')
    logo.textContent = 'Pizza Italiana'
    navBar.appendChild(logo)

    const navUl = document.createElement('ul')

    const buttonLabels = ["Home", "Menu", "Contact"]
    const buttonFunctions = [loadHome, loadMenu, loadContact]
    buttonLabels.forEach((label, index) => {
        const li = document.createElement('li');
        const button = document.createElement('button')
        button.classList.add('nav-button')
        button.textContent = label
        if(index == 0) button.classList.add('active')
        button.addEventListener("click",(e)=>{
            if (button.classList.contains('active')) return;
            console.log('broken')
            setActiveButton(button);
            buttonFunctions[index]();
        })

        li.appendChild(button)
        navUl.appendChild(li)
    });
    
    navBar.appendChild(navUl)
    
    return navBar
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".nav-button");

  buttons.forEach((btn) => {
    if (btn != button) {
      btn.classList.remove("active");
    }
  });

  button.classList.add("active");
}

const createMain = () => {
    const main = document.createElement('div')
    main.classList.add('main')
    main.setAttribute("id", "main");
    return main
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

    loadHome();
}

export default createPage