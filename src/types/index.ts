export interface ITodo {
    id?: string
    userName: string
    gender: string
    hobbies: string[]
    age: number
    date: Date
    taskName: string
    status: string
}

export interface IFormProps {
    isOpen: boolean
    toggleModal: () => void
    todoToUpdate?: ITodo | null
}

export interface ITextInput {
    label: string
    name: string
    value: string
    handleChange: (e: React.ChangeEvent) => void
    handleBlur: (e: React.FocusEvent) => void
}

export interface ISelectInput {
    name: string
    value: { label: string; value: string }
    label: string
    options: { label: string; value: string }[]
    handleChange: (
        selectedOption: { label: string; value: string } | null
    ) => void
    handleBlur: (e: React.FocusEvent) => void
}

export interface IRangeInput {
    name: string
    value: number
    label: string
    min: number
    max: number
    handleChange: (e: React.ChangeEvent) => void
    handleBlur: (e: React.FocusEvent) => void
}

export interface IRadioInput {
    name: string
    value: string
    label: string
    isChecked: boolean
    handleChange: (e: React.ChangeEvent) => void
    handleBlur: (e: React.FocusEvent) => void
}

export interface ICheckboxInput {
    name: string
    value: string
    label: string
    isChecked: boolean
    handleChange: (e: React.ChangeEvent) => void
    handleBlur: (e: React.FocusEvent) => void
}

export interface IDeleteConfirmationProps {
    isOpen: boolean
    toggleModal: () => void
    onDelete: () => void
}
