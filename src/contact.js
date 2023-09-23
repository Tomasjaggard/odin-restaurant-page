const loadGoogleMapsApi = require('load-google-maps-api');
const apiKey = process.env.MAP_KEY

class Map {
  
    static loadGoogleMapsApi() {
      return loadGoogleMapsApi({ key: process.env.MAP_KEY });
    }
    static createMap(googleMaps, mapElement) {
        const map = new googleMaps.Map(mapElement, {
            center: {lat: 51.5322391, lng: -0.0882776},
            zoom: 15
        });

        const marker = new google.maps.Marker({
            position: {lat: 51.5322391, lng: -0.0882776},
            map: map,
            title: 'Pizza Italiana'
        })
        return map
    }
}

const contactPage = () => {
    const contact = document.createElement('div');
    contact.classList.add('main-card');
    const h1 = document.createElement('h1');
    h1.textContent = 'Contact';

    contact.appendChild(h1);

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    const details = document.createElement('div');
    details.classList.add('contact-details');

    //Location line
    const locationLine = document.createElement('div');
    locationLine.classList.add('line-text')
    const locationIcon = document.createElement('i');
    locationIcon.classList.add('fa-solid', 'fa-location-dot');
    locationIcon.style.color = '#637492';
    const locationText = document.createElement('p')
    locationText.textContent = '59 Nile St, London N1 7RD'
    locationLine.appendChild(locationIcon)
    locationLine.appendChild(locationText)
    details.appendChild(locationLine)

    //Phone
    const phoneLine = document.createElement('div');
    phoneLine.classList.add('line-text')
    const phoneIcon = document.createElement('i');
    phoneIcon.classList.add('fa-solid', 'fa-phone');
    phoneIcon.style.color = '#637492';
    const phoneText = document.createElement('p')
    phoneText.textContent = '+44 1234567890'
    phoneLine.appendChild(phoneIcon)
    phoneLine.appendChild(phoneText)
    details.appendChild(phoneLine)

    //Contact form
    const contactForm = document.createElement('form')
    contactForm.id = "contactForm"
    const nameLabel = document.createElement('label')
    nameLabel.textContent = "Name: "
    contactForm.appendChild(nameLabel)

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";
    contactForm.appendChild(nameInput)

    const textLabel = document.createElement('label')
    textLabel.textContent = "Message: "
    contactForm.appendChild(textLabel)

    const textInput = document.createElement('textarea')
    textInput.id = "message"
    textInput.name = "message"
    contactForm.appendChild(textInput)

    details.appendChild(contactForm)

    contactContainer.appendChild(details)

    //Map
    const mapLocation = document.createElement('div')
    mapLocation.classList.add('contact-map')
    mapLocation.setAttribute("id", "map");
    Map.loadGoogleMapsApi().then(function(googleMaps){
        Map.createMap(googleMaps,mapLocation)
    })
    contactContainer.appendChild(mapLocation)

    contact.appendChild(h1)
    contact.appendChild(contactContainer)
    return contact
}

const loadContact = () =>{
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(contactPage())
}

export default loadContact