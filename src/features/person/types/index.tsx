interface IPerson {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  image: string;
}
type TPersons = Array<IPerson>;

export type { IPerson, TPersons };
