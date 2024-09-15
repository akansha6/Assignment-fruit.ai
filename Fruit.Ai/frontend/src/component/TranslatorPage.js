import React, { useState } from 'react';
import '../css/Translator.css'; // Ensure this CSS file is updated

// Import the JSON file
import dictionaryData from '../dictionaries/dictionaries.json';

const TranslatorPage = () => {
  const [inputText, setInputText] = useState(""); // Input text state
  const [translatedText, setTranslatedText] = useState(""); // Translated text state
  const [sourceLanguage, setSourceLanguage] = useState("english"); // Default source language
  const [targetLanguage, setTargetLanguage] = useState("hindi"); // Default target language
  const [error, setError] = useState(null); // For handling errors

  // List of available languages (based on the dictionary data)
  const availableLanguages = ["english", "hindi", "spanish"];

  // Create dictionaries for quick lookup
  const createDictionary = (sourceLang, targetLang) => {
    return dictionaryData.words.reduce((dict, entry) => {
      const key = entry[sourceLang];
      if (key) {
        dict[key.toLowerCase()] = entry[targetLang];
      }
      return dict;
    }, {});
  };

  // Function to handle translation
  const translateText = () => {
    if (sourceLanguage === targetLanguage) {
      setTranslatedText(inputText);
      return;
    }

    // Create dictionaries based on selected languages
    const dictionary = createDictionary(sourceLanguage, targetLanguage);

    const words = inputText.toLowerCase().split(/\s+/); // Split by spaces and handle multiple spaces
    let translation = "";

    for (let word of words) {
      // Find the word in the dictionary
      if (dictionary[word]) {
        // If the word is found, get the translation
        translation += dictionary[word] + " ";
      } else {
        // If the word is not found, retain the original word
        translation += word + " ";
      }
    }

    setTranslatedText(translation.trim());
    setError(null); // Clear any previous errors
  };

  return (
    <div className="translator-page">
      <header className="translator-header">
        <h1 className="translator-title">Multi-Language Translator</h1>
      </header>

      <div className="translator-content">
        <div className="language-selectors">
          <div className="selector-group">
            <label htmlFor="source-language" className="selector-label">From:</label>
            <select 
              id="source-language"
              value={sourceLanguage} 
              onChange={(e) => setSourceLanguage(e.target.value)} 
              className="language-selector"
            >
              {availableLanguages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="selector-group">
            <label htmlFor="target-language" className="selector-label">To:</label>
            <select 
              id="target-language"
              value={targetLanguage} 
              onChange={(e) => setTargetLanguage(e.target.value)} 
              className="language-selector"
            >
              {availableLanguages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <textarea
          rows="6"
          placeholder="Enter text to translate..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="translator-input"
        />

        <button onClick={translateText} className="translate-button">
          Translate
        </button>

        {error && <p className="error-message">{error}</p>}

        {translatedText && (
          <div className="translated-output">
            <h3 className="output-title">Translated Text:</h3>
            <p>{translatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TranslatorPage;
