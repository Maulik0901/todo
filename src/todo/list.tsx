import React, { useState } from 'react'
import { Button, Table } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'

import { removeItem } from '../redux/slice/todo.slice'
import TodoForm from './form.modal'
import { RootState } from '../redux/store'
import { ITodo } from '../types'
import DeleteConfirmation from './deleteConfirmation.modal'

/**
 * @name TodoList
 * This component displays a list of todos and allows users to add, edit, and delete todos using modals.
 * It fetches the todo list from the Redux store and manages the state of modals and selected todo item.
 * It also handles the logic for adding, editing, and deleting todos through Redux actions.
 */
const TodoList: React.FC = () => {
    const dispatch = useDispatch()

    const list = useSelector((state: RootState) => state.todo)

    const [isTodoModal, setTodoModalOpen] = useState(false)
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)
    const [selectedTodo, setSelectedTodo] = useState<ITodo | null>(null)

    const handleDeleteTodo = () => {
        if (selectedTodo) {
            dispatch(removeItem(selectedTodo))
            setDeleteModalOpen(false)
            setSelectedTodo(null)
        }
    }

    const handleOpenEditModal = (todo: ITodo) => {
        setSelectedTodo(todo)
        setTodoModalOpen(true)
    }

    const handleOpenDeleteModal = (todo: ITodo) => {
        setSelectedTodo(todo)
        setDeleteModalOpen(true)
    }

    return (
        <div className="container py-5">
            <h1 className="text-center">Todo List</h1>
            <div className="d-flex justify-content-end pb-3">
                <Button color="primary" onClick={() => setTodoModalOpen(true)}>
                    Add Todo
                </Button>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Gender</th>
                        <th>Hobbies</th>
                        <th>Age</th>
                        <th>Date</th>
                        <th>Task Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((todo: ITodo) => (
                        <tr key={todo.id}>
                            <td>{todo.userName}</td>
                            <td>{todo.gender}</td>
                            <td>
                                {todo.hobbies &&
                                    todo.hobbies.length &&
                                    todo.hobbies.join(', ')}
                            </td>
                            <td>{todo.age}</td>
                            <td>{todo.date ? todo.date.toDateString() : ''}</td>
                            <td>{todo.taskName}</td>
                            <td>{todo.status}</td>
                            <td>
                                <Button
                                    color="info"
                                    onClick={() => handleOpenEditModal(todo)}
                                >
                                    Edit
                                </Button>{' '}
                                <Button
                                    color="danger"
                                    onClick={() => handleOpenDeleteModal(todo)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {!selectedTodo && (
                <TodoForm
                    isOpen={isTodoModal}
                    toggleModal={() => setTodoModalOpen((prev) => !prev)}
                />
            )}
            {selectedTodo && isTodoModal && (
                <TodoForm
                    isOpen={isTodoModal}
                    toggleModal={() => {
                        setTodoModalOpen((prev) => !prev)
                        setSelectedTodo(null)
                    }}
                    todoToUpdate={selectedTodo}
                />
            )}
            {isDeleteModalOpen && (
                <DeleteConfirmation
                    isOpen={isDeleteModalOpen}
                    toggleModal={() => setDeleteModalOpen((prev) => !prev)}
                    onDelete={handleDeleteTodo}
                />
            )}
        </div>
    )
}

export default TodoList
