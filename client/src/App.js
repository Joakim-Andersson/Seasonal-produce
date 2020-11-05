import './App.css';
import React, { useState, useEffect } from "react";

function App() {

  const [state, setState] = useState([]);
  useEffect(() => {
    fetchBackendAPI()
      .then(res => setState({ data: res.express }))
      .catch(err => console.log(err));
  },[])
  
  const fetchBackendAPI = async () => {
    const response = await fetch('/hello');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  }

  return (
    <div className="App">
    <p>{state.data}</p>
    </div>
  );
}

export default App;
