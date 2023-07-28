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
          const response = await axios.get('https://api.the-odds-api.com/v4/sports/?apiKey=5eda489e445dbcc8db4ff15f552f583e'); // Replace with your API endpoint
          setData(response.data.filter((item: any) =>item.group ==='Soccer'));
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
            src={`/decbet/Tournamentpng/${item.title}.png`}
            alt={item.title}></img>       
        <a className='TournamentTitle'> <Link to={`/decbet/matches/${item.key}`}>{item.title}</Link></a>
        <br/>

      </div>
    ))}
    </div>
}

export default Tournament;