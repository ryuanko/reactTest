import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "Components/Section"
import Loader from "Components/Loader"
import Message from "Components/Message";

const Container = styled.div`
    padding:50px 10px;
`;

const HomePresenter = ({nowPlaying, popular, upcoming, error, loading}) =>
    loading ? (
      <Loader/>
    ):(
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
            {nowPlaying.map(i => (<span key={i.id}>{i.title}</span>))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movie">
            {popular.map(i => (<span key={i.id}>{i.title}</span>))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming Movie">
            {upcoming.map(i => (<span key={i.id}>{i.title}</span>))}
        </Section>
      )}
      {error && <Message text={error} color="#e74c3c"></Message>}
    </Container>);

HomePresenter.prototype = {
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter;