import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import TodoInput from './components/TodoInput';
import { RecoilRoot } from 'recoil';
import TodoList from './components/TodoList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RecoilRoot>
    <div className="mx-auto mt-10 p-4 min-h-screen min-w-[70vw] flex flex-col justify-center items-center">
      <div className=" min-w-[60vw]">
        <h1 className="text-2xl font-semibold mb-4">
          Todo <span className="font-normal">List</span>
        </h1>
        <TodoList />
        <TodoInput />
      </div>
    </div>
  </RecoilRoot>
);
