const DummyProducts = [
    {
      id: 1,
      name: "Screwdriver",
      price: "Rp. 1.500.000",
      description: "This is Screwdriver",
      img: "https://images-na.ssl-images-amazon.com/images/I/61eTB4SzsqL._AC_SX355_.jpg",
    },
    {
      id: 2,
      name: "Burger",
      price: "Rp. 1.500.000",
      description: "This is Burger",
      img: "https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg",
    },
    {
      id: 3,
      name: "Table",
      price: "Rp. 1.500.000",
      description: "This is Table",
      img: "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dw9fc54f37/images/530000/533591.jpg",
    },
    {
      id: 4,
      name: "Cactus",
      price: "Rp. 1.500.000",
      description: "This is Cactus",
      img: "https://cdn.webshopapp.com/shops/30495/files/311366250/cactus-euphorbia-ingens-cowboy-cactus.jpg",
    },
    {
      id: 5,
      name: "Laptop",
      price: "Rp. 1.500.000",
      description: "This is Laptop",
      img: "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/Lenovo_Ideapad_C340_14/Lenovo_Ideapad_C340_14_L_1.jpg",
    },
    {
      id: 6,
      name: "Stone123",
      price: "Rp. 1.500.000",
      description: "This is Stone",
      img: "https://miro.medium.com/max/800/1*3X1eYQWyyKAg3r14-rZ2cA.jpeg",
    },
  ];
  
  const DummyCategory = [
    {
      id: 1,
      name: 'Food',
      child: [
        {
          id: 6,
          name: 'Snack',
        },
        {
          id: 7,
          name: 'Soft Drink',
        },
      ],
    },
    {
      id: 2,
      name: 'Tools',
      child: [
        {
          id: 8,
          name: 'Garden Tools',
        },
        {
          id: 9,
          name: 'Cleaning Tools',
        },
      ],
    },
    {
      id: 3,
      name: 'Electro',
      child: [
        {
          id: 6,
          name: 'Laptop',
        },
        {
          id: 7,
          name: 'Television',
        },
      ],
    },
  ];
  
  const DummyBanner = [
    {
      id: 1,
      img: "https://image.freepik.com/free-vector/blue-molecule-structure-banner-template_1035-17384.jpg",
    },
    {
      id: 2,
      img: "https://static.vecteezy.com/system/resources/previews/000/576/397/non_2x/red-color-geometric-abstract-vector-background-modern-design.jpg",
    },
    {
      id: 3,
      img: "https://image.freepik.com/free-vector/abstract-colorful-geometric-banner-template_1035-17693.jpg",
    },
  ]

  export {DummyProducts, DummyCategory, DummyBanner};