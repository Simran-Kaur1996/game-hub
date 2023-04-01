import { useEffect, useState } from 'react';
import apiClient from '../services/api-clients';

interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get('/games')
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return { games, error };
};
export default useGames;
