import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../state/todoState';
import { FaPlusCircle } from 'react-icons/fa';

const TodoInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    if (inputValue.trim()) {
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  return (
    <div className="flex items-center gap-2 mt-2">
      <FaPlusCircle className="text-[#7337F2] text-2xl" />
      <div className="flex items-center gap-2 w-full border-t border-b border-gray-200">
        <input
          type="text"
          className="rounded p-2 w-full focus:outline-none"
          placeholder="Memorize the dictionary"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={addItem}
          className="bg-[#7337F2] text-white px-5 py-2 rounded text-sm m-2 text-nowrap"
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
