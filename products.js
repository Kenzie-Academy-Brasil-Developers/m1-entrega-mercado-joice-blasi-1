const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

const listFruits = [];
const listDrinks = [];
const listHygiene = [];

function separeteItems(list) {
  for (let i = 0; i < list.length; i++) {
    const category = list[i].category;
    if (category.toLowerCase() === "frutas") {
      listFruits.push(list[i]);
    }
    if (category.toLowerCase() === "bebidas") {
      listDrinks.push(list[i]);
    }
    if (category.toLowerCase() === "higiene") {
      listHygiene.push(list[i]);
    }
  }
}

separeteItems(products);

function addProduct(title, price, category, image, imageDescription) {
  let item = {
    title,
    price,
    category,
    image,
    imageDescription,
  };
  products.push(item);
  separeteItems(products);
}


let mainFruits = document.getElementsByClassName("fruits")[0];
let tagUlFruits = document.createElement("ul");
mainFruits = mainFruits.appendChild(tagUlFruits);
let mainDrinks = document.getElementsByClassName("drinks")[0];
let tagUlDrinks = document.createElement("ul");
mainDrinks = mainDrinks.appendChild(tagUlDrinks);
let mainHygiene = document.getElementsByClassName("hygiene")[0];
let tagUlHygiene = document.createElement("ul");
mainHygiene = mainHygiene.appendChild(tagUlHygiene);

function listItems(list, category) {
  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    let assembledTemplate = createTemplate(item);
    switch (category) {
      case "frutas":
        mainFruits.appendChild(assembledTemplate);
        break;
      case "bebidas":
        mainDrinks.appendChild(assembledTemplate);
        break;
      case "higiene":
        mainHygiene.appendChild(assembledTemplate);
        break;
    }
  }
}

listItems(listFruits, "frutas");
listItems(listDrinks, "bebidas");
listItems(listHygiene, "higiene");

function createTemplate(object) {
  let tagLi = document.createElement("li");
  let tagImg = document.createElement("img");
  let tagMain = document.createElement("main");
  let tagH1 = document.createElement("h1");
  let tagH5 = document.createElement("h5");
  let tagStrong = document.createElement("strong");

  tagImg.classList.add("product-img");
  tagMain.classList.add("product-main");
  tagH1.classList.add("product-title");
  tagH5.classList.add("product-category");
  tagStrong.classList.add("product-price");

  tagImg.src = object.image ? object.image : "./img/products/no-img.svg";
  tagImg.alt = object.title;
  tagImg.title = object.title;
  tagH1.innerText = object.title;
  tagH5.innerText = object.category;
  tagStrong.innerText = `${object.price}`;

  tagLi.append(tagImg, tagMain);
  tagMain.append(tagH1, tagH5, tagStrong);

  return tagLi;
}