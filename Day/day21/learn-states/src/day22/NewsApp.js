import React, {useRef, useEffect, useState } from "react";
import News from "./News";
import './NewsApp.css';

function NewsApp() {
  const apiKey = "ee89ffab3d2a4388b403fc96e88cebb3";
  
  const [newsList, setNewsList] = useState([]);
  const [query, setQuery] = useState('tesla');
  
  const apiUrl =`https://newsapi.org/v2/everything?q=${query}&from=2024-05-02&sortBy=publishedAt&apiKey=ee89ffab3d2a4388b403fc96e88cebb3`;

  const queryInputRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, [query]);

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();

      setNewsList(jsonData.articles);
      console.log(newsList.articles);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const queryValue = queryInputRef.current.value;
    console.log(queryValue);
    setQuery(queryValue);
  }

  function handleSubmitSagestion(event){
    console.log(event.target.value);
    setQuery(event.target.value);
  }

  return (
    <div className="news-app">
      
      <h1 style={{fontFamily:'monospace', fontSize:'3rem', textAlign:'left', marginBottom:'20px'}}>News Daily</h1>

      <form onSubmit={handleSubmit}>
        <input className="query-input" type="text" ref={queryInputRef} />
        <input className="btn-submit" onClick={handleSubmit} type="submit" value='Submit' />
      </form><br />

      <div className="div-sagestion">
        <input className="btn-sagestion" onClick={handleSubmitSagestion} type="submit" value='India' />
        <input className="btn-sagestion" onClick={handleSubmitSagestion} type="submit" value='Fifa' />
        <input className="btn-sagestion" onClick={handleSubmitSagestion} type="submit" value='BitCoin' />
        <input className="btn-sagestion" onClick={handleSubmitSagestion} type="submit" value='Google' />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,48%)",
          justifyContent: "space-between",
          rowGap: "20px",
        }}
      >
        {newsList.map((news) => {
          // return <p>{news.title}</p>
          return <News key={news.url} news={news} />;
        })}
      </div>
    </div>
  );
}

export default NewsApp;
