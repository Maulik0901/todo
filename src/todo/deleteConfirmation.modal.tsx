import React from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

import { IDeleteConfirmationProps } from '../types'

/**
 * @name DeleteConfirmation
 * @description Component is a functional component that displays a confirmation modal for delete operation.
 * @param {boolean} isOpen - A boolean indicating whether the modal is open or not.
 * @param {function} toggleModal - A function to toggle the modal's visibility.
 * @param {function} onDelete - A function to be called when the "Delete" button is clicked.
 */
const DeleteConfirmation: React.FC<IDeleteConfirmationProps> = ({
    isOpen,
    toggleModal,
    onDelete,
}) => {
    return (
        // Modal component from reactstrap is used to display the confirmation dialog
        <Modal isOpen={isOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Delete Confirmation</ModalHeader>
            <ModalBody>Are you sure you want to delete this todo?</ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={onDelete}>
                    Delete
                </Button>{' '}
                <Button color="secondary" onClick={toggleModal}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default DeleteConfirmation
