import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './components/counterAndInput/Counter';
import Input from './components/counterAndInput/Input';
import ShowContainer from './components/showContainer/ShowContainer';
import UserContainer from './components/userList/UserContainer';
import UserContainerByReducer from './components/userList/UserContainerByReducer';
import TodoContainer from './components/todo/TodoContainer';
import Grid from './components/agGrid/Grid';
import { LinkbooksProvider } from './components/agGrid/GridContext';
import RouterContainer from './components/reactRouter/RouteContainer';
import MwContainer from './components/reduxMw/MwContainer';
import useRender, { RenderModes } from './Render';
import FirstPrac from './FirstPrac';

function App() {
  return (
    <div>
      <FirstPrac />
    </div>
  );
}

export default App;
