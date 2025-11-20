import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaClock, FaCocktail, FaTshirt, FaWifi } from 'react-icons/fa'
import RoomCard from '../room/RoomCard'

const HotelService = () => {
  return (
    <>
    <Container className='mb-2 '>
        <Header title={"Our Service"}/>
            <Row>
                <h4 className='text-center'>
                    Service at <span className='hotel-color'>lakeSide -</span>
                    <span className='gap-2'>
                        <FaClock/> -24-Hour Front Desk
                    </span>
                </h4>
            </Row>
            <hr/>
            <Row xs={1} md={2} lg={3} className='g-4 mt-2'>
                <Col>
                    <Card>
                        <Card.body>
                            <Card.title className="hotel-color">
                                <FaWifi/> Wifi
                            </Card.title>
                            <Card.Text>Stay connect with high-speed internet access.</Card.Text>
                        </Card.body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.body>
                            <Card.title className="hotel-color">
                                <FaWifi/> Breakfast
                            </Card.title>
                            <Card.Text>Start your day with a delicious  Breakfast buffet</Card.Text>
                        </Card.body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.body>
                            <Card.title className="hotel-color">
                                <FaTshirt/>Laundry
                            </Card.title>
                            <Card.Text>Keep your clouthes clean and fresh with our laundry service.</Card.Text>
                        </Card.body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.body>
                            <Card.title className="hotel-color">
                                <FaCocktail/>Mini-bar
                            </Card.title>
                            <Card.Text>Enjoy a refreshing drink or snack from our in-room mini-bar.</Card.Text>
                        </Card.body>
                    </Card>
                </Col>
            </Row>
    </Container>
    </>
  )
}

export default HotelService