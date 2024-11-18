import { MutableRefObject } from 'react';
// import { Dept, User } from '@/types/api.ts';

export type IAction = 'create' | 'edit' | 'delete';

export interface IModelProp<T> {
  modalRef: MutableRefObject<{ open: (type: IAction, data?: T) => void } | undefined>;
  update: () => void;
}
