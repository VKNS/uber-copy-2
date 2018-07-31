import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { taskDoneDispatcher, deleteTaskDispatcher } from '../actions/actions';
const InnerDisplayBox = ({ store, dispatch }) => (
  <div className="display-box">
    <ul>
      {store.map(obj => (
        <li key={obj.id} className={obj.done ? 'done' : 'not-done'}>
          <div
            className="text"
            role="complementary"
            onClick={() => dispatch(taskDoneDispatcher(obj.id))}
          >
            TASK: {obj.text}
          </div>

          <div className="button-box">
            <button onClick={() => dispatch(deleteTaskDispatcher(obj.id))}>
              DEL
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
InnerDisplayBox.propTypes = {
  store: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const DisplayBoxState = state => ({ store: state });

const DisplayBox = connect(
  DisplayBoxState,
  dispatch => ({ dispatch }),
)(InnerDisplayBox);

export default DisplayBox;
