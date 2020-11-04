import React from 'react'
import {Card} from 'react-bootstrap'
import {FaMoneyCheckAlt} from 'react-icons/fa'

function ProfitCard() {
    return (
        <Card >
        <Card.Header><FaMoneyCheckAlt size={30} style={{ fill: 'blue' }} /></Card.Header>
         <Card.Body>
           <Card.Title>PROFIT</Card.Title>
           <Card.Text>
             RM 37859
           </Card.Text>
         </Card.Body>
         <Card.Footer>
             <small className="text-muted"> Since Last Month</small>
         </Card.Footer>
       </Card>
    )
}

export default ProfitCard
