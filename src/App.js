import React from 'react';
import logo from './logo.svg';
import './App.css';

import MaterialTable from 'material-table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ###Learn React A B
        </a>
      </header>
      <div style={{ maxWidth: '100%' }}>
              <MaterialTable
                columns={[
                  { title: 'Adı', field: 'name' },
                  { title: 'Soyadı', field: 'surname' },
                  { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
                  { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
                ]}
                data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
                title="Demo Title"
              />
            </div>
    </div>

  );
}

export default App;
