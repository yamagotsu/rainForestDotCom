import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
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
                  {items.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <img src={item.image_url} alt={item.name} style={{ height: '6rem' }} />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>Quantity ({item.quantity})</td>
                        <td>
                          <button className='btn btn-danger ms-2' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                          <button className='btn btn-danger ms-2' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                          <button className='btn btn-danger ms-2' onClick={() => removeItem(item.id)}>Remove Item</button>
                        </td>
                      </tr>)
                  })}
                </tbody>
              </table>
            </div>
            <div className='col-auto ms-auto'> <h2> Total Price: ${cartTotal} </h2> </div>
            <div className='col-auto'>
              <button className='btn btn-danger m-2' btn btn-danger m-2 onClick={() => emptyCart()}> Clear Cart </button>
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
