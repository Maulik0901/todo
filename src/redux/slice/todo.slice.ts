import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

import { ITodo } from '../../types'

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addItem: (state, action: PayloadAction<ITodo>) => {
            const newItem = {
                id: uuidv4(),
                userName: action.payload.userName,
                gender: action.payload.gender,
                hobbies: action.payload.hobbies,
                age: action.payload.age,
                date: action.payload.date,
                taskName: action.payload.taskName,
                status: action.payload.status,
            }
            state.push(newItem as never)
        },
        updateItem: (state, action: PayloadAction<ITodo>) => {
            const updatedItem = action.payload
            return state.map((item: ITodo) =>
                item.id === updatedItem.id ? updatedItem : item
            ) as never[]
        },
        removeItem: (state, action: PayloadAction<ITodo>) => {
            return state.filter((item: ITodo) => item.id !== action.payload.id)
        },
    },
})

export const { addItem, removeItem, updateItem } = todoSlice.actions

export default todoSlice.reducer
