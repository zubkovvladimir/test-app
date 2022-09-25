// export type ShopItemType = 'physical' | 'avatar';

export interface ContactsBase {
  firstName: string;
  lastName: string;
  patronymic: string;
  age: number;
}

export interface Contact extends ContactsBase {
  id: number;
}

// export interface ShopAddItem extends ShopItemBase {
//   subtypeId?: number;
// }
// export interface ShopAvatarBase {
//   name: string;
//   image: string;
//   default: boolean;
// }

// export interface ShopAvatar extends ShopAvatarBase {
//   id: number;
// }

// export interface ShopAddAvatar extends ShopAvatarBase {}
