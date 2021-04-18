import React, { useState } from "react";
import Counter from "./components/Counter";
import Input from "./components/Input";
import ShowContainer from "./components/ShowContainer";
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
    </div>
  );
}

export default App;
