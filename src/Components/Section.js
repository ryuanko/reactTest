import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Tile = styled.span`
  font-size:14px;
  font-weight:600;
`;

const Grid = styled.div`
  margin-top: 25px;
  display:grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap:20px;
`;


const Section = ({title, children}) => (
  <Container>
      <Tile>{title}</Tile>
      <Grid>{children}</Grid>
  </Container>
);

Section.prototype = {
  title: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Section;