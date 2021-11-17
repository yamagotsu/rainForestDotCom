import React from 'react'
import Card from 'react-bootstrap/Card'
import './categories.css'

const Categories = ({ handleCategoryClick }) => {

    const handleClick = (e) => handleCategoryClick(e.currentTarget.childNodes[0].innerText)

    return (
        <div className="row justify-content-center overflow-hidden text-white">
            <Card
                border="success"
                className="p-0 card-categories men-category my-4 col-10 col-md-8 col-lg-3 shadow category-cards"
                onClick={handleClick} >
                <div className="shadow-categories">
                    <Card.Body className="d-flex justify-content-center align-items-center h-100">
                        <Card.Title>Men</Card.Title>
                    </Card.Body>
                </div>
            </Card>
            <Card
                border="success"
                className="p-0 card-categories women-category mx-md-3 my-4 col-10 col-md-6 col-lg-3 shadow"
                onClick={handleClick} >
                <div className="shadow-categories">
                    <Card.Body className="d-flex justify-content-center align-items-center h-100">
                        <Card.Title>Women</Card.Title>
                    </Card.Body>
                </div>
            </Card>
            <Card
                border="success"
                className="p-0 card-categories kids-category mx-md-3 my-4 col-10 col-md-6 col-lg-3 shadow"
                onClick={handleClick} >
                <div className="shadow-categories">
                    <Card.Body className="d-flex justify-content-center align-items-center h-100">
                        <Card.Title>Kids</Card.Title>
                    </Card.Body>
                </div>
            </Card>
            <Card
                border="success"
                className="p-0 card-categories accessories-category mx-md-3 my-4 col-10 col-md-6 col-lg-3 shadow"
                onClick={handleClick} >
                <div className="shadow-categories">
                    <Card.Body className="d-flex justify-content-center align-items-center h-100">
                        <Card.Title>Accessories</Card.Title>
                    </Card.Body>
                </div>
            </Card>
            <Card
                border="success"
                className="p-0 card-categories jewelry-category mx-md-3 my-4 col-10 col-md-6 col-lg-3 shadow"
                onClick={handleClick} >
                <div className="shadow-categories">
                    <Card.Body className="d-flex justify-content-center align-items-center h-100">
                        <Card.Title>Jewelry</Card.Title>
                    </Card.Body>
                </div>
            </Card>
        </div>
    )
}

export default Categories
