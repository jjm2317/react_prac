const TodoForm = () => (
  <form>
    <input type="text" />
    <button>생성</button>
  </form>
);

const TodoList = () => (
  <ul>
    <Todo />
  </ul>
);

const Todo = () => <li>content</li>;

const App = () => (
  <>
    <TodoForm />
    <TodoList />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
