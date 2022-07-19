// import { render, screen } from '@testing-library/react';
// import GerenciadorTarefas from './gerenciador-tarefas';

// test('deve renderizar sem erros', () => {
//   render(<GerenciadorTarefas />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
//import {useRoutes} from 'hookrouter';
 import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import GerenciadorTarefas from './gerenciador-tarefas';

it('deve renderizar sem erros', () => {
  const div= document.createElement('div');
  render(<GerenciadorTarefas />, div);
  ReactDOM.unmountComponentAtNode(div);

});
