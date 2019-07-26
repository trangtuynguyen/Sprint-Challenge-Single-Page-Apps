import React from 'react'
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css'
import {Card, Icon, List } from 'semantic-ui-react'
import { Responsive, Segment } from 'semantic-ui-react'

export default function LocationCard ({ name, type, dimension, residents}) {
  // image={image}
  const CardDiv = styled.div`
  width: 50%;
  display: flex;
  flex-flow: column;
`;
  return (<CardDiv>
    <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>
        {type} - {dimension}
        <br/>
      </Card.Description>
    </Card.Content>
    <Segment.Group>
    <Responsive as={Segment}>{residents} residents</Responsive>
  </Segment.Group>
  </Card>
  </CardDiv>
  )
}
