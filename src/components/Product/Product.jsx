import "./Product.css"

const Product = ({image, title, variedad, tostion, peso}) => {
  return (
    <div className="product-container">
        <div className="product__img-container">
            <img src={image} alt={title} />
        </div>
        <div className="product__info-container">
          <h4 className="product__title">{title}</h4>
          <p>Variedad: {variedad}</p>
          <p>Tostión: {tostion}</p>
          <p>Peso: {peso}</p>
        </div>
    </div>
  )
}

export default Product