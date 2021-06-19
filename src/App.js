import { useRef, useEffect } from 'react';
import store from './store';
import { INCREMENT, DECREMENT } from './actions';
import { ADD_NAME } from './actions2';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
 
function App() {
 
  const counter = useSelector((state) => state.reducer.count)
  const persons = useSelector((state) => state.reducer2.personNameList);

  return (
    <>
      <button
        onClick={() =>
          store.dispatch({ type: ADD_NAME, payload: { name: "JANPOLE" } })
        }
      >
        Name
      </button>

      <button onClick={() => store.dispatch({ type: INCREMENT, payload: 1 })}>
        Increment
      </button>

      <button onClick={() => store.dispatch({ type: DECREMENT, payload: 2 })}>
        Decrement
      </button>
      {counter}

      <table>
        <tr>
          <th>Name</th>
        </tr>

        {persons.map((person, index) => (
          <tr data-index={index}>
            <td>{person.name}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default App;
