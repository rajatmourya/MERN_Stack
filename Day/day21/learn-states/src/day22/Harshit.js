import React, { useEffect, useState } from 'react'
import HarshiCard from './HarshiCard';
import Details from './Details';

function Harshit() {

  const harshitAPI = `https://natoursapi-production.up.railway.app/api/v1/tours`;

  const [newsList, setNewsList] = useState([]);
 

  useEffect(() => {
    fetchData();
  }, [ ]);


  async function fetchData() {
    try {
      const response = await fetch(harshitAPI);
      const jsonData = await response.json();      

      setNewsList(jsonData);
      // console.log(data);
      // setHarshitData(jsonData.data.doc)
      console.log(jsonData);
      console.log(newsList);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div>
      <h3>He</h3>
      {
        newsList.map((tour) => {
          // return <HarshiCard key={tour.id} tour={tour} />
        })
      }
      {/* <Details />
      <HarshiCard /> */}
    </div>
  )
}

export default Harshit;