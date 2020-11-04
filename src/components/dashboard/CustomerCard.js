import React from 'react'
import {Card} from 'react-bootstrap'
import {AiOutlineArrowUp} from 'react-icons/ai'
import {IoIosPeople} from 'react-icons/io'

function CustomerCard() {
    return (
        <Card >
        <Card.Header><IoIosPeople size={30} style={{ fill: 'green' }} /></Card.Header>
         <Card.Body>
           <Card.Title>TOTAL CUSTOMERS</Card.Title>
           <Card.Text>
             24211
           </Card.Text>
         </Card.Body>
         <Card.Footer>
           <small style={{ color: 'green' }}>< AiOutlineArrowUp/>30 %</small>
           <small className="text-muted"> Since Last Month</small>
         </Card.Footer>
       </Card>
    )
}

export default CustomerCard
