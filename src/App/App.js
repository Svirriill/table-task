import React from 'react';
import Table from '../Table/Table';
import './App.css';
import data from '../data/array.json';

function App() {
  const [stateAddButton, setStateAddButton] = React.useState(false);
  const [theArray, setTheArray] = React.useState(data);

  const handleChangeArray = (data) => {
  const newRows = [...theArray, { id: data.id, firstName: data.firstName, lastName: data.lastName, email: data.email, phone: data.phone }];
  setTheArray(newRows);
    }

  function handleAddInput() {
    setStateAddButton(true);
  }

  return (
    <div className="app">
      <Table
        products={theArray}
        data={theArray}
        clickOnAddButton={handleAddInput}
        newItem={handleChangeArray}
        isOpen={stateAddButton}
      />
    </div>
  );
}

export default App;