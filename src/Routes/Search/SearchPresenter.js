import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"
import Loader from "Components/Loader"
import Section from "Components/Section"
import Message from "Components/Message";

const Container = styled.div`
    padding:20px 20px;
`;
const Form = styled.form`
    margin-bottom:50px;
    width:100%;
`;
const Input = styled.input`
    all: unset;
    font-size: 25px;
    width:100%;
`;


const SearchPresenter = ({moviesResults, tvResults, error, loading, searchTerm, handleSubmit,updateTerm}) =>
    (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input 
                    placeholder="Search Movies or Tv Show..."
                    value={searchTerm}
                    onChange={updateTerm}
                ></Input>
            </Form>
            {
                loading ? <Loader/> : 
                (

                    <>
                        {moviesResults && moviesResults.length>0 && (
                            <Section title="Movie Results">
                                {moviesResults.map(i => (
                                    <span key={i.id}>{i.title}</span>
                                ))}
                            </Section>
                        )}

                        {tvResults && tvResults.length>0 && (
                            <Section title="TV Show Results">
                                {tvResults.map(i => (
                                    <span key={i.id}>{i.name}</span>
                                ))}
                            </Section>
                        )}

                        {error && <Message text={error} color="#e74c3c"></Message>}

                        {tvResults && moviesResults && tvResults.length === 0 && moviesResults.length === 0 && searchTerm.length > 0 &&
                            (<Message text={`Noting found for: ${searchTerm}`} color="#95a5a6"></Message>)
                        }
                    </>
                )
            }
        </Container>
    ) 


SearchPresenter.propTypes = {
    moviesResults: PropTypes.array,
    tvResults: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    searchTerm: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;