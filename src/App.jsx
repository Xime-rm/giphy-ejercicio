import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Card } from './components/card';

const GIPHY_API_KEY = 'IE4dKtDb8sgz9JtVFbJFhoPaYTWn5khZ';
const GIPHY_URL_SEARCH = 'https://api.giphy.com/v1/gifs/search';
const GIPHY_URL_TRENDING = 'https://api.giphy.com/v1/gifs/trending';

function App() {

  const [characters, setCharacters] = useState([]);
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 

  useEffect(() => {
    const fetchTrendingGifs = async () => {
      try {
        const response = await axios.get(GIPHY_URL_TRENDING, {
          params: {
            api_key: GIPHY_API_KEY,
            limit: 50,
          },
        });
        setGifs(response.data.data);
      } catch (error) {
        console.error('Error fetching trending GIFs:', error);
      }
    };

    fetchTrendingGifs();
  }, []); 

  // Search GIFs based on search term
  const handleSearch = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.get(GIPHY_URL_SEARCH, {
        params: {
          api_key: GIPHY_API_KEY,
          q: searchTerm, 
          limit: 20,
        },
      });
      setGifs(response.data.data);
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    }
  };

  return (
    <>
      <div className="card-container">
        {characters.map((character, index) => (
          <Card
            key={index}
            nameCharacter={character.name}
            imgCharacter={character.image}
            statusCharacter={character.status}
            speciesCharacter={character.species}
            genderCharacter={character.gender}
            originCharacter={character.origin}
          />
        ))}
      </div>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar GIFs"
        />
        <button type="submit">Buscar</button>
      </form>

      <div className="gif-container">
        {gifs.map((gif) => (
          <div key={gif.id}>
            <h4>{gif.title}</h4>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
