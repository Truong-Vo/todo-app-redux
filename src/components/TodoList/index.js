import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux'
// import { addTodo } from '../redux/actions'
import { v4 as uuidv4 } from 'uuid'
import { useRef, useState } from 'react'
import { todosRemainingSelector } from '../redux/selectors'
import todoListSlice from './todoListSlice';

export default function TodoList() {
  const todoInput = useRef()
  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')

  const todoList = useSelector(todosRemainingSelector)

  // console.log({ searchText })

  const dispatch = useDispatch()

  const handleButtononClick = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: priority,
      })

      // Redux core


      // addTodo({
      //   id: uuidv4(),
      //   name: todoName,
      //   completed: false,
      //   priority: priority,
      // })
    )
    setTodoName('')
    setPriority('Medium')
    todoInput.current.focus()
  }

  const handleInputChange = (e) => {
    setTodoName(e.target.value)
  }

  const handlePriorityChange = (value) => {
    setPriority(value)
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleButtononClick()
    }
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input
            ref={todoInput}
            value={todoName}
            onChange={handleInputChange}
            onKeyDown={handleEnter}
          />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
            onKeyDown={handleEnter}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleButtononClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  )
}
