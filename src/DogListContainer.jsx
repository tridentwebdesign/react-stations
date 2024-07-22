// DogListContainer.jsx
import React, { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('') // selectedBreedとsetSelectedBreedを定義

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        setBreeds(Object.keys(data.message))
      })
  }, [])

  const handleBreedChange = breed => {
    setSelectedBreed(breed) // 選択した犬種を更新
  }

  return (
    <div>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        onBreedChange={handleBreedChange}
      />
    </div>
  )
}

export default DogListContainer
