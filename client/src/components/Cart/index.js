<<<<<<< HEAD
import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);
=======
import React, { useEffect } from "react";
import { idbPromise } from "../../utils/helpers"
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { useStoreContext } from "../../utils/GlobalState";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import "./style.css";

const Cart = () => {
  const [state, dispatch] = useStoreContext();
>>>>>>> aa9555174f0cb4a525242493edcdb44bcc81bab9

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
<<<<<<< HEAD
    }
=======
    };
>>>>>>> aa9555174f0cb4a525242493edcdb44bcc81bab9

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
<<<<<<< HEAD
    state.cart.forEach((item) => {
=======
    state.cart.forEach(item => {
>>>>>>> aa9555174f0cb4a525242493edcdb44bcc81bab9
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

<<<<<<< HEAD
  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span role="img" aria-label="trash">
          🛒
        </span>
=======
  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span
          role="img"
          aria-label="trash">🛒</span>
>>>>>>> aa9555174f0cb4a525242493edcdb44bcc81bab9
      </div>
    );
  }

  return (
    <div className="cart">
<<<<<<< HEAD
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
=======
      <div className="close" onClick={toggleCart}>[close]</div>
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map(item => (
>>>>>>> aa9555174f0cb4a525242493edcdb44bcc81bab9
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>

<<<<<<< HEAD
            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
=======
            {
              Auth.loggedIn() ?
                <button>
                  Checkout
              </button>
                :
                <span>(log in to check out)</span>
            }
          </div>
        </div>
      ) : (
          <h3>
            <span role="img" aria-label="shocked">
              😱
          </span>
          You haven't added anything to your cart yet!
          </h3>
        )}
>>>>>>> aa9555174f0cb4a525242493edcdb44bcc81bab9
    </div>
  );
};

export default Cart;
