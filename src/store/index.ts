import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/types/api.ts';

const useStore = create(
  persist<{
    token: string;
    userInfo: User.UserItem;
    setToken: (token: string) => void;
    setUserInfo: (userInfo: User.UserItem) => void;
  }>(
    set => ({
      token: '',
      userInfo: {} as User.UserItem,
      setToken: (token: string) => set(() => ({ token })),
      setUserInfo: (userInfo: User.UserItem) => set(() => ({ userInfo }))
    }),
    {
      name: 'store'
    }
  )
);

export default useStore;
