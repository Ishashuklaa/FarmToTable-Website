document.addEventListener('DOMContentLoaded', function() {
    // Sample products data
    const productsData = [
      { name: 'Apple', price: '$2.99/lb', image: 'apple.jpeg' },
      { name: 'Tomatoes', price: '$1.99/lb', image: 'tomato.jpeg' },
      { name: 'Carrots', price: '$0.99/lb', image: 'carrot.jpeg' }
    ];
  
    const productList = document.getElementById('product-list');
  
    // Create product cards
    productsData.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');
  
      const image = document.createElement('img');
      image.src = `images/${product.image}`;
      image.alt = product.name;
      card.appendChild(image);
  
      const name = document.createElement('h3');
      name.textContent = product.name;
      card.appendChild(name);
  
      const price = document.createElement('p');
      price.textContent = `Price: ${product.price}`;
      card.appendChild(price);
  
      productList.appendChild(card);
    });
  });
  