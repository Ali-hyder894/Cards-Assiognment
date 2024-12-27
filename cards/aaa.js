let products = [
    { id: 1, name: "Product 1", price: "$20", description: "Description for Product 1", image: "https://img.freepik.com/free-photo/grilled-beef-burger-with-fries-cheese-tomato-generative-ai_188544-8466.jpg?semt=ais_hybrid" },
    { id: 2, name: "Product 2", price: "$30", description: "Description for Product 2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ15_xbDhOQd6Ygh3KYIzFqN9IIS9nMk7FKnw&s" },
    { id: 3, name: "Product 3", price: "$40", description: "Description for Product 3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr6fAmr0caJxO4MGsEO6DsI7vBeNxiOWu_qVVwaLevtfjh54xjEj4BDqTu2DbxhnnWUD4&usqp=CAU"},
    { id: 4, name: "Product 4", price: "$50", description: "Description for Product 4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAi3vQfKXOYjPm3ztr_k-5Pmji-765LeoLGA&s" },
    { id: 5, name: "Product 5", price: "$60", description: "Description for Product 5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByhyzfBj-RmzYDX2wsroaMnd5hwmk0uo6VDzREHVt_Pl8IzB5gdO7ihkFooOG3AUnLYw&usqp=CAU" },
    { id: 6, name: "Product 6", price: "$70", description: "Description for Product 6", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWmY3tj17awof5B9mobGOTaZYBA429PCgWoJDAGDbs_AvVKjLvnpy74gEIx02xpbkag2A&usqp=CAU" },
    { id: 7, name: "Product 7", price: "$80", description: "Description for Product 7", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR89tz--1VwfGdbRS9Y6jysDFcz4XeFiElm6SPqDiuZhhOpNaObod4ijtxptzj4Ot5BmM&usqp=CAU" },
    { id: 8, name: "Product 8", price: "$90", description: "Description for Product 8", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFqIi3Bg9NWJvrW3gKgAY9F3WoRK487BnZL40T_r7UAMuIIWOEmzw0pFrRxJT0ldXrre4&usqp=CAU " },
    

];

function renderProducts() {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";
  
    if (products.length === 0) {
      productContainer.innerHTML = "<h1>All products have been deleted.</h1>";
      return;
    }
  
    products.map((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
  
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width: 150px; height: 150px; object-fit: cover;">
        <h2>${product.name}</h2>
        <p><strong>Price:</strong> ${product.price}</p>
        <p>${product.description}</p>
        <button onclick="deleteProduct(${product.id})">Delete</button>
      `;
  
      productContainer.appendChild(productCard);
    });
  }
  
  function deleteProduct(id) {
    products = products.filter((product) => product.id !== id);
    renderProducts(); 
  }
  
  renderProducts();
  
    