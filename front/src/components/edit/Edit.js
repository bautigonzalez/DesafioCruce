import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchProduct, editProduct } from "../../redux/action-creators/product";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom"

export default () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const product = useSelector(store => store.product.product)

    useEffect(() => {
        dispatch(fetchProduct(id));
        if(Object.keys(product).length > 0){
            setImage(product.image)
            setName(product.name)
            setPrice(product.price)
            setDiscount(product.discount)
            setStock(product.stock)
        }
      }, [product._id]);

      const [image, setImage] = useState("");
      const [name, setName] = useState("");
      const [price, setPrice] = useState("");
      const [discount, setDiscount] = useState("");
      const [stock, setStock] = useState("");
  
      const handleimage = e => setImage(e.target.value)
      const handlename = e => setName(e.target.value)
      const handleprice = e => setPrice(e.target.value)
      const handlediscount = e => setDiscount(e.target.value)
      const handlestock = e => setStock(e.target.value)
  
      const handleSubmit = event =>{
          event.preventDefault()
          dispatch(editProduct(product._id, image, name, price, discount, stock))
          .then(()=> history.push('/'))
      }

    return (
        <div id="form" className="container-fluid mt-4">
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <img style={{maxWidth:"70%", marginBottom:"20px"}} src={image}/>
                        <form autoComplete="off" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="imageInput">URL de la imagen</label>
                                <input 
                                value={image} 
                                type="text" 
                                className="form-control" 
                                id="imageInput"
                                onChange={handleimage}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nameInput">Nombre del producto</label>
                                <input 
                                value={name}
                                type="text" 
                                className="form-control" 
                                id="nameInput"
                                onChange={handlename}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="priceInput">Precio</label>
                                <input 
                                value={price}
                                type="text" 
                                className="form-control" 
                                id="priceInput"
                                onChange={handleprice}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="discountInput">Porcentaje de descuento</label>
                                <input 
                                value={discount}
                                type="text" 
                                className="form-control" 
                                id="discountInput"
                                onChange={handlediscount}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="stockInput">Stock</label>
                                <input 
                                value={stock}
                                type="text" 
                                className="form-control" 
                                id="stockInput"
                                onChange={handlestock}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                            <Link to="/catalogo" className="btn btn-light">Volver</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  };