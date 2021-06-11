const GET_TODOS = 'GET_TODOS';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const GET_TODOS_ERROR = 'GET_TODOS_ERROR';
const GET_TODO = 'GET_TODO';
const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS';
const GET_TODO_ERRIR = 'GET_TODO_ERROR';

const { put, call, takeEvery, all } = ReduxSagaEffects;
const getTodos = () => ({ type: GET_TODOS });
const getTodo = () => ({ type: GET_TODO });

function* getTodosSaga() {
  try {
    const todos = yield call(() => fetch('http://localhost:3000/todos').then(res => res.json()));
    console.log(todos);
    yield put({
      type: GET_TODOS_SUCCESS,
      payload: todos
    });
  } catch (e) {
    yield put({
      type: GET_TODOS_ERROR,
      error: true,
      payload: e
    });
  }
}

function* getTodoSaga(id) {
  try {
    const todo = yield call(() => fetch(`http://localhost:3000/todo/${id}`)).then(res =>
      res.json()
    );

    yield put({
      type: GET_TODO_SUCCESS,
      payload: todo
    });
  } catch (e) {
    yield put({
      type: GET_TODO_ERRIR,
      payload: e
    });
  }
}

const initialState = {
  todos: {
    loading: false,
    data: null,
    error: null
  },
  todo: {
    loading: false,
    data: null,
    error: null
  }
};

function* todosSaga() {
  yield takeEvery(GET_TODOS, getTodosSaga);
}

function todos(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: { loading: true, data: null, error: null } };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: { loading: false, data: action.payload, error: null }
      };
    case GET_TODOS_ERROR:
      return {
        ...state,
        todos: {
          loading: false,
          data: null,
          error: action.payload
        }
      };
    default:
      return state;
  }
}

const rootReducer = Redux.combineReducers({ todos });
function* rootSaga() {
  yield all([todosSaga()]);
}

const sagaMiddleware = ReduxSaga.default();

const store = Redux.createStore(rootReducer, Redux.applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
const TodoForm = () => (
  <form>
    <input type="text" />
    <button>생성</button>
  </form>
);

const TodoList = () => {
  const { loading, error, data } = ReactRedux.useSelector(state => state.todos.todos);
  const dispatch = ReactRedux.useDispatch();
  React.useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (loading) return <ul>로딩중</ul>;
  if (error || !data) return <>에러</>;
  if (data)
    return (
      <ul>
        {loading
          ? '로딩중'
          : data.map(({ id, content, completed }) => (
              <Todo key={id} content={content} completed={completed} />
            ))}
      </ul>
    );
};

const Todo = ({ content, completed }) => (
  <li>
    {content} {completed ? '완료' : '미완료'}
  </li>
);

const App = () => (
  <>
    <TodoForm />
    <TodoList />
  </>
);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <App />
  </ReactRedux.Provider>,
  document.getElementById('root')
);
