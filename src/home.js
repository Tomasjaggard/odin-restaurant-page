const homePage = () => {
    const home = document.createElement('div')
    home.classList.add('home')
    const h1 = document.createElement('h1')
    h1.textContent = 'Pizza Italiana'

    const p = document.createElement('p')
    p.textContent = 'Indulge your senses in the rich and authentic flavors of Italy with our exquisite selection of Italian cuisine.'

    const img = document.createElement('img')
    img.src = '../pizza.jpg';
    img.alt = 'Pizza';
    img.width = '250';
    img.height = '150';

    home.classList.add('main-page');
    home.appendChild(h1)
    home.appendChild(p)
    home.appendChild(img)
    return home
}

const loadHome = () =>{
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(homePage())
}

export default loadHome