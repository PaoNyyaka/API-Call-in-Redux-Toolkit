import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from '../redux/ReduxSlice';

const Todo = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.todo);

    useEffect(() => {
        dispatch(fetchTodo())
    }, []);
  return (
    <div>
        {
        data.isLoading? <h1>Loading...</h1> : 
        data.data.map(todo => {
            return <p key={todo.id}>{todo.title}</p>
        })
        }
    </div>
  )
}

export default Todo