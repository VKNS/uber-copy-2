import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTaskDispatcher } from '../actions/actions';

const InnerAddTaskForm = ({ dispatch }) => (
  <div className="input">
    <div className="label">ENTER NEW TASK</div>
    <div className="inp">
      <input id="inp1" type="text" name="newTask" />
    </div>
    <div className="button-box">
      <button
        onClick={() => {
          dispatch(addTaskDispatcher(document.getElementById('inp1').value));
          document.getElementById('inp1').value = '';
        }}
      >
        ADD
      </button>
    </div>
  </div>
);
InnerAddTaskForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const AddTaskForm = connect()(InnerAddTaskForm);

export default AddTaskForm;
