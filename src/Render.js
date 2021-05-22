import { useState } from 'react';

export const RenderModes = Object.freeze({
  ALL: Symbol.for('all'),
  COUNTER: Symbol.for('counter'),
  INPUTS: Symbol.for('inputs'),
  USERS: Symbol.for('users'),
  TODO: Symbol.for('todo'),
  GRID: Symbol.for('grid'),
  ROUTER: Symbol.for('router'),
  MIDDLEWARE: Symbol.for('middleWare')
});
const useRender = () => {
  const [renderMode, setRenderMode] = useState(RenderModes.ALL);
  const selectRenderMode = e => {
    const symbolKey = e.target.name;
    setRenderMode(Symbol.for(symbolKey));
  };

  return [renderMode, selectRenderMode];
};

export default useRender;
