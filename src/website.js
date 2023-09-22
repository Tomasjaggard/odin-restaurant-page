import homePage from "./home"
import menuPage from "./menu"
import contactPage from "./contact"

const createHeader = () =>{
    const header = document.createElement('header')
    header.appendChild(createNav())
    
    return header
}

const createNav = () =>{
    
    const navBar = document.createElement('nav')
    const navUl = document.createElement('ul')

    const buttonLabels = ["Home", "Menu", "Contact"]
    const buttonFunctions = [homePage, menuPage, contactPage]
    buttonLabels.forEach((label, index) => {
        const li = document.createElement('li');
        const button = document.createElement('button')
        button.classList.add('nav-button')
        button.textContent = label
        //new
        button.addEventListener("click",(e)=>{
            if (e.target.classList.contains('active')) return;
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
    main.appendChild(homePage())

    return main //switch variable name to main upon completion
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