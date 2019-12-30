import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from '../components/TodoList';
import { getTodos, postTodos, delTodos, patchTodos } from '../modules/todos';
import TodoListForm from '../components/TodoListForm';

function TodoListLoader() {
    const todos = useSelector((state) => state.todos.todoData);
    const { data, loading, error } = useSelector((state) => state.todos.todoData);
    const dispatch = useDispatch();
    //페이지 시작할 때 데이터를 불러와줌.
    useEffect(()=> {
        dispatch(getTodos());
    }, [dispatch]);
    //생성하기.
    const onSubmitData = (text) => {
        dispatch(postTodos(text))
        .then(dispatch(getTodos()));
    };
    //삭제하기.
    const onRemove = (id) => {
        dispatch(delTodos(id))
        .then(dispatch(getTodos()));
    };
    //데이터 고치기.
    const onToggle = (id, done) => {
        dispatch(patchTodos(id, done))
        .then(dispatch(getTodos()));
    };
    //데이터 확인 용.
    console.log(todos);


return (
        <>
            <TodoListForm onSubmitData={onSubmitData} />
            <div>
                {loading && <p style={{ textAlign: 'center' }}>로딩중..</p>}
                {error && <p style={{ textAlign: 'center' }}>에러 발생!</p>}
                {data && <TodoList todos={data} onRemove={onRemove} onToggle={onToggle}/>}
            </div>
        </>
    );
};

export default TodoListLoader;