import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
    return (
      <div className="card h-100 shadow-sm">
        <img
          src={product.img}
          className="card-img-top"
          alt={product.title}
        />
        <div className="card-body d-flex flex-column">
          <span className="text-muted text-uppercase small">{product.marca}</span>
          <h5 className="card-title mt-2">{product.title}</h5>
          <p className="card-text flex-grow-1">{product.description}</p>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <h4 className="mb-0">${product.price}</h4>
            <Link to={`/itemDetail/${product.id}`} className="btn btn-primary" >Ver más</Link>
          </div>
        </div>
      </div>
    );
  };

export default ProductCard;