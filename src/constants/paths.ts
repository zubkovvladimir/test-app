import { ReactComponent as Book } from 'assets/images/icons/book.svg';
import { ReactComponent as EmptyIcon } from 'assets/images/icons/empty.svg';
import { MenuItem } from 'interfaces/layout.interfaces';

import { Routes } from './routes';

export const navItems: MenuItem[] = [
  {
    name: 'Разделы',
    icon: EmptyIcon,
    path: Routes.goods,
    children: [
      {
        name: 'Книги',
        icon: Book,
        path: Routes.books,
      },
    ],
  },
];
