import React from 'react'
import styled from 'styled-components';
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'
import { Card, Icon, Image } from 'semantic-ui-react'


export default function CharacterCard ({ name, origin, gender, img, loc, spec, status }) {
  
  const CardDiv = styled.div`
    width: 50%;
    display: flex;
    flex-flow: row wrap;
  `;
  
  return (

    <CardDiv>
     <Card>
    <Image src={img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{spec} {status}</Card.Meta>
      <Card.Description>
        Location: {loc} <br/>
        Origin: {origin}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Episodes
      </a>
    </Card.Content>
  </Card>
    </CardDiv>
  
  )
}
