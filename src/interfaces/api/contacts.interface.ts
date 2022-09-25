export interface ContactsBase {
  firstName: string;
  lastName: string;
  patronymic: string;
  age: number;
}

export interface Contact extends ContactsBase {
  id: number;
}
