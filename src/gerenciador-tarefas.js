import React from "react";
import './gerenciador-tarefas.css';

import {useRoutes} from 'hookrouter';
import ListarTarefa from './listar/listar-tarefas';
import CadastrarTarefa from './cadastrar/cadastrar-tarefa';
import AtualizarTarefa from './atualizar/atualizar-tarefa';



//objeto
const routes = {
'/'             :     () =><ListarTarefa/>,
'/cadastrar'    :     ()=><CadastrarTarefa/>,
'/atualizar/:id': ({id})  =><AtualizarTarefa id={id}/>,
};


function GerenciadorTarefas() {
  return useRoutes(routes);
}

export default GerenciadorTarefas;
