import React,{useState,useEffect} from "react";
import "./css/checkout.css";
import { GlobalContext } from "../context";

function Checkout() {
  const {
    state: { cart },
  } = GlobalContext();
  const [total,setTotal] = useState();

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
                <form>
                    <input className="form-control mb-4" type="text" placeholder="Enter full name..." />
                    <input className="form-control mb-4" type="text" placeholder="Enter email..." />
                    <input className="form-control mb-4" type="text" placeholder="Location..." />
                    <textarea className="form-control mb-3" name="" id="" cols="30" rows="4" placeholder="shipping instructions"></textarea>
                    <button className="payment">Proceed to Payment</button>
                </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              {cart.map((item) => (
                <>
                  <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <img className="img-fluid checkout__img" src={item.image} alt={item.name} />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
