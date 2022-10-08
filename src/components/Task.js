import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete}) => {
  return (
    <div>
        <div className='task-container'>
            <h3>
                {task.text} {''}
            </h3>
            <h3>
                <FaTimes style={{ color: 'red', cursor: 'pointer'}} onClick={ ()=> onDelete(task.id)} />
            </h3>
        </div>
        <p>{task.day}</p>
    </div>
  )
}

export default Task