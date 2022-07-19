import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import CadastrarTarefa from './cadastrar-tarefa';
import '@testing-library/jest-dom/extend-expect';


describe('Teste do componente de Cadastrar tarefa',() => {
    it('deve renderizar o  componente sem erros',() => {
        const div= document.createElement('div');
        render(<CadastrarTarefa/>,div);
        ReactDOM.unmountComponentAtNode(div);

    });

    it('deve cadastrar uma nova tarefa',()=>{
    const {getByTestId} = render(<CadastrarTarefa />);
    fireEvent.change(
            getByTestId('txt-tarefa'),
                {
                    target:{value:'Testar Componennte'} 
                }
            
            );
    fireEvent.click(getByTestId('btn-cadastrar'));
    expect(getByTestId('modal')).toHaveTextContent('Sucesso');
    expect(getByTestId('modal')).toHaveTextContent('Tarefa adicionada com sucesso');


    });
});
