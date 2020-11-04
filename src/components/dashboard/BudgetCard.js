import React from 'react'
import {Card} from 'react-bootstrap'
import {FaBalanceScaleRight} from 'react-icons/fa'
import {AiOutlineArrowDown} from 'react-icons/ai'

function Budget() {
    return (
        
        <Card >
       <Card.Header><FaBalanceScaleRight size={30} style={{ fill: 'red' }} /></Card.Header>
        <Card.Body>
          <Card.Title>BUDGET</Card.Title>
          <Card.Text>
            RM 30000
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small style={{ color: 'red' }}>< AiOutlineArrowDown/>15 %</small>
          <small className="text-muted"> Since Last Month</small>
        </Card.Footer>
      </Card>
    )
}

export default Budget
