import React, {useState} from 'react'

function AddTodoForm({addNewTodo}) {

const [addTodo, setAddTodo] = useState('');

const handleTodo = (e) => {
    e.preventDefault()
    addNewTodo(addTodo);

    setAddTodo('');
}

  return (
    <div className='mt-4'>
        <div className='card card-body shadow'>
            <form className='form-group mb-4' onSubmit={handleTodo}>
                <label className='fw-bold'>Ajouter une tâche</label>
                <input type="text" className='form-control text-center mt-4' value={addTodo} onChange={(e) => setAddTodo(e.target.value)}></input>
                <input type="submit" className='btn btn-success mt-4'></input>
            </form>
        </div>
    </div>
  )
}

export default AddTodoForm;