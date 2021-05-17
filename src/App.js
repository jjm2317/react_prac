import React, { useState } from 'react';
import Counter from './components/counterAndInput/Counter';
import Input from './components/counterAndInput/Input';
import ShowContainer from './components/showContainer/ShowContainer';
import UserContainer from './components/userList/UserContainer';
import UserContainerByReducer from './components/userList/UserContainerByReducer';
import TodoContainer from './components/todo/TodoContainer';
import Grid from './components/agGrid/Grid';
import { LinkbooksProvider } from './components/agGrid/GridContext';

function App() {
  const RenderModes = Object.freeze({
    ALL: Symbol.for('all'),
    COUNTER: Symbol.for('counter'),
    INPUTS: Symbol.for('inputs'),
    USERS: Symbol.for('users'),
    TODO: Symbol.for('todo'),
    GRID: Symbol.for('grid')
  });

  const [renderMode, setRenderMode] = useState(RenderModes.ALL);
  const selectRenderMode = e => {
    const symbolKey = e.target.name;
    setRenderMode(Symbol.for(symbolKey));
  };
  return (
    <div>
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
              case RenderModes.ALL:
                return (
                  <>
                    <Counter />
                    <Input />
                    <UserContainerByReducer />
                    <TodoContainer />
                    <Grid />
                  </>
                );
              default:
            }
          })()}
        </ShowContainer>
      </LinkbooksProvider>
    </div>
  );
}

export default App;
