import { Grid, GridItem, Show } from '@chakra-ui/react';
import { useState } from 'react';
import GameGrid from './components/GameGrid';
import NavBar from './components/NavBar';
import { Genre } from './hooks/useGenres';

export interface GameQuery {
  genre: Genre | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav" "aside main"` // 1024px
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
