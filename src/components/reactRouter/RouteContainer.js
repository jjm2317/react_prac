import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Home from './Home';

const RouterContainer = () => (
  <section>
    {/* /about 경로가 / 규칙과도 일치하기 때문에 Home 라우트에 exact props true설정 */}
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
  </section>
);

export default RouterContainer;
