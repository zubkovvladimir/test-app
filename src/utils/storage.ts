import { storageTokenName } from 'constants/storage';

const storage = {
  getToken: (): string => window.localStorage.getItem(storageTokenName) as string,
  setToken: (token: string): void => {
    window.localStorage.setItem(storageTokenName, token);
  },
  clearToken: (): void => {
    window.localStorage.removeItem(storageTokenName);
  },

  getItem(name: string): null | unknown {
    const itemFromLS = localStorage.getItem(name);
    return itemFromLS !== null ? JSON.parse(itemFromLS) : null;
  },

  setItem(name: string, value: unknown): void {
    localStorage.setItem(name, JSON.stringify(value));
  },
};

export default storage;
