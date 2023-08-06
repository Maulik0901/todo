import React from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import DatePicker from 'react-datepicker'
import {
    Button,
    Form,
    FormGroup,
    Label,
    Row,
    Col,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
} from 'reactstrap'
import * as Yup from 'yup'

import CustomInput from '../component/text.input'
import CustomRadioInput from '../component/radio.input'
import CustomCheckBoxInput from '../component/checkbox.input'
import CustomRangeInput from '../component/range.input'
import CustomSelectInput from '../component/select.input'
import { addItem, updateItem } from '../redux/slice/todo.slice'
import { IFormProps } from '../types'
import { statusOption, ageConst, genderConst, hobbiesConst } from '../constant'

import 'react-datepicker/dist/react-datepicker.css'

/**
 * @name TodoForm
 * @description Component is a functional component that displays a form to add or update a todo item.
 * @param {boolean} isOpen - A boolean indicating whether the modal is open or not.
 * @param {function} toggleModal - A function to toggle the modal's visibility.
 * @param {object} todoToUpdate - An object representing the todo item to be updated (optional).
 */
const TodoForm: React.FC<IFormProps> = ({
    isOpen,
    toggleModal,
    todoToUpdate,
}) => {
    const dispatch = useDispatch()

    const validationSchema = Yup.object({
        userName: Yup.string()
            .required('User Name is required')
            .matches(
                /^[A-Za-z\s]{0,15}$/,
                'Accept only alphabets with white space, max length 15'
            ),
        gender: Yup.string().required('Gender is required'),
        hobbies: Yup.array().min(1, 'Select at least one hobby'),
        age: Yup.number()
            .required('Age is required')
            .min(ageConst.min)
            .max(ageConst.max),
        date: Yup.date().nullable().required('Date is required'),
        taskName: Yup.string().required('Task Name is required'),
        status: Yup.string().required('Status is required'),
    })

    // Initialize Formik form
    const formik = useFormik({
        initialValues: {
            userName: todoToUpdate ? todoToUpdate.userName : '',
            gender: todoToUpdate ? todoToUpdate.gender : '',
            hobbies: todoToUpdate ? todoToUpdate.hobbies : [],
            age: todoToUpdate ? todoToUpdate.age : ageConst.min,
            date: todoToUpdate ? todoToUpdate.date : new Date(),
            taskName: todoToUpdate ? todoToUpdate.taskName : '',
            status: todoToUpdate ? todoToUpdate.status : '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            // Handle form submission here
            const todoObj = {
                userName: values.userName,
                gender: values.gender,
                hobbies: values.hobbies,
                age: values.age,
                date: values.date,
                taskName: values.taskName,
                status: values.status,
            }
            if (todoToUpdate && todoToUpdate.id) {
                dispatch(updateItem({ ...todoObj, id: todoToUpdate.id }))
            } else {
                dispatch(addItem(todoObj))
            }

            resetForm()
            toggleModal()
        },
    })

    function toggleModalWithClear() {
        toggleModal()
        formik.resetForm()
    }

    const FormikError = ({ error }: { error: string | string[] | Date }) => {
        return (
            <div style={{ color: 'red', fontSize: '0.8rem' }}>
                <>{error}</>
            </div>
        )
    }

    return (
        <Modal isOpen={isOpen} toggle={toggleModalWithClear} size="xl">
            <Form onSubmit={formik.handleSubmit}>
                <ModalHeader toggle={toggleModalWithClear}>
                    {todoToUpdate ? 'Update Todo' : 'Insert Todo'}
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <CustomInput
                                    label="User Name"
                                    name="userName"
                                    value={formik.values.userName}
                                    handleChange={formik.handleChange}
                                    handleBlur={formik.handleBlur}
                                />
                                {formik.touched.userName &&
                                formik.errors.userName ? (
                                    <FormikError
                                        error={formik.errors.userName}
                                    />
                                ) : null}
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <Col>
                                    <Row>
                                        <Label>Gender:</Label>
                                    </Row>
                                    <Row>
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <CustomRadioInput
                                                        name="gender"
                                                        label={genderConst.male}
                                                        value={genderConst.male}
                                                        isChecked={
                                                            formik.values
                                                                .gender ==
                                                            genderConst.male
                                                                ? true
                                                                : false
                                                        }
                                                        handleChange={
                                                            formik.handleChange
                                                        }
                                                        handleBlur={
                                                            formik.handleBlur
                                                        }
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <CustomRadioInput
                                                        name="gender"
                                                        label={
                                                            genderConst.female
                                                        }
                                                        value={
                                                            genderConst.female
                                                        }
                                                        isChecked={
                                                            formik.values
                                                                .gender ==
                                                            genderConst.female
                                                                ? true
                                                                : false
                                                        }
                                                        handleChange={
                                                            formik.handleChange
                                                        }
                                                        handleBlur={
                                                            formik.handleBlur
                                                        }
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Row>
                                </Col>

                                {formik.touched.gender &&
                                formik.errors.gender ? (
                                    <FormikError error={formik.errors.gender} />
                                ) : null}
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Col>
                                    <Row>
                                        <Label>Hobbies:</Label>
                                    </Row>
                                    <Row>
                                        {hobbiesConst.map(
                                            (hobbie: string, index: number) => {
                                                return (
                                                    <Col key={index}>
                                                        <FormGroup>
                                                            <CustomCheckBoxInput
                                                                name="hobbies"
                                                                value={hobbie}
                                                                label={hobbie}
                                                                isChecked={formik.values.hobbies.includes(
                                                                    hobbie
                                                                )}
                                                                handleChange={
                                                                    formik.handleChange
                                                                }
                                                                handleBlur={
                                                                    formik.handleBlur
                                                                }
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                )
                                            }
                                        )}
                                    </Row>
                                </Col>
                                {formik.touched.hobbies &&
                                formik.errors.hobbies ? (
                                    <FormikError
                                        error={formik.errors.hobbies}
                                    />
                                ) : null}
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <CustomRangeInput
                                    label="Age"
                                    name="age"
                                    min={ageConst.min}
                                    max={ageConst.max}
                                    value={formik.values.age}
                                    handleChange={formik.handleChange}
                                    handleBlur={formik.handleBlur}
                                />
                                {formik.touched.age && formik.errors.age ? (
                                    <FormikError error={formik.errors.age} />
                                ) : null}
                                {formik.values.age}
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Date:</Label>
                                <br />
                                <DatePicker
                                    className="form-control w-100"
                                    selected={formik.values.date}
                                    minDate={new Date()}
                                    onChange={(date) =>
                                        formik.setFieldValue('date', date)
                                    }
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.date && formik.errors.date ? (
                                    <>{formik.errors.date}</>
                                ) : null}
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <CustomInput
                                    label="Task Name"
                                    name="taskName"
                                    value={formik.values.taskName}
                                    handleChange={formik.handleChange}
                                    handleBlur={formik.handleBlur}
                                />
                                {formik.touched.taskName &&
                                formik.errors.taskName ? (
                                    <FormikError
                                        error={formik.errors.taskName}
                                    />
                                ) : null}
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <CustomSelectInput
                                    label="Status"
                                    name="status"
                                    options={statusOption}
                                    value={{
                                        value: formik.values.status,
                                        label: formik.values.status,
                                    }}
                                    handleChange={(
                                        selectedOption: {
                                            value: string
                                        } | null
                                    ) =>
                                        formik.setFieldValue(
                                            'status',
                                            selectedOption?.value || ''
                                        )
                                    }
                                    handleBlur={formik.handleBlur}
                                />

                                {formik.touched.status &&
                                formik.errors.status ? (
                                    <FormikError error={formik.errors.status} />
                                ) : null}
                            </FormGroup>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">Submit</Button>{' '}
                    <Button color="secondary" onClick={toggleModalWithClear}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Form>
        </Modal>
    )
}

export default TodoForm
