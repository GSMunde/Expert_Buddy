import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ResourceList from '../Components/Resources/ResourceList';

function Resources() {
    const [resources, setResources] = useState([]);

  const apiURL = "https://expert-buddy-api.vercel.app/Resource";

    const fetchData = async () => {
        const response = await axios.get(apiURL)

        setResources(response.data) 
        console.log(response.data)
    };

    useEffect(() => {
        fetchData();
    },[]);

  return (
    <div className="p-4">
        <ResourceList resources={resources}/>
    </div>
  );
}

export default Resources;