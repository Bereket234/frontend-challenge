import React from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState, Todo } from '../state/todoState';
import { motion } from 'framer-motion';

const TodoItem: React.FC<{ item: Todo }> = ({ item }) => {
  const setTodoList = useSetRecoilState(todoListState);

  const toggleComplete = () => {
    setTodoList((oldTodoList) =>
      oldTodoList.map((todo) =>
        todo.id === item.id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2 py-3 w-full"
    >
      <input
        type="checkbox"
        checked={item.completed}
        onChange={toggleComplete}
        className="cursor-pointer h-5 w-5 rounded-full accent-[#7337F2] border-2 border-[#7337F2] 
          appearance-none checked:bg-[#7337F2] checked:border-[#7337F2]"
      />
      <span
        className={`${
          item.completed ? 'line-through text-gray-500' : ''
        } w-full border-t border-gray-200 py-2`}
      >
        {item.text}
      </span>
    </motion.div>
  );
};

export default TodoItem;
