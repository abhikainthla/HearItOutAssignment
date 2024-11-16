import React, { useEffect, useState } from 'react';

const Section2 = () => {
  const [selectedValue, setSelectedValue] = useState('cars');
  const [fetchedData, setFetchedData] = useState([]);
  const options = ['Cars', 'Action', 'Love', 'Time'];
  const color = ['#2B7397', '#32959D', '#9C7777'];


  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`https://api.tvmaze.com/search/shows?q=${selectedValue}`);
        const data = await res.json();
        setFetchedData(data.slice(0, 3)); 
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [selectedValue,[]]);

  const stripHtmlTags = (text) => {
    if (!text) return 'No summary available.';
    const plainText = text.replace(/<\/?[^>]+(>|$)/g, ''); 
    const words = plainText.split(' '); 
    return words.length > 80
      ? `${words.slice(0, 80).join(' ')}...` 
      : plainText; 
  };

  return (
    <div className="section2-container">
      <select
        className="section2-select"
      >
        {options.map((item, index) => (
          <option key={index} value={item} style={{ fontSize: '20.37px' }}>
            {item}
          </option>
        ))}
      </select>
      <div className="section2-cards-container">
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            justifyContent: 'center',
          }}
        >
          {fetchedData.map((item, index) => (
            <div key={index} style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
              <h4 style={{ color: '#043953' }}>{item.show?.type}</h4>
              <div
                style={{
                  width: '277.56px',
                  border: '1px solid #32959D',
                  borderRadius: '10px 10px 0 0',
                  padding: '10px',
                  height: '530px',
                }}
              >
                <p style={{ color: '#043953', fontSize: '20px' }}>{item.show?.name}</p>
                <p>{stripHtmlTags(item.show?.summary)}</p>
              </div>
              <div
                style={{
                  width: '277.56px',
                  height: '49px',
                  border: '1px solid #32959D',
                  borderRadius: '0px 0px 10px 10px',
                  backgroundColor: color[index % color.length],
                }}
              >
                <a style={{ color:'#ffffff', textDecoration:'none' }} href={item.show?.url}>Click</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
