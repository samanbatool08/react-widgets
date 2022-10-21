import React, { useEffect, useState } from 'react'; 
import axios from 'axios';

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
  </div>
}

export default Search; 