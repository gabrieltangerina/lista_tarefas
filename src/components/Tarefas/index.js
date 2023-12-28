import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Tarefas.css';

export default function Tarefa({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      { tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit onClick={(e) => handleEdit(e, index)} className="buttonEdit" />
            <FaWindowClose onClick={(e) => handleDelete(e, index)} className="buttonDelete" />
          </span>
        </li>
      )) }
    </ul>
  );
}

Tarefa.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
