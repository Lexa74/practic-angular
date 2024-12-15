export interface IUser {
  name: string;
  age: number;
  isAuth: boolean;
  isMale: boolean;
}

export const USERS: IUser[] = [
  {
    name: 'Alex',
    age: 15,
    isAuth: true,
    isMale: true,
  },
  {
    name: 'Maxim',
    age: 21,
    isAuth: false,
    isMale: true,
  },
  {
    name: 'Dmitry',
    age: 25,
    isAuth: true,
    isMale: true,
  },
  {
    name: 'Ulya',
    age: 25,
    isAuth: false,
    isMale: false,
  },
  {
    name: 'Kristina',
    age: 101,
    isAuth: true,
    isMale: false,
  },
];
