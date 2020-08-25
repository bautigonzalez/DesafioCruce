import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/action-creators/product";

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
                            <tr>
                            <td>{product.name}</td>
                            <td>{"$ " + product.price}</td>
                            <td className="text-right">
                                <a href="form.html" class="btn"><i class="fa fa-eye"></i></a>
                                <a href="form.html" class="btn"><i class="fa fa-pencil"></i></a>
                                <a href="form.html" class="btn"><i class="fa fa-trash"></i></a>
                            </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
  };