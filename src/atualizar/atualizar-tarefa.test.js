
import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import AtualizarTarefa from './atualizar-tarefa';

describe('Teste do componente de Atualizar tarefa',() => {
    it('deve renderizar o  componente sem erros',() => {
        const div= document.createElement('div');
        render(<AtualizarTarefa id={1}/>,div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
