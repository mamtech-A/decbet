import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


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
      <div className='TournamentItem' key={item.id}>
        <img className='TournamentImg'
            src={`./Tournamentpng/${item.title}.png`}
            alt={item.title}></img>       
        <a className='TournamentTitle'> <Link to={`/decbet/matches/${item.key}`}>{item.title}</Link></a>
        <br/>

      </div>
    ))}
    </div>
}

export default Tournament;