import React from 'react'
import {VscTasklist} from 'react-icons/vsc'
import {Card} from 'react-bootstrap'
import {ProgressBar} from 'react-bootstrap'

function TaskCard() {
    return (
        <Card >
        <Card.Header><VscTasklist size={30} style={{ fill: 'orange' }} /></Card.Header>
         <Card.Body>
           <Card.Title>TASKS PROGRESS</Card.Title>
           <Card.Text>
             60%
           </Card.Text>
         </Card.Body>
         <Card.Footer>
              <ProgressBar now={60} />
         </Card.Footer>
       </Card>
    )
}

export default TaskCard
