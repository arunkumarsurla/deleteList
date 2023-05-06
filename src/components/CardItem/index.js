import './index.css'

const CardItem = (props) =>{
    const {todoDetails,deleteTodo} = props
    const {id, title} = todoDetails

    const onDeleteTodo = () =>{
        deleteTodo(id)

    }
    return(
    <li className="todo-item">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>

    )
}



export default CardItem