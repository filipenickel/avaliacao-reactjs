import React from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import {useSelector} from 'react-redux'


export default function Menu(){
  const userPassword = useSelector(state => state.userPass)
  console.log(userPassword)
  return(

<Navbar>
    <Nav > <Nav.Link href="#home">Cadastro Pacientes</Nav.Link>
      <Nav.Link href="#features">Listagem Cadastrados</Nav.Link>
      <Nav.Link href="#pricing">Sair</Nav.Link></Nav>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Usuario Logado: <span>{userPassword}</span>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
  )
  }





