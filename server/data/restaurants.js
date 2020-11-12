const uuid = require("uuid");

const restaurants = [
  {
    id: uuid.v4(),
    name: "Combucha",
    currency: "$",
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
    name: "LaVinia Restaurant",
    currency: "$",
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
