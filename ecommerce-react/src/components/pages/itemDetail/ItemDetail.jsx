import { useState, useEffect } from 'react';
import { product } from '../../../products'; // Asumiendo que tienes un array de productos

const ItemDetail = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Buscar el producto por ID
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  // Si no se encuentra el producto
  if (!product) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning" role="alert">
          Producto no encontrado
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row">
        {/* Columna de Imagen */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <img 
              src={product.img || "/api/placeholder/600/400"} 
              className="card-img-top img-fluid"
              alt={product.title} 
            />
          </div>
        </div>

        {/* Columna de Información */}
        <div className="col-md-6">
          <div className="card p-4">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#" className="text-decoration-none">Inicio</a></li>
                <li className="breadcrumb-item"><a href="#" className="text-decoration-none">{product.category}</a></li>
                <li className="breadcrumb-item active" aria-current="page">{product.title}</li>
              </ol>
            </nav>

            <span className="badge bg-secondary mb-2">{product.marca}</span>
            <h2 className="fw-bold mb-3">{product.title}</h2>
            <p className="lead mb-4">{product.description}</p>

            <div className="mb-4">
              <h3 className="display-6 mb-3">${product.price}</h3>
              <div className="d-flex align-items-center gap-2 mb-3">
                <i className="bi bi-check-circle-fill text-success"></i>
                <span className={`${product.stock > 0 ? 'text-success' : 'text-danger'}`}>
                  {product.stock > 0 ? `Stock disponible: ${product.stock} unidades` : 'Sin stock'}
                </span>
              </div>
            </div>

            {/* Selector de Cantidad */}
            <div className="mb-4">
              <label className="form-label">Cantidad</label>
              <select 
                className="form-select w-auto"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              >
                {[...Array(Math.min(product.stock, 5))].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            {/* Botones de Acción */}
            <div className="d-grid gap-2">
              <button 
                className="btn btn-primary btn-lg"
                disabled={product.stock === 0}
                onClick={() => {
                  // Aquí puedes agregar la lógica para el carrito
                  console.log(`Agregando ${quantity} unidad(es) del producto ${product.id} al carrito`);
                }}
              >
                {product.stock === 0 ? 'Sin Stock' : 'Agregar al Carrito'}
              </button>
              <button 
                className="btn btn-outline-secondary"
                onClick={() => {
                  // Aquí puedes agregar la lógica para favoritos
                  console.log(`Agregando producto ${product.id} a favoritos`);
                }}
              >
                Agregar a Favoritos
              </button>
            </div>

            {/* Características adicionales */}
            <div className="mt-4">
              <h4>Características destacadas:</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <i className="bi bi-camera-fill me-2"></i>
                  Cámara de alta resolución
                </li>
                <li className="list-group-item">
                  <i className="bi bi-cpu-fill me-2"></i>
                  Chip Tensor de última generación
                </li>
                <li className="list-group-item">
                  <i className="bi bi-battery-full me-2"></i>
                  Batería de larga duración
                </li>
              </ul>
            </div>

            {/* Información adicional */}
            <div className="mt-4 border-top pt-4">
              <div className="row g-3">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-truck me-2"></i>
                    <span>Envío gratuito</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-shield-check me-2"></i>
                    <span>Garantía oficial</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-box-seam me-2"></i>
                    <span>Devolución gratis</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-credit-card me-2"></i>
                    <span>Pago seguro</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;