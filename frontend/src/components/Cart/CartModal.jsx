import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { Trash } from 'react-bootstrap-icons';
import { useCart } from 'react-use-cart';

const CartModal = () => {

  const {
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View Cart
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row justify-content-center'>
            <div className='col-12'>
              <h5>Cart ({totalUniqueItems}) total Items: ({totalItems}) </h5>
              <table className='table table-light table-hover m-0'>
                <tbody>
                  {items.map((item) => {
                    return (
                      <tr key={item.id} className="container">
                        <td>
                          <img className="align-self-center" src={item.image_url} alt={item.name} style={{ height: '6rem' }} />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>Quantity ({item.quantity})</td>
                        <td>
                          <button className='btn btn-danger ms-2 w-75 m-1' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                          <button className='btn btn-danger ms-2 w-75 m-1' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                          <button className='btn btn-danger ms-2 w-75 m-1' onClick={() => removeItem(item.id)}><Trash /></button>
                        </td>
                      </tr>)
                  })}
                </tbody>
              </table>
            </div>
            <div className="container d-flex align-items-center justify-content-center">
              <div className='col-auto m-2'>
                <h2>Total Price: ${cartTotal.toFixed(2)}</h2>
              </div>
              <div className='col-auto'>
                <button className='btn btn-danger m-2' btn btn-danger m-2 onClick={() => emptyCart()}> Clear Cart </button>
              </div>
            </div>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartModal;
