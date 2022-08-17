import React, {useState} from 'react'
import AddTodoForm from './AddTodoForm';
import { v4 as uuidv4 } from 'uuid';

function Todo() {

    const [todos, setTodos] = useState([
        {id:1,
        todo: "créer la maquette du site",
        },
        {id:2,
        todo: "coder le site frontend",
        },
        {id:3,
        todo: "coder le site backend",
        },
        {id:4,
        todo: "référencer le site",
        },
        {id:5,
        todo: "déployer le site",
        },
    ]);

    const [warning, setWarning] = useState(false);

    const myTodos = todos.map(todo => {
        return(
            <li key={todo.id} className="list-group-item">{todo.todo}</li>
        )
    })

    const addNewTodo = (newTodo) => {

        if(newTodo!== ''){
            warning && setWarning(false);
        setTodos([
            ...todos, {
                id: uuidv4(),
                todo:newTodo
                }
            ])
        } else {
            setWarning(true);
        }
    }

    const warningMsg = warning && <div className='alert alert-danger mt-4' role='alert'>Veuillez indiquer une tâche</div>

  return (
    <div className='container bg-info shadow rounded-2 m-2'>
        <h3 className="text-center text-light display-4 ">Nombre de tâches à effectuer : {todos.length}</h3>
        <ul className='list-group'>
            {myTodos}
        </ul>
        {warningMsg}
        <AddTodoForm addNewTodo={addNewTodo}/>
    </div>
  )
}

export default Todo;