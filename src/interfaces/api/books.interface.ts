// export type ShopItemType = 'physical' | 'avatar';

export interface BookBase {
  name: string;
  amount: number;
  rate: number;
  tags: string[];
  cover: string;
  author: string;
  description: string;
}

export interface Book extends BookBase {
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
