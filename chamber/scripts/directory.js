const url = 'https://mhan-ctrl.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#cards');
async function getBusinessData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        displayBusiness(data.business);
    } catch (error) {
        console.error(error);
    }
}

getBusinessData();

const displayBusiness = (businesses) => {
    businesses.forEach(business => {
        const card = document.createElement('section');
        const name = document.createElement('h2');
        const contact = document.createElement('span');
        const logo = document.createElement('img');
        name.textContent = `${business.name}`;
        contact.textContent = `Address: ${business.address}
        Phone: ${business.phone}
        Website: ${business.website}`;
        portrait.setAttribute('src', business.image);
        portrait.setAttribute('alt', `Logo of ${business.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '250');
        portrait.setAttribute('height', '250');
        card.appendChild(name);
        card.appendChild(contact);
        card.appendChild(logo);
        cards.appendChild(card);
    });
}