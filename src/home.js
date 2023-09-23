const homePage = () => {
    const home = document.createElement('div')
    home.classList.add('main-card')
    const h1 = document.createElement('h1')
    h1.textContent = 'Pizza Italiana'

    const p = document.createElement('p')
    p.classList.add('tagline')
    p.textContent = 'Indulge your senses in the rich and authentic flavors of Italy with our exquisite selection of Italian cuisine.'

    const img = document.createElement('img')
    img.src = '../pizza.jpg';
    img.alt = 'Pizza';
    img.width = '250';
    img.height = '150';

    home.appendChild(h1)
    home.appendChild(p)
    home.appendChild(img)
    return home
}

const openingHours = () =>{
    const openingHoursContent = document.createElement('div')
    openingHoursContent.classList.add('main-card')
    const hourTitle = document.createElement('h2')
    hourTitle.textContent = 'Opening Hours'
    openingHoursContent.appendChild(hourTitle)
    const openTimes = [
        {day: 'Sunday', start: '8:00', end: '20:00'},
        {day: 'Monday', start: '8:00', end: '19:00'},
        {day: 'Tuesday', start: '8:00', end: '19:00'},
        {day: 'Wednesday', start: '8:00', end: '19:00'},
        {day: 'Thursday', start: '8:00', end: '19:00'},
        {day: 'Friday', start: '8:00', end: '22:00'},
        {day: 'Saturday', start: '8:00', end: '22:00'},
    ]
    openTimes.forEach(time => {
        const openingTime = document.createElement('p')
        openingTime.textContent = `${time.day}: ${time.start} - ${time.end}`
        openingHoursContent.appendChild(openingTime)
    });
    return openingHoursContent
}

const loadHome = () =>{
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(homePage())
    main.appendChild(openingHours())
}

export default loadHome