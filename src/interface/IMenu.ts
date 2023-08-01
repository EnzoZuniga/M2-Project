export interface IMenu {
  id: number,
  name: string,
  price: number,
  entree?: number[],
  plat: number[],
  dessert?: number[],
}