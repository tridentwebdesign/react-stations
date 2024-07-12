// @ts-check
import { useEffect, useState } from 'react'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState(
    'https://images.dog.ceo/breeds/dingo/n02115641_13605.jpg',
  )

  // useEffectとFetch関数を使って犬種一覧を取得し、用意したstateに格納する。
  //初回マウント後にfetch関数を使って犬種一覧を取得し、stateを更新する。
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        setBreeds(data.message)
      })
  }, [])

  // 画面に犬種一覧を表示する。
  return (
    <div>
      <h2>犬種一覧</h2>
      <ul>
        {Object.keys(breeds).map(breed => (
          <li key={breed}>{breed}</li>
        ))}
      </ul>
    </div>
  )
}

export default DogListContainer
