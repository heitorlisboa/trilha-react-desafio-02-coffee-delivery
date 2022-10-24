type Coffee = {
  id: string;
  name: string;
  description: string;
  categories: (
    | 'tradicional'
    | 'com leite'
    | 'gelado'
    | 'especial'
    | 'alcoólico'
  )[];
  price: number;
  imageUrl: string;
};

export const coffees: Coffee[] = [
  {
    id: 'expresso-tradicional',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    categories: ['tradicional'],
    price: 9.9,
    imageUrl: '/coffees/expresso-tradicional.png',
  },
  {
    id: 'expresso-americano',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    categories: ['tradicional'],
    price: 9.9,
    imageUrl: '/coffees/expresso-americano.png',
  },
  {
    id: 'expresso-cremoso',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    categories: ['tradicional'],
    price: 9.9,
    imageUrl: '/coffees/expresso-cremoso.png',
  },
  {
    id: 'expresso-gelado',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    categories: ['tradicional', 'gelado'],
    price: 9.9,
    imageUrl: '/coffees/expresso-gelado.png',
  },
  {
    id: 'cafe-com-leite',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    categories: ['tradicional', 'com leite'],
    price: 9.9,
    imageUrl: '/coffees/cafe-com-leite.png',
  },
  {
    id: 'latte',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    categories: ['tradicional', 'com leite'],
    price: 9.9,
    imageUrl: '/coffees/latte.png',
  },
  {
    id: 'capuccino',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    categories: ['tradicional', 'com leite'],
    price: 9.9,
    imageUrl: '/coffees/capuccino.png',
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    categories: ['tradicional', 'com leite'],
    price: 9.9,
    imageUrl: '/coffees/macchiato.png',
  },
  {
    id: 'mocaccino',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    categories: ['tradicional', 'com leite'],
    price: 9.9,
    imageUrl: '/coffees/mocaccino.png',
  },
  {
    id: 'chocolate-quente',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    categories: ['especial', 'com leite'],
    price: 9.9,
    imageUrl: '/coffees/chocolate-quente.png',
  },
  {
    id: 'cubano',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    categories: ['especial', 'alcoólico', 'gelado'],
    price: 9.9,
    imageUrl: '/coffees/cubano.png',
  },
  {
    id: 'havaiano',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    categories: ['especial'],
    price: 9.9,
    imageUrl: '/coffees/havaiano.png',
  },
  {
    id: 'arabe',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    categories: ['especial'],
    price: 9.9,
    imageUrl: '/coffees/arabe.png',
  },
  {
    id: 'irlandes',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    categories: ['especial', 'alcoólico'],
    price: 9.9,
    imageUrl: '/coffees/irlandes.png',
  },
];
