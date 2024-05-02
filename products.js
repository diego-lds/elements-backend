 const  products = [
    {
      id: 1,
      name: "Cadeira Joplin 1",
      imageUrl: "https://loja.elements.com.br/cdn/shop/files/joplinverdeebranco.png?v=1712779856&width=300",
      category: "chair",
      price: 490.99,
      rating: 3
    },
    {
      id: 2,
      name: "Mesa de Jantar Redonda Elegance",
      imageUrl: "https://loja.elements.com.br/cdn/shop/files/mesa-catarina1l-elements-com-gaveteriro-perspectiva.png?v=1713900398&width=300",
      category: "table",
      price: 699.99,
      rating: 1
    },
    {
      id: 3,
      name: "Monitor Shnaps",
      imageUrl: "https://loja.elements.com.br/cdn/shop/files/schnaptouch.png?v=1713902467&width=300",
      category: "monitor",
      price: 490.99,
      rating: 0
    },
    {
      id: 4,
      name: "Cadeira Joplin 4",
      imageUrl: "https://loja.elements.com.br/cdn/shop/files/joplinverdeebranco.png?v=1712779856&width=300",
      category: "chair",
      price: 523.99,
      rating: 4.6
    },
    {
      id: 5,
      name: "Cadeira Joplin 5",
      imageUrl: "https://loja.elements.com.br/cdn/shop/files/joplinverdeebranco.png?v=1712779856&width=300",
      category: "chair",
      price: 534.99,
      rating: 4
    },
    {
      id: 6,
      name: "Cadeira Joplin 6",
      imageUrl: "https://loja.elements.com.br/cdn/shop/files/joplinverdeebranco.png?v=1712779856&width=300",
      category: "chair",
      price: 545.99,
      rating: 4.4
    },
    {
      id: 7,
      name: "Cadeira Joplin 7",
      imageUrl: "https://loja.elements.com.br/cdn/shop/files/joplinverdeebranco.png?v=1712779856&width=300",
      category: "chair",
      price: 100.00,
      rating: 5
    },
    {
      id: 8,
      name: "Cadeira Joplin 8",
      imageUrl: "https://loja.elements.com.br/cdn/shop/files/joplinverdeebranco.png?v=1712779856&width=300",
      category: "chair",
      price: 567.99,
      rating: 2
    },
    {
      id: 9,
      name: "Cadeira Joplin 9",
      imageUrl: "https://loja.elements.com.br/cdn/shop/files/joplinverdeebranco.png?v=1712779856&width=300",
      category: "chair",
      price: 578.99,
      rating: 4.1
    },
    {
      id: 10,
      name: "Cadeira Joplin 10",
      imageUrl: "https://loja.elements.com.br/cdn/shop/files/joplinverdeebranco.png?v=1712779856&width=300",
      category: "chair",
      price: 589.99,
      rating: 4.0
    },
    {
    id: 11,
    name: "Mesa com gaveteiro Catarina",
    imageUrl: "https://loja.elements.com.br/cdn/shop/files/mesa-catarina1l-elements-com-gaveteriro-perspectiva.png?v=1713900398&width=300",
    category: "table",
    price: 490.99,
    rating: 4.9
  },
  {
    id: 12,
    name: "Mesa de Jantar Redonda Elegance",
    imageUrl: "https://loja.elements.com.br/cdn/shop/files/mesa-catarina1l-elements-com-gaveteriro-perspectiva.png?v=1713900398&width=300",
    category: "table",
    price: 699.99,
    rating: 4.8
  },
  {
    id: 13,
    name: "Mesa de Centro de Vidro Moderna",
    imageUrl: "https://loja.elements.com.br/cdn/shop/files/mesa-catarina1l-elements-com-gaveteriro-perspectiva.png?v=1713900398&width=300",
    category: "table",
    price: 299.99,
    rating: 4.6
  },
  {
    id: 14,
    name: "Mesa Dobrável Compacta",
    imageUrl: "https://loja.elements.com.br/cdn/shop/files/mesa-catarina1l-elements-com-gaveteriro-perspectiva.png?v=1713900398&width=300",
    category: "table",
    price: 149.99,
    rating: 0
  },
  {
    id: 15,
    name: "Mesa Lateral de Madeira Rústica",
    imageUrl: "https://loja.elements.com.br/cdn/shop/files/mesa-catarina1l-elements-com-gaveteriro-perspectiva.png?v=1713900398&width=300",
    category: "table",
    price: 99.99,
    rating: 4.3
  },
  {
    id: 16,
    name: "Mesa de Escritório Moderna",
    imageUrl: "https://loja.elements.com.br/cdn/shop/files/mesa-catarina1l-elements-com-gaveteriro-perspectiva.png?v=1713900398&width=300",
    category: "table",
    price: 199.99,
    rating: 4.7
  },
  {
    id: 17,
    name: "Mesa de Jantar Retangular Luxo",
    imageUrl: "https://loja.elements.com.br/cdn/shop/files/mesa-catarina1l-elements-com-gaveteriro-perspectiva.png?v=1713900398&width=300",
    category: "table",
    price: 999.99,
    rating: 4.9
  },
  {
    id: 18,
    name: "Mesa de Canto Compacta",
    imageUrl: "https://loja.elements.com.br/cdn/shop/files/mesa-catarina1l-elements-com-gaveteriro-perspectiva.png?v=1713900398&width=300",
    category: "table",
    price: 79.99,
    rating: 4.2
  },
  {
    id: 19,
    name: "Mesa de Bar Retrátil",
    imageUrl: "https://loja.elements.com.br/cdn/shop/files/mesa-catarina1l-elements-com-gaveteriro-perspectiva.png?v=1713900398&width=300",
    category: "table",
    price: 129.99,
    rating: 4.4
  },
  {
    id: 20,
    name: "Mesa Infantil Colorida",
    imageUrl: "https://loja.elements.com.br/cdn/shop/files/mesa-catarina1l-elements-com-gaveteriro-perspectiva.png?v=1713900398&width=300",
    category: "table",
    price: 397.99,
    rating: 4.0
  },
  {
    id: 21,
    name: "Monitor Shnaps",
    imageUrl: "https://loja.elements.com.br/cdn/shop/files/schnaptouch.png?v=1713902467&width=300",
    category: "monitor",
    price: 39.99,
    rating: 4.0
  },
  {
    id: 22,
    name: "Monitor Shnaps",
    imageUrl: "https://loja.elements.com.br/cdn/shop/files/schnaptouch.png?v=1713902467&width=300",
    category: "monitor",
    price: 3950.99,
    rating: 4.0
  },
  {
    id: 23,
    name: "Monitor Shnaps",
    imageUrl: "https://loja.elements.com.br/cdn/shop/files/schnaptouch.png?v=1713902467&width=300",
    category: "monitor",
    price: 9000.99,
    rating: 4.0
  },
  {
    id: 24,
    name: "Monitor Shnaps",
    imageUrl: "https://loja.elements.com.br/cdn/shop/files/schnaptouch.png?v=1713902467&width=300",
    category: "monitor",
    price: 900.99,
    rating: 4.0
  },
  {
    id: 25,
    name: "Monitor Shnaps",
    imageUrl: "https://loja.elements.com.br/cdn/shop/files/schnaptouch.png?v=1713902467&width=300",
    category: "monitor",
    price: 2390.99,
    rating: 4.0
  },
  {
    id: 26,
    name: "Monitor Shnaps",
    imageUrl: "https://loja.elements.com.br/cdn/shop/files/schnaptouch.png?v=1713902467&width=300",
    category: "monitor",
    price: 790.99,
    rating: 4.0
  },
  {
    id: 27,
    name: "Monitor Shnaps",
    imageUrl: "https://loja.elements.com.br/cdn/shop/files/schnaptouch.png?v=1713902467&width=300",
    category: "monitor",
    price: 370.99,
    rating: 4.0
  },
  {
    id: 28,
    name: "Monitor Shnaps",
    imageUrl: "https://loja.elements.com.br/cdn/shop/files/schnaptouch.png?v=1713902467&width=300",
    category: "monitor",
    price: 50.99,
    rating: 4.0
  },
  {
    id: 29,
    name: "Monitor Shnaps",
    imageUrl: "https://loja.elements.com.br/cdn/shop/files/schnaptouch.png?v=1713902467&width=300",
    category: "monitor",
    price: 390.99,
    rating: 4.0
  },
  {
    id: 30,
    name: "Monitor Shnaps",
    imageUrl: "https://loja.elements.com.br/cdn/shop/files/schnaptouch.png?v=1713902467&width=300",
    category: "monitor",
    price: 390.99,
    rating: 4.0
  },
  {
    id: 31,
    name: "Monitor Shnaps",
    imageUrl: "https://loja.elements.com.br/cdn/shop/files/schnaptouch.png?v=1713902467&width=300",
    category: "monitor",
    price: 190.99,
    rating: 4.0
  },
  {
    id: 32,
    name: "Monitor Shnaps",
    imageUrl: "https://loja.elements.com.br/cdn/shop/files/schnaptouch.png?v=1713902467&width=300",
    category: "monitor",
    price: 490.99,
    rating: 4.0
  },
];

module.exports = products;
