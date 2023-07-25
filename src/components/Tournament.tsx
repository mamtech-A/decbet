import { useEffect, useState } from 'react';
import axios from 'axios';

function Tournament() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Function to fetch data from the API
      const fetchData = async () => {
        try {
          const response = await axios.get('https://api.the-odds-api.com/v4/sports/?apiKey=5b526bbdc29c7ffc0e5470d5182f85f8'); // Replace with your API endpoint
          setData(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, []); // Empty dependency array means this effect runs only once on component mount and on every page refresh
  
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (!data) {
        return <div>No data available</div>;
      }
    return <div className="Tournament">
        {data.map((item: any) => (
      <div key={item.id}>
        <img
            src={`../assets/Tournamentpng/${item.title}.png`}
            alt={item.title}
            style={{ width: '50px', height: '50px' }} ></img>       
        <a>{item.title}</a>
          <br></br>
      </div>
    ))}
    </div>
}

export default Tournament;