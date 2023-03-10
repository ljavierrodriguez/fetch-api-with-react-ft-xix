import React, { useEffect, useState } from 'react'
import Lista from './components/Lista';
import ListItem from './components/ListItem';
import PanelEditUser from './components/PanelEditUser';
import PanelUser from './components/PanelUser';

const App = () => {

    const [users, setUsers] = useState(null);
    const [url] = useState("https://3001-ljavierrodr-fetchapiwit-x0st6af9bdb.ws-us89b.gitpod.io");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [id, setId] = useState(0);

    useEffect(() => {

        getUsers(url);

    }, [])

    const getUsers = (url) => {
        fetch(`${url}/users`, {}) // GET
            .then((response) => {
                //console.log(response);
                return response.json()
            })
            .then((data) => {
                setUsers(data);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name !== '' && lastname !== '') {
            const user = { name, lastname };
            addUser(user);
        }
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();

        if (name !== '' && lastname !== '' && id !== 0) {
            const user = { id, name, lastname };
            updateUser(user);
        }
    }

    const addUser = user => {
        console.log(user);
        fetch(`${url}/users`, {
            method: 'POST',
            body: JSON.stringify(user), // POST, PUT, PATCH
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                console.log(response);
                return response.json()
            })
            .then((data) => {
                console.log(data);
                //setUsers((prevUsers) => [...prevUsers, data]);
                getUsers(url);
                setName("");
                setLastname("");
            })
    }

    const updateUser = user => {
        //console.log(user);

        fetch(`${url}/users/${user.id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                //if(response.status === 200) getUsers(url);
                return response.json()
            })
            .then((data) => {
                if(data.id){
                    getUsers(url);
                }
            })
    }

    const deleteUser = user => {
        fetch(`${url}/users/${user.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                console.log(response);
                return response.json()
            })
            .then(() => {
                getUsers(url);
            })
    }

    const selectUser = user => {
        setId(user.id);
        setName(user.name);
        setLastname(user.lastname);
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="text-center">Fetching With React and JSON Server</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Lista className="list-group">
                            <h4>Lista de Usuarios</h4>
                            {
                                !!users &&
                                users.length > 0 &&
                                users.map((user) => {
                                    return (
                                        <ListItem name={user.name} lastname={user.lastname} key={user.id} handleEdit={() => selectUser(user)} handleDelete={() => deleteUser(user)} />
                                    )
                                })
                            }
                        </Lista>
                        <a className="btn btn-primary btn-sm my-2" data-bs-toggle="offcanvas" href="#panelUser" role="button" aria-controls="panelUser">
                            Agregar Usuario
                        </a>
                    </div>
                </div>
            </div>
            <PanelUser onSubmit={handleSubmit} name={name} setName={setName} lastname={lastname} setLastname={setLastname} />
            <PanelEditUser onSubmit={handleEditSubmit} name={name} setName={setName} lastname={lastname} setLastname={setLastname} />
        </>
    )
}

export default App