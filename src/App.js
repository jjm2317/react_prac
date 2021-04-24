import React, { useState } from "react";
import Counter from "./components/counterAndInput/Counter";
import Input from "./components/counterAndInput/Input";
import ShowContainer from "./components/showContainer/ShowContainer";
import UserContainer from "./components/userList/UserContainer";
function App() {
  const RenderModes = Object.freeze({
    ALL: Symbol.for("all"),
    COUNTER: Symbol.for("counter"),
    INPUTS: Symbol.for("inputs"),
    USERS: Symbol.for("users"),
  });

  const [renderMode, setRenderMode] = useState(RenderModes.ALL);
  const selectRenderMode = (e) => {
    const symbolKey = e.target.name;
    setRenderMode(Symbol.for(symbolKey));
  };
  return (
    <div>
      <ShowContainer selectRenderMode={selectRenderMode}>
        {(() => {
          switch (renderMode) {
            case RenderModes.COUNTER:
              return <Counter />;
            case RenderModes.INPUTS:
              return <Input />;
            case RenderModes.USERS:
              return <UserContainer />;
            case RenderModes.ALL:
              return (
                <>
                  <Counter />
                  <Input />
                  <UserContainer />
                </>
              );
            default:
          }
        })()}
      </ShowContainer>
    </div>
  );
}

export default App;
