import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../../redux/action-creators/product";
import { Link } from "react-router-dom"

export default () => {
    const dispatch = useDispatch()

    const products = useSelector(store => store.product.products)

    useEffect(() => {
        if(!products.length) dispatch(fetchProducts());
      }, [products.length]);

    return (
        <div id="catalog" className="container-fluid mt-4">
            <div className="card">
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product=>(
                            <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{"$ " + product.price}</td>
                            <td className="text-right">
                                <a className="btn"><i className="fa fa-eye"></i></a>
                                <Link to={`/edit/${product._id}`} className="btn"><i className="fa fa-pencil"></i></Link>
                                <a className="btn" onClick={()=>dispatch(deleteProduct(product._id))}><i className="fa fa-trash"></i></a>
                            </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <Link to="/addproduct"><button className="btn btn-light">Agregar un producto</button></Link>
                </div>
            </div>
        </div>
    );
  };