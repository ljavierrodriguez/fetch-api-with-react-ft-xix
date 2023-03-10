import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';

const ListItem = ({ name, lastname, handleEdit, handleDelete }) => {
    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span>{name} {lastname}</span>
            <span>
                <a className="my-2" data-bs-toggle="offcanvas" href="#panelEditUser" role="button" aria-controls="panelEditUser">
                    <FaEdit className='mx-1' onClick={handleEdit} style={{ cursor: 'pointer' }} />
                </a>
                <FaTrash className='mx-1' onClick={handleDelete} style={{ cursor: 'pointer' }} />
            </span>
        </li>
    )
}

export default ListItem