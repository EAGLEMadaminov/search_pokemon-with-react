import React, { useState } from 'react'
import { Alert, Spinner } from 'react-bootstrap'
import { fetchPokemon } from '../api/getPokemon.js'
import PokemonData from '../components/PokemonData.js'
import Search from '../components/Search.js'

const Home = () => {
  const [pokemon, setPokemon] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] =useState('')
  const getPokemon = async (quary) => {
    if (!quary){
      setErrorMessage('You must enter a Pokemon')
      setError(true)
      return
    } 
    setError(false)
    setLoading(true)
    setTimeout(async () => {
      try {
        const response = await fetchPokemon(quary)
        const result = await response.json()
        setPokemon(result)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
        setError(true)
        setErrorMessage('Pokemon not found')
      }
    }, 1500)
  }
  return (
    <div>
      {error?(<Alert variant='danger'>
        {errorMessage}
      </Alert>) : null}
      <Search getPokemon={getPokemon} />
      {loading ? (
        <div style={{ textAlign: 'center' }}>
          <Spinner animation='border' />
        </div>
      ) : null}
      {!loading && pokemon ? (
        <PokemonData
          sprite={pokemon.sprites.front_default}
          name={pokemon.name}
          abilities={pokemon.abilities}
          stats={pokemon.stats}
          types={pokemon.types}
        />
      ) : null}
    </div>
  )
}

export default Home
