import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ text, language }) => {
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    const doTranslation = async () => {
      const resp = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: text, 
          target: language.value, 
          key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
        }
      })
      setTranslated(resp.data.data.translations[0].translatedText)
    }

    if (text) {
      const timeOudId = setTimeout(() => {
        doTranslation();
      }, 5000)
  
      return () => {
        clearTimeout(timeOudId)
      }
    }
  }, [language, text])

  return (
  <div className="ui header">
    {translated}
  </div>
  )
}

export default Convert; 