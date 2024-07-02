export const DogImage = ({ imageUrl }) => {
  return (
    <div className="dog-image-container">
      <img src={imageUrl} alt="Random dog" />
    </div>
  )
}
