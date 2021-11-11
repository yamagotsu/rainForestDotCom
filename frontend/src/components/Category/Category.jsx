import React from 'react'
import Card from 'react-bootstrap/card';

const Category = ({ data }) => {
    if (data.length === 0) {
        console.log('Loading...');
    }

    console.log(data);

    return (
        <div className='row justify-content-center'>
            {data ? data.map((item) =>
                <Card border="primary" className="m-4 p-3" key={item.id}>
                    <Card.Img variant="top" src={item.image_url} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            ) : null}
        </div>
    )
}

export default Category