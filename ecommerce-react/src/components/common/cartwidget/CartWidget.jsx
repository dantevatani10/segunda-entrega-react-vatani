import React from 'react';
import { BsCart3 } from 'react-icons/bs';

const CartWidget = () => {
    return (
        <div className="dropdown">
            <button
                className="btn btn-outline-primary position-relative"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <BsCart3 size={24} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    0
                </span>
            </button>

            <ul className="dropdown-menu dropdown-menu-end p-3" style={{minWidth: '300px'}}>
                <li>
                    <p className="text-center mb-0">El carrito está vacío</p>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                    <div className="d-flex justify-content-between mb-3">
                        <strong>Total:</strong>
                        <strong>$0</strong>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary" disabled>
                            Finalizar Compra
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default CartWidget;