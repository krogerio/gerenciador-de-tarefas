
// import Jumbotron    from 'react-bootstrap/Jumbotron';
import Button       from 'react-bootstrap/Button';
import Form         from 'react-bootstrap/Form';
import Modal        from 'react-bootstrap/Modal';


//import {Button,Form,Jumbotron,Modal} from 'react-bootstrap';
import React, {useState} from 'react';

import {navigate,A} from 'hookrouter';

import Tarefa from '../models/tarefa.model';

function CadastrarTarefa(){

const [tarefa,setTarefa] = useState('');
const [formValidado,setFormValidado] = useState(false);
const [exibirModal,setExibirModal] = useState(false);

function cadastrar(event){
    event.preventDefault();
    setFormValidado(true);
    if (event.currentTarget.checkValidity() ===true){
        //obtem as tarefas
        const tarefasDb = localStorage['tarefas'];
        
        const tarefas = tarefasDb ? JSON.parse(tarefasDb):[];

        // persiste a tarefa
        tarefas.push(new Tarefa( new Date().getTime(), tarefa, false));
        localStorage['tarefas'] = JSON.stringify(tarefas);
        setExibirModal(true);
    }


}

function handleTxtTarefa(event) {
    setTarefa(event.target.value);

}

function handleFecharModal(){
    console.log('nao navega')
    navigate('/');
}

    return (
<div>
    <div className="container-fluid bg-light text-dark p-5">
        <div className="container bg-light p-5">
            <h1 className="display-4 fw-bold">Cadastrar</h1>
           
             {/*  <p>Go to My Website</p>
             <a href="#" class="btn btn-primary">link</a>
                */}
            <h3 className="text-center"> Cadastrar</h3>
            <div className="Jumbotron">
            

                <Form
                validate={formValidado.toString()}
                noValidate
                onSubmit ={cadastrar}   >
                    <Form.Group>
                        <Form.Label>Tarefa  </Form.Label>
                        <Form.Control 
                            type="Text"
                            placeholder= "Digite a tarefa"
                            minLength="5"
                            maxLength="100"
                            required 
                            value={tarefa}
                            onChange={handleTxtTarefa} 
                            data-testid="txt-tarefa"
                        />
                        
                        <Form.Control.Feedback type="invalid">
                            A Tarefa deve conter ao menos 5 caracteres
                        </Form.Control.Feedback>
                    </Form.Group>
                    <hr></hr>
                    <Form.Group className="text-center">
                    <Button
                        variant="success"
                        type="submit"
                        data-testid="btn-cadastrar"
                        > 
                        Gravar
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <A href="/" className="btn btn-light">Voltar</A>
                    </Form.Group>
                </Form>

                <Modal show={exibirModal} onHide={handleFecharModal} data-testid="modal">
                <Modal.Header closeButton>
                <Modal.Title>Sucesso</Modal.Title>
                
                </Modal.Header>
                <Modal.Body>
                    Tarefa adicionada com sucesso
                </Modal.Body>
                <Modal.Footer>
                <Button
                    variant="success"
                    onClick={handleFecharModal}
                >
                    Continuar  
                </Button>
                </Modal.Footer>
                </Modal>
            </div>
        </div>
    </div>
</div>


    );
}

export default CadastrarTarefa;