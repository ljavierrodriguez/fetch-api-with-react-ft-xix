import React from 'react'

const PanelEditUser = ({ onSubmit, name, setName, lastname, setLastname }) => {
    return (
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="panelEditUser" aria-labelledby="offcanvasLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasLabel">Editar Usuarios</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <form onSubmit={onSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" placeholder='Ingrese Nombre' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="lastname" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="lastname" placeholder='Ingrese Apellido' value={lastname} onChange={(e) => setLastname(e.target.value)} />
                    </div>
                    <button className="btn btn-warning btn-sm w-100">Editar</button>
                </form>
            </div>
        </div>
    )
}

export default PanelEditUser