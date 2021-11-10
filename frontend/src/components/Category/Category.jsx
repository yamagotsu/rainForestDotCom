import React from 'react'
import Card from 'react-bootstrap/card';

const Category = () => {
    return (
        <div className='row justify-content-center'>
            <Card border="primary" className="m-4 p-3">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Category