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

const HomePresenter = ({nowPlaying, popular, upcoming, error, loading}) => (<> < Helmet > <title>Movie | Nomflix</title>
</Helmet>
    {
    loading
        ? (<Loader/>)
        : (
            <Container>

                {
                    nowPlaying && nowPlaying.length > 0 && (
                        <Section title="Now Playing">
                            {
                                nowPlaying.map(i => (
                                    <Poster
                                        key={i.id}
                                        title={i.title}
                                        imageUrl={i.poster_path}
                                        id={i.id}
                                        rating={i.vote_average}
                                        year={i.release_date && i
                                            .release_date
                                            .substring(0, 4)}
                                        isMovie={true}/>
                                ))
                            }
                        </Section>
                    )
                }
                {
                    popular && popular.length > 0 && (
                        <Section title="Popular Movie">
                            {
                                popular.map(i => (
                                    <Poster
                                        key={i.id}
                                        title={i.title}
                                        imageUrl={i.poster_path}
                                        id={i.id}
                                        rating={i.vote_average}
                                        year={i.release_date && i
                                            .release_date
                                            .substring(0, 4)}
                                        isMov="isMov"
                                        ie={true}/>
                                ))
                            }
                        </Section>
                    )
                }
                {
                    upcoming && upcoming.length > 0 && (
                        <Section title="Upcoming Movie">
                            {
                                upcoming.map(i => (
                                    <Poster
                                        key={i.id}
                                        title={i.title}
                                        imageUrl={i.poster_path}
                                        id={i.id}
                                        rating={i.vote_average}
                                        year={i.release_date && i
                                            .release_date
                                            .substring(0, 4)}
                                        isMovie={true}/>
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
    

HomePresenter.prototype = {
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter;