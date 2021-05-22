import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
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
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/first">첫번째 실습(리액트 기본)</Link>
        </li>
        <li>
          <Link to="/second">두번째 실습(리덕스)</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" render={() => <div>페이지를 선택하세요</div>} exact />
        <Route path="/first" component={FirstPrac} />
        <Route path="/second" />
      </Switch>
    </div>
  );
}

export default App;
