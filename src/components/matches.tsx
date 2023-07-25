import { useEffect, useState } from 'react';
import axios from 'axios';

function Matches() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Function to fetch data from the API
      const fetchData = async () => {
        try {
          const response = await axios.get('https://api.the-odds-api.com/v4/sports/soccer_spain_la_liga/odds/?regions=eu&markets=h2h&apiKey=5b526bbdc29c7ffc0e5470d5182f85f8&bookmakers=onexbet'); // Replace with your API endpoint
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

    return <div>
    {data.map((item: any) => (
      <div key={item.id}>
        <a>{item.home_team}</a>
        <span> vs </span>
        <a>{item.away_team}</a>
        <ul>
          {item.bookmakers?.map((bookmaker: any) =>
            bookmaker.markets?.map((market: any) =>
              market.outcomes?.map((outcome: any) => (
                <li key={outcome.name}>
                  {outcome.name}: {outcome.price}
                </li>
              ))
            )
          )}
        </ul>
        <br></br>
      </div>
    ))}
  </div>

}

export default Matches;