import React, { Fragment } from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';

import Nav from '../components/Nav';
import { Container, FluidGroup } from '@keystonejs/ui/src/primitives/layout';
import { Title } from '@keystonejs/ui/src/primitives/typography';

const Lists = styled(Link)`
  display: flex;
`;

const ListLink = styled(Link)`
  transition: box-shadow 80ms linear;
  background-color: white;
  border-radius: 0.3em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.075), 0 0 0 1px rgba(0, 0, 0, 0.1);
  color: #999;
  display: block;
  padding: 16px 32px;
  position: relative;

  &:hover {
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.075),
      0 0 0 1px rgba(19, 133, 229, 0.5);
  }

  &:hover span {
    border-bottom-color: rgba(19, 133, 229, 0.5);
  }
`;

const ListName = styled('span')`
  transition: border-color 80ms linear;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-bottom: 1px solid transparent;
  color: #1385e5;
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
`;

const HomePage = ({ lists, listKeys }) => (
  <Fragment>
    <Nav />
    <Container>
      <Title>Home</Title>
      <FluidGroup>
        {listKeys.map(key => {
          const list = lists[key];
          return (
            <ListLink key={key} to={`/admin/${list.path}`}>
              <ListName>{list.label}</ListName>
            </ListLink>
          );
        })}
      </FluidGroup>
    </Container>
  </Fragment>
);

export default HomePage;