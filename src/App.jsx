import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); // Сторінка для пагінації
  const [totalPages, setTotalPages] = useState(0); 

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
          query: 'nature',
          page: page,
          per_page: 10,
          client_id: '75St0Bx2Z_Z7IEe3NFVVhkEkSHnvjnpxHHDRTpWyR9M'
        },
      });
      setImages((prevImages) => [...prevImages, ...response.data.results]); 
      setTotalPages(response.data.total_pages); 
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchImages(); 
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1); 
  };

  return (
    <div>
      <ImageGallery images={images} />
      {loading && <Loader />} 
      {page < totalPages && !loading && <LoadMoreBtn onClick={loadMore} />} 
    </div>
  );
};

export default App;


