
import './App.css';
import React, { useState, useEffect } from'react';
import axios from 'axios';
import TranslateComponent from './TranslateComponent';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
 

  useEffect(() => {
    fetchQuotes().then(data => {
     
      setQuote(data[0].quote);
      setAuthor(data[0].author);
   
    })
    .catch(error => {
 
    });
  }, [])

  const fetchQuotes= async () => {
    const apiKey = 'dyGmEBBgzVfE8rQYjYym3w==Qf1PCA8dQBZY8tnV';
   
   
    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/quotes?equality=', {
        headers: {
          'X-Api-Key': apiKey
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching quotes:', error);
      throw error;
    }
  }
 

  return (
    <div className="relative bg-purple-400">
  <div className="absolute inset-0 bg-purple-100" style={{ mixBlendMode: 'multiply', backgroundImage: 'url("/image/background.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
  <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-white">
    <h2 className="text-4xl font-bold mb-8">Daily Dose of Equality</h2>
    <div className="max-w-lg mx-auto p-8 bg-white rounded-lg text-center">
      {/* <TranslateComponent /> */}
      <h4 className="text-lg text-purple-600">{quote}</h4>
      <h3 className="text-xl font-bold mt-4 text-purple-600">{author}</h3>
    </div>
  </div>
</div>
  );
}

export default App;
