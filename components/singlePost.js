function SinglePost({ alt, image, title, description, description2, image1, image2 }) {
  return (
    <div className="container">
        <img alt={alt} src={image} />
      <div className="text">
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image1} alt={alt} />
        <p>{description2}</p>
        <img src={image2} alt={alt} />
      </div>
    </div>
  )
}

export default SinglePost