import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css'
import Table from './component/table';


function App() {
  const [dataTable, setDataTable] = React.useState([])

  useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res => setDataTable(res.data))
    .catch(err => console.log(err))
    
  }, [])

  const column = [
    {heading: 'Nome', value: 'name'},
    {heading: 'Email', value: 'email'},
    {heading: 'Telefone', value: 'phone'}
  ]

  return (
    <div className="App">
      <h1>Hello, tabela dinamica</h1>
      <Table data={dataTable} column={column}/>
    </div>
  );
}

export default App;
