import React, { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function FormLogin()  {
  const [user,setUser] = useState({
    usuario:'',
    senha:''
  })

    const usersName = useSelector(state => state.usuarios)
    const dispatch = useDispatch();

    function addUser(){
      dispatch({type: 'ADD_USER', userName: user.usuario, userPass:user.senha})
    }
    return (

      <div className="App" style={{ paddingTop: '10px' }}>
      {usersName.map(users => <li key={usersName._id}>{users}</li>)}
      <input onChange={e => setUser({...user, usuario: e.target.value})}/>
      <input type="password" onChange={e => setUser({...user, senha: e.target.value})}/>
      <Link to='/home'>
      <Button type='button' onClick={addUser}>
        Adicionar
      </Button>
      </Link>
      </div>
    );
  }



