import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Container, Dashboard } from "./styles";

import { Pokemon, Stats } from '../../@types/pokemon'

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  async function fetchApi() {
    const data = await api.get('pokemon?limit=50');
    const namePk = data.data.results.map((pokemon: any) => {
      return api.get('pokemon/' + pokemon.name)
    })

    const pokemonsFetched = (await Promise.all(namePk)).map((data) => data.data) as Pokemon[]
    setPokemons(pokemonsFetched ?? []);
  }

  function renderDashboardBody() {
    const dashboardBody = pokemons.map(pokemon => (
      <Dashboard.Row key={String(pokemon.id)}>
        <Dashboard.Item>
          <img src={pokemon.sprites.other["official-artwork"].front_default} alt="pokemon image" />
        </Dashboard.Item>
        <Dashboard.Item>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Dashboard.Item>
        <Dashboard.Item>{pokemon.stats[Stats.health].base_stat}</Dashboard.Item>
        <Dashboard.Item>{pokemon.stats[Stats.attack].base_stat}</Dashboard.Item>
        <Dashboard.Item>{pokemon.stats[Stats.defense].base_stat}</Dashboard.Item>
        <Dashboard.Item>{pokemon.stats[Stats.specialAttack].base_stat}</Dashboard.Item>
        <Dashboard.Item>{pokemon.stats[Stats.specialDefense].base_stat}</Dashboard.Item>
        <Dashboard.Item>{pokemon.stats[Stats.speed].base_stat}</Dashboard.Item>
      </Dashboard.Row>
    ));

    return dashboardBody;
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <Container>
      <Header />

      <Dashboard.Container>
        <Dashboard.Header>
          <Dashboard.Row>
            <Dashboard.Item>Imagem</Dashboard.Item>
            <Dashboard.Item>Nome</Dashboard.Item>
            <Dashboard.Item>Saúde</Dashboard.Item>
            <Dashboard.Item>Ataque</Dashboard.Item>
            <Dashboard.Item>Defesa</Dashboard.Item>
            <Dashboard.Item>Ataque Especial</Dashboard.Item>
            <Dashboard.Item>Defesa Especial</Dashboard.Item>
            <Dashboard.Item>Velocidade</Dashboard.Item>
          </Dashboard.Row>
        </Dashboard.Header>

        <Dashboard.Body>
          {renderDashboardBody()}
        </Dashboard.Body>
      </Dashboard.Container>
    </Container>
  );
}