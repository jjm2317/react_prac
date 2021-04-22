import React, { useState } from "react";
import Counter from "./components/counterAndInput/Counter";
import Input from "./components/counterAndInput/Input";
import ShowContainer from "./components/counterAndInput/ShowContainer";
import UserContainer from "./components/userList/UserContainer";
function App() {
  const [renderMode, setRenderMode] = useState("all");
  const selectRenderMode = (e) => {
    setRenderMode(e.target.innerText);
  };
  return (
    <div>
      <ShowContainer selectRenderMode={selectRenderMode}>
        {renderMode === "counter" ? (
          <Counter />
        ) : renderMode === "input" ? (
          <Input />
        ) : (
          <>
            <Counter />
            <Input />
          </>
        )}
      </ShowContainer>
      <UserContainer />
    </div>
  );
}

export default App;
