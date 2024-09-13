import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/types/api.ts';

const useStore = create(
  persist<{
    token: string;
    userInfo: User.UserItem;
    collapsed: boolean;
    setToken: (token: string) => void;
    setUserInfo: (userInfo: User.UserItem) => void;
    setCollapsed: (collapsed: boolean) => void;
  }>(
    set => ({
      token: '',
      userInfo: {} as User.UserItem,
      collapsed: false,
      setToken: (token: string) => set(() => ({ token })),
      setUserInfo: (userInfo: User.UserItem) => set(() => ({ userInfo })),
      setCollapsed: (collapsed: boolean) => set(() => ({ collapsed }))
    }),
    {
      name: 'store'
    }
  )
);

export default useStore;
