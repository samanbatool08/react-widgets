import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import { render } from '@testing-library/react';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);

 
  useEffect(() => {
    const search = async () => {
      const response = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: term
        }
      })
      setResults(response.data.query.search)
    }
    search();
  }, [term])

  const renderedResults = results.map(result => {
    return (
      <div>
        <h2>{result.title}</h2>
        <h2>{result.snippet}</h2>
      </div>
    )
  })

  return <div>
    <div className="ui form">
      <div className="field">
        <label>Enter Search Term</label>
        <input 
        value={term}
        onChange={(e => setTerm(e.target.value))}
        className="input"
        />
      </div>
    </div>
    {renderedResults}
  </div>
}

export default Search; 