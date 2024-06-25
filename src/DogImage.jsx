// @ts-check

export const DogImage = () => {
  function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        return data.message
      })
  }
  return getDogImage
}

export default DogImage
