import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import ListarTarefas from './listar-tarefas';

describe('Teste do componente de listagem de tarefas',() => {
    it('deve renderizar o  componente sem erros',() => {
        const div= document.createElement('div');
        render(<ListarTarefas/>,div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
