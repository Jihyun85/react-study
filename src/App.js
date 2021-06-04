import React, { useState, useEffect } from "react";
import Axios from "axios";
import axios from "axios";

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return { value, onChange };
}

function useFetch(url) {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const callUrl = async () => {
    try {
      const data = await axios.get(url);
      setPayload(data);
    } catch (error) {
      setError("I can't find anything about this url");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    callUrl();
  }, []);

  return { payload, loading, error };
}

const App = () => {
  const name = useInput("");
  const { payload, loading, error } = useFetch(
    "https://api.thecatapi.com/v1/images/search"
  );
  console.log(payload);
  return (
    <div className="App">
      <h1>Use Hooks</h1>
      <br />
      <input {...name} placeholder="what's your name" />
      <br />
      {loading && <span>Loading your cat</span>}
      {!loading && error && <span>{error}</span>}
      {!loading && payload && <img src={payload.data[0].url} width="600px" />}
    </div>
  );
};

export default App;
