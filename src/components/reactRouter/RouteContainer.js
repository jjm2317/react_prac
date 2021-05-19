import React from 'react';
import { Link, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

const RouterContainer = () => (
  <section>
    {/* /about 경로가 / 규칙과도 일치하기 때문에 Home 라우트에 exact props true설정 */}
    <ul>
      <li>
        <Link to="/">홈</Link>
      </li>
      <li>
        <Link to="/about?detail=12">소개</Link>
      </li>
    </ul>
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/profiles/:username" component={Profile} />
  </section>
);

export default RouterContainer;
