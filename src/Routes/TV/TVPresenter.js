import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "Components/Section"
import Loader from "Components/Loader"
import Message from "Components/Message";

const Container = styled.div`
    padding:50px 10px;
`;

const TVPresenter = ({topRated, popular, airingToday, error, loading}) => 
    loading ? (
        <Loader/>
    ):(
    <Container> 
    {topRated && topRated.length > 0 && (
    <Section title="Top Rated Show">
        {topRated.map(i => (<span key={i.id}>{i.name}</span>))}
    </Section>
    )}
    {popular && popular.length > 0 && (
    <Section title="Popular Show">
        {popular.map(i => (<span key={i.id}>{i.name}</span>))}
    </Section>
    )}
    {airingToday && airingToday.length > 0 && (
    <Section title="Airingtoday Show">
        {airingToday.map(i => (<span key={i.id}>{i.name}</span>))}
    </Section>
    )}
    {error && <Message text={error} color="#e74c3c"></Message>}
    </Container>);

TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default TVPresenter;