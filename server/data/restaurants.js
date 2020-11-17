const uuid = require("uuid");

const restaurants = [
  {
    id: uuid.v4(),
    name: "Combucha",
    currency: "$",
    url:
      "https://images.unsplash.com/photo-1530799164-fe981d01a118?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    dishes: [
      { name: "Brown butter mayo, sourdough", price: 18 },
      { name: "Cremini mushroom, chimichurri", price: 22 },
      { name: "Applewood smoked cheddar", price: 16 },
      { name: "c", price: 18 },
      { name: "daily selection of cured meats and cheeses", price: 24 },
    ],
  },
  {
    id: uuid.v4(),
    name: "LaVinia Restaurant",
    currency: "$",
    url:
      "https://images.unsplash.com/photo-1530799164-fe981d01a118?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    dishes: [
      { name: "Grilled Calamari with Chilli oil", price: 16.75 },
      { name: "Sautéed Shrimp with Garlic and Olive Oil", price: 17.75 },
      { name: "Fine Ibérico Spanish Ham", price: 25.75 },
      { name: "Sautéed Mushrooms in Garlic and Olive oil", price: 13.75 },
      { name: "Fresh Mussells Steamed in Spanish Beer", price: 15.75 },
    ],
  },
  {
    id: uuid.v4(),
    name: "LaVinia Restaurant",
    currency: "$",
    url:
      "https://images.unsplash.com/photo-1530799164-fe981d01a118?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    dishes: [
      { name: "Grilled Calamari with Chilli oil", price: 16.75 },
      { name: "Sautéed Shrimp with Garlic and Olive Oil", price: 17.75 },
      { name: "Fine Ibérico Spanish Ham", price: 25.75 },
      { name: "Sautéed Mushrooms in Garlic and Olive oil", price: 13.75 },
      { name: "Fresh Mussells Steamed in Spanish Beer", price: 15.75 },
    ],
  },
  {
    id: uuid.v4(),
    name: "Cobra",
    currency: "$",
    url:
      "https://images.unsplash.com/photo-1530799164-fe981d01a118?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    dishes: [
      { name: "Brown butter mayo, sourdough", price: 18 },
      { name: "Cremini mushroom, chimichurri", price: 22 },
      { name: "Applewood smoked cheddar", price: 16 },
      { name: "Jalapeño hoe cakes, Yuzu honey, hot sauce", price: 18 },
      { name: "daily selection of cured meats and cheeses", price: 24 },
    ],
  },
  {
    id: uuid.v4(),
    name: "MaVinia Restaurant",
    currency: "$",
    url:
      "https://images.unsplash.com/photo-1530799164-fe981d01a118?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    dishes: [
      { name: "Grilled Calamari with Chilli oil", price: 16.75 },
      { name: "Sautéed Shrimp with Garlic and Olive Oil", price: 17.75 },
      { name: "Fine Ibérico Spanish Ham", price: 25.75 },
      { name: "Sautéed Mushrooms in Garlic and Olive oil", price: 13.75 },
      { name: "Fresh Mussells Steamed in Spanish Beer", price: 15.75 },
    ],
  },
  {
    id: uuid.v4(),
    name: "Colibri",
    currency: "$",
    url:
      "https://images.unsplash.com/photo-1530799164-fe981d01a118?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    dishes: [
      { name: "Brown butter mayo, sourdough", price: 18 },
      { name: "Cremini mushroom, chimichurri", price: 22 },
      { name: "Applewood smoked cheddar", price: 16 },
      { name: "Jalapeño hoe cakes, Yuzu honey, hot sauce", price: 18 },
      { name: "daily selection of cured meats and cheeses", price: 24 },
    ],
  },
  {
    id: uuid.v4(),
    name: "CoVinia Restaurant",
    currency: "$",
    url:
      "https://images.unsplash.com/photo-1530799164-fe981d01a118?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    dishes: [
      { name: "Grilled Calamari with Chilli oil", price: 16.75 },
      { name: "Sautéed Shrimp with Garlic and Olive Oil", price: 17.75 },
      { name: "Fine Ibérico Spanish Ham", price: 25.75 },
      { name: "Sautéed Mushrooms in Garlic and Olive oil", price: 13.75 },
      { name: "Fresh Mussells Steamed in Spanish Beer", price: 15.75 },
    ],
  },
];

module.exports = restaurants;
