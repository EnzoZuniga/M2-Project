export interface ICommande {
  id: number,
  idReservation: number,
  idTable: number,
  idPlats: number[],
  idMenus: number[],
  heureArriver: Date,
  heurDepart: Date,
  noteTable: number
}