const beveragesContainer = document.createElement('div');
const foodContainer = document.createElement('div');

class menuItem{
    constructor(type,name,subtext,price,url){
        this.type = type
        this.name = name
        this.subtext = subtext
        this.price = price
        this.url = url
    }
    addToMenu(){
        const card = document.createElement('div')
        card.classList.add('card')

        const title = document.createElement('p')
        title.classList.add('title')
        title.textContent = this.name

        const subText = document.createElement('p')
        subText.classList.add('sub-text')
        subText.textContent = this.subtext

        const itemPrice = document.createElement('p')
        itemPrice.classList.add('price')
        itemPrice.textContent = `£${this.price}`

        const image = document.createElement('img')
        image.classList.add('menu-image')
        image.src = this.url
        
        card.appendChild(title)
        card.appendChild(subText)
        card.appendChild(itemPrice)
        card.appendChild(image)

        if(this.type === 'food'){
            foodContainer.appendChild(card)
        } else if (this.type === 'beverage'){
            beveragesContainer.appendChild(card)
        }
    }
}

const fillMenu = () => {
    //devtest purposes
    const placeholderImage = 'https://placehold.co/100';
    const menuItemsData = [
        {type:'food', name: 'Cheese Pizza', subtext: 'A simple Cheese pizza', price: '5.80', url: placeholderImage},
        {type:'food', name: 'Penne Pasta', subtext: 'A pasta classic', price: '4.95', url: placeholderImage},
        {type:'food', name: 'Garlic Bread', subtext: 'Toasted Garlic Bread', price: '2.50', url: placeholderImage},
        {type:'beverage', name: 'Lemonade', subtext: 'Refreshing lemonade', price: '1.80', url: placeholderImage},
        {type:'beverage', name: 'Cola', subtext: 'Original Cola', price: '2.00', url: placeholderImage}
    ]
    menuItemsData.forEach(item => {
        const menuItemObj = new menuItem(item.type, item.name, item.subtext, item.price, item.url)
        menuItemObj.addToMenu()
    });
}

const menuPage = () => {
    const menu = document.createElement('div');
    menu.classList.add('main-card');
    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';

    const beveragesTitle = document.createElement('h2');
    beveragesTitle.textContent = 'Beverages';

    const foodTitle = document.createElement('h2');
    foodTitle.textContent = 'Food';

    
    beveragesContainer.classList.add('card-container');
    foodContainer.classList.add('card-container');
    
    menu.appendChild(beveragesTitle);
    menu.appendChild(beveragesContainer);
    menu.appendChild(foodTitle);
    menu.appendChild(foodContainer);
    fillMenu();
    return menu
}

const loadMenu = () =>{
    const main = document.getElementById("main");
    main.textContent = "";
    beveragesContainer.innerHTML = "";
    foodContainer.innerHTML = "";
    main.appendChild(menuPage());
}

export default loadMenu