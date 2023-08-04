import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
query GetPokemon($offset: Int, $take: Int) {
  getAllPokemon(offset: $offset, take: $take) {
    species
    num
    key
    color
    gender {
      male
    }
    evolutions {
      species
    }
    abilities {
      first {
        name
        desc
        key
      }
    }
    types {
      name
    }
    height
    backSprite
    baseForme
    baseSpecies
    catchRate {
      percentageWithOrdinaryPokeballAtFullHealth
      base
    }
  }
}
`