import { Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { GameQuery } from '../App';
// import useGames from '../hooks/useGames';
import apiClients from '../services/api-clients';

interface Props {
  gameQuery: GameQuery;
}
interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const GameGrid = ({ gameQuery }: Props) => {
  // const { data, error, isLoading } = useGames(gameQuery);
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClients
      .get<FetchGamesResponse>('/games')
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
