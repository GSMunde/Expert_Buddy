import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NewsFeed from '../Components/HomePageFeed.jsx/NewsFeed';

function HomePage() {
    const [news, setNews] = useState([]);

  const apiURL = "https://expert-buddy-api.vercel.app/NewsFeed";

    const fetchData = async () => {
        const response = await axios.get(apiURL)

        setNews(response.data) 
        console.log(response.data)
    };

    useEffect(() => {
        fetchData();
    },[]);

  return (
    <div className="p-4">
        <NewsFeed news={news}/>
    </div>
  );
}

export default HomePage;