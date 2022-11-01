export type Coffee = {
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
