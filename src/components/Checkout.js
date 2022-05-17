import React, { useState, useEffect } from "react";
import "./css/checkout.css";
import { GlobalContext } from "../context";
import { Link } from 'react-router-dom'

function Checkout() {
  const {
    state: { cart },
  } = GlobalContext();
  const [total, setTotal] = useState();
  const [fullName,setFullName] = useState('');
  const [email,setEmail] = useState('')
  const [location,setLocation] = useState('')
  const [alert,setAlert] = useState('')

    const handleShipping = (e) =>{
      e.preventDefault()
      if(fullName && email && location){
          setAlert('Your details are saved successfully')
          fullName('')
          email('')
          location('')
      }
    }

    const disableButton = !fullName || !email || !location

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  return (
    <div className="app__checkout">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4">
            <h5>Shipping Details</h5>
              <form className="needs-validation">
                <input
                  onChange={(e) => setFullName(e.target.value)}
                  className="form-control mb-4"
                  type="text"
                  placeholder="Enter full name..."
                  required
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control mb-4"
                  type="text"
                  placeholder="Enter email..."
                  required
                />
                <input
                  onChange={(e) => setLocation(e.target.value)}
                  className="form-control mb-4"
                  type="text"
                  placeholder="Location..."
                  required
                />
                <textarea
                  className="form-control mb-3"
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                  placeholder="shipping instructions"
                  required
                ></textarea>
                <button disabled={disableButton} onClick={handleShipping} className="payment">Submit</button>
              </form>

            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              {cart.map((item) => (
                <>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <img
                        className="img-fluid checkout__img"
                        src={item.image}
                        alt={item.name}
                      />
                      <br />
                      <small>({item.qty}) pieces</small>
                    </div>
                    <p>{item.name}</p>
                    <p>$ {item.price}</p>
                  </div>
                  <hr />
                </>
              ))}
              <div className="d-flex justify-content-between align-items-center">
                <h5>Sub Total</h5>
                <h5>$ {total}</h5>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="text-muted">Shipping fee</h6>
                <h6 className="text-muted">$ 19</h6>
              </div>
            </div>
            <Link to='/payment' className="payment mt-4 text-decoration-none">Proceed to Payment</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
