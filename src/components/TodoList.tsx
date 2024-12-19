import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../state/todoState';
import TodoItem from './TodoItem';
import { AnimatePresence } from 'framer-motion';

const TodoList: React.FC = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div className="my-auto  w-full">
      <AnimatePresence mode="popLayout">
        {todoList.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TodoList;
