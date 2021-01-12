import React, { useContext, useEffect } from 'react';
import { adminContext } from '../../context/AdminContext'
import Spinner from '../../components/Spinner'
import { calcSubPrice, calcTotalPrice } from '../../helpers/CalcPrice'
import { Link } from 'react-router-dom';
// import { Link } from '@material-ui/core';

const Cart = () => {
    const { cartData, getCart, changeCountTour, makeOrder, deleteFromCart } = useContext(adminContext)

    useEffect(() => {
        getCart()
    }, [])
    console.log(cartData)

    function handleChangeCount(e, id) {
        changeCountTour(e.target.value, id)
    }
    console.log(cartData)
    return (
        <div style={{ position: "absolute", top: "20%", left: "5%", padding: "5%" }}>
            {cartData.tours ? (
                <div style={{ marginBottom: "15px", borderRadius: "10%" }}>
                    <table className="table">
                        <thead style={{ backgroundColor: "black", color: "#fff", borderRadius: "30%" }}>
                            <tr>
                                <th scope="col">image</th>
                                <th scope="col">description</th>
                                <th scope="col">price</th>
                                <th scope="col">count</th>
                                <th scope="col">subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartData.tours.map(item => (
                                <tr key={item.tour.id}>
                                    {/* {console.log(item.tours.description)} */}
                                    <td><img style={{ width: '50px' }} src={item.tour.image} alt="" /></td>
                                    <td>{item.tour.description}</td>
                                    <td>{item.tour.price}</td>
                                    <td><input onChange={(e) => handleChangeCount(e, item.tour.id)} type="number" value={item.count} /></td>
                                    <td>{calcSubPrice(item)}</td>
                                    <div>
                                        <button className='btn btn-danger' onClick={() => deleteFromCart(item.tour.id)}>Delete</button>
                                    </div>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h4>Total: {calcTotalPrice(cartData.tours)} сом</h4>
                    <Link to="/credit-card">
                        <button className='btn btn-danger'>Check Out</button>
                    </Link>

                </div>

            ) : (
                    <Spinner />
                )}
        </div>
    );
};

export default Cart;