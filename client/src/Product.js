

const Product = ({ product }) => {
  return (
    <div className="card" key={product._id}>
      <a href={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} className="medium" />
      </a>
      <div className="card-body">
        <a href={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </a>
        <div className="rating">
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
        </div>
        <div className="price">${product.price}</div>
      </div>
    </div>
  )
}

export default Product;