import React from 'react';
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

const FirstPrac = () => {
  const [renderMode, selectRenderMode] = useRender();
  return (
    <LinkbooksProvider>
      <ShowContainer selectRenderMode={selectRenderMode}>
        {(() => {
          switch (renderMode) {
            case RenderModes.COUNTER:
              return <Counter />;
            case RenderModes.INPUTS:
              return <Input />;
            case RenderModes.USERS:
              return <UserContainerByReducer />;
            case RenderModes.TODO:
              return <TodoContainer />;
            case RenderModes.GRID:
              return <Grid />;
            case RenderModes.ROUTER:
              return <RouterContainer />;
            case RenderModes.MIDDLEWARE:
              return <MwContainer />;
            case RenderModes.ALL:
              return (
                <>
                  <Counter />
                  <Input />
                  <UserContainerByReducer />
                  <TodoContainer />
                  <Grid />
                  <RouterContainer />
                  <MwContainer />
                </>
              );
            default:
          }
        })()}
      </ShowContainer>
    </LinkbooksProvider>
  );
};

export default FirstPrac;
