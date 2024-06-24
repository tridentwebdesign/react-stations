// DO NOT DELETE

import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div>
      <header>
        <h1>Dogアプリ</h1>
      </header>
      <main>
        <p>犬の画像を表示するサイトです</p>
        <img
          src="https://images.dog.ceo/breeds/dingo/n02115641_13605.jpg"
          alt="犬の画像"
        />
      </main>
    </div>
  )
}
