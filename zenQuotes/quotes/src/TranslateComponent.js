// import React, { useState } from 'react';
// import axios from 'axios';

// const TranslateComponent = () => {
//   const [translatedText, setTranslatedText] = useState('');

//   const handleTranslate = async () => {
//     try {
//       const response = await axios.post(
//         'https://translation.googleapis.com/language/translate/v2',
//         null,
//         {
//           params: {
//             target: 'tr', // 'tr' stands for Turkish language
//             key: 'AIzaSyA3SgGDBvcXZro8QSE-0x4aWirhynkPQFk', // Replace with your Google Translate API key
//           },
//         }
//       );

//       const translated = response.data.data.translations[0].translatedText;
//       setTranslatedText(translated);
//     } catch (error) {
//       console.error('Translation error:', error);
//     }
//   };

//   return (
//     <div>
      
//       <textarea
//         rows="4"
//         cols="50"
//         placeholder="Enter English text..."
//       />
//       <button onClick={handleTranslate}>Translate</button>
     
//       <p>{translatedText}</p>
//     </div>
//   );
// };

// export default TranslateComponent;