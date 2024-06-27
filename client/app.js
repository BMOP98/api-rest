const apiUrl = 'http://localhost:5000/clients';

// Show the form to add a new client
function showForm() {
    const form = document.getElementById('add-item-form');
    form.style.display = 'block';
}



// Get and show clients
async function fetchItems() {
    const response = await fetch(apiUrl);
    const items = await response.json();
    const itemsList = document.getElementById('items-list');
    itemsList.innerHTML = '';
    items.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item._id}</td>
            <td>${item.Nombre}</td>
            <td>${item.Apellido}</td>
            <td>${item.mail}</td>
        `;
        itemsList.appendChild(row);
    });
}

// Add a new client
async function addItem(event) {
    event.preventDefault(); 
    const itemName = document.getElementById('item-name').value;
    const itemLastname = document.getElementById('item-lastname').value;
    const itemEmail = document.getElementById('item-email').value;

    const newItem = {
        Nombre: itemName,
        Apellido: itemLastname,
        mail: itemEmail
    };

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
    });

    if (response.ok) {
        // Limpiar el formulario
        document.getElementById('item-name').value = '';
        document.getElementById('item-lastname').value = '';
        document.getElementById('item-email').value = '';
        document.getElementById('add-item-form').style.display = 'none';
        fetchItems();
    }
}

document.addEventListener('DOMContentLoaded', fetchItems);
