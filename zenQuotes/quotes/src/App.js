import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [translatedQuote, setTranslatedQuote] = useState("");


  useEffect(() => {
    fetchQuotes()
      .then((data) => {
        setQuote(data[0].quote);
        setAuthor(data[0].author);
      })

      .catch((error) => {
        console.error("Error fetching quotes:", error);
      });
  }, []);

  const fetchQuotes = async () => {
    const apiKey = "dyGmEBBgzVfE8rQYjYym3w==Qf1PCA8dQBZY8tnV";
    try {
      const response = await axios.get(
        "https://api.api-ninjas.com/v1/quotes?equality=",
        {
          headers: {
            "X-Api-Key": apiKey,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching quotes:", error);
      throw error;
    }
  };


  async function getQuote() {
    try {
      const response = await fetch("https://api.api-ninjas.com/v1/quotes?equality=");
      const data = await response.json();
      const quote = data.quote;
     
      return quote;

    
    } catch (error) {
      console.error("alıntı yapılamadı", error);
      return null;
    }
   
  }

  

  
  async function translateToTurkish(text) {
   
    try {
      const response = await fetch(
        "https://translation.googleapis.com/language/translate/v2?key=${'AIzaSyA3SgGDBvcXZro8QSE-0x4aWirhynkPQFk'}",
        {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            q: text,
            source: "en",
            target: "tr",
          }),
        }
      );

      const data = await response.json();
      const translatedText = data.data.translations[0].translatedText;

      return translatedText;
    } catch (error) {
      console.error("Çeviri yapılamadı:", error);
      return null;
    }
  }


  async function getAndTranslateQuote() {
    try {
      const quote = await getQuote();

      if (quote) {
        console.log("Orijinal alıntı:", quote);

        const translatedQuote = await translateToTurkish(quote);

        if (translatedQuote) {
          console.log("Türkçe çeviri:", translatedQuote);
        } else {
          console.log("Çeviri yapılamadı:");
        }
      } else {
        console.log("alıntı bulunamadı.");
      }
    } catch (error) {
      console.error("bir hata oluştu:", error);
    }
  }

  return (
    <div className="relative bg-purple-400">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/image/background.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen">
  
          <div className="max-w-full mx-auto p-8 bg-purple-600 rounded-lg text-center ">
            <h2 className="text-4xl font-bold mb-8 text-zinc-100">
              Daily Dose of Equality
            </h2>
            <div className="max-w-lg mx-auto p-8 bg-purple-600 text-zinc-100 rounded-lg text-center">
              <h4 className="text-lg text-zinc-100">{quote}</h4>
              <h3 className="text-xl font-bold mt-4 text-zinc-100">{author}</h3>
            </div>
          </div>
        </div>
      </div>

  );
}

export default App;
