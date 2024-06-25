// @ts-check
import { DogImage } from './DogImage'
console.log(DogImage())

import { useState } from 'react'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/dingo/n02115641_13605.jpg',
  )

  function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogUrl(data.message)
      })
  }

  return (
    <>
      <button onClick={getDogImage}>画像更新</button>
      <p>犬の画像を表示するサイトです</p>
      <img src={dogUrl} alt="犬の画像" />
    </>
  )
}

export default Description
