import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"
import Helmet from "react-helmet";
import Section from "Components/Section"
import Loader from "Components/Loader"
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div `
    padding:20px;
`;

const TVPresenter = ({topRated, popular, airingToday, error, loading}) => (
<> < Helmet > <title>TV | Show</title>
</Helmet>
    {
    loading
        ? (<Loader/>)
        : (
            <Container>
                {
                    topRated && topRated.length > 0 && (
                        <Section title="Top Rated Show">
                            {
                                topRated.map(i => (
                                    <Poster
                                        key={i.id}
                                        title={i.original_name}
                                        imageUrl={i.poster_path}
                                        id={i.id}
                                        rating={i.vote_average}
                                        year={i.first_air_date && i
                                            .first_air_date
                                            .substring(0, 4)}
                                        isMovie={false}/>
                                ))
                            }
                        </Section>
                    )
                }
                {
                    popular && popular.length > 0 && (
                        <Section title="Popular Show">
                            {
                                popular.map(i => (
                                    <Poster
                                        key={i.id}
                                        title={i.original_name}
                                        imageUrl={i.poster_path}
                                        id={i.id}
                                        rating={i.vote_average}
                                        year={i.first_air_date && i
                                            .first_air_date
                                            .substring(0, 4)}
                                        isMovie={false}/>
                                ))
                            }
                        </Section>
                    )
                }
                {
                    airingToday && airingToday.length > 0 && (
                        <Section title="Airingtoday Show">
                            {
                                airingToday.map(i => (
                                    <Poster
                                        key={i.id}
                                        title={i.original_name}
                                        imageUrl={i.poster_path}
                                        id={i.id}
                                        rating={i.vote_average}
                                        year={i.first_air_date && i
                                            .first_air_date
                                            .substring(0, 4)}
                                        isMovie={false}/>
                                ))
                            }
                        </Section>
                    )
                }
                {error && <Message text={error} color="#e74c3c"></Message>}
            </Container>
        )
} </>
    )

TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default TVPresenter;