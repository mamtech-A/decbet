import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Matches() {
    const { leagueKey } = useParams<{ leagueKey: string }>();
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Function to fetch data from the API
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://api.the-odds-api.com/v4/sports/${leagueKey}/odds/?regions=eu&markets=h2h&apiKey=5b526bbdc29c7ffc0e5470d5182f85f8&bookmakers=onexbet`); // Replace with your API endpoint
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
        <div className='TeamsLogo'>
            <img className='TeamImg'
            src={`../${leagueKey}/${item.home_team}.png`}
            alt={item.home_team}></img>
            <p className='matchTime'>{item.commence_time}</p>
            <img className='TeamImg'
            src={`../${leagueKey}/${item.away_team}.png`}
            alt={item.away_team}></img> 
        </div>
        <div className='TeamsName'>
        <a>{item.home_team}</a>
        <span> vs </span>
        <a>{item.away_team}</a>
        </div>
        <div className='TeamsOdds'>
          {item.bookmakers?.map((bookmaker: any) =>
            bookmaker.markets?.map((market: any) =>
              market.outcomes?.map((outcome: any) => (
                  <p>{outcome.price}</p>
                // <li key={outcome.name}>
                //   {outcome.name}: {outcome.price}
                // </li>
              ))
            )
          )}
        </div>
        <br></br>
      </div>
    ))}
  </div>

}

export default Matches;