import { atom } from "recoil";

interface Product {
  src: any;
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const CartState = atom<Product[]>({
  key: "cartState",
  default: [],
});
