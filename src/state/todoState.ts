import { atom } from 'recoil';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn TypeScript', completed: false },
    { id: 3, text: 'Learn Recoil', completed: false },
  ],
});
