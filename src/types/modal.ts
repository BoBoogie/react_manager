import { MutableRefObject } from 'react';
import { User } from '@/types/api.ts';

export type IAction = 'create' | 'edit' | 'delete';

export interface IModelProp {
  modalRef: MutableRefObject<{ open: (type: IAction, data: User.UserItem) => void } | undefined>;
  update: () => void;
}
