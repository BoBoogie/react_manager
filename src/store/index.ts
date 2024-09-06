import { create } from 'zustand';
import { User } from '@/types/api.ts';

const useBearStore = create<{
  token: string;
  userInfo: User.UserItem;
  setToken: (token: string) => void;
  setUserInfo: (userInfo: User.UserItem) => void;
}>(set => ({
  token: '',
  userInfo: {} as User.UserItem,
  setToken: (token: string) => set(() => ({ token })),
  setUserInfo: (userInfo: User.UserItem) => set(() => ({ userInfo }))
}));

export default useBearStore;
