import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";

const Container = styled.div `
  height:calc(100vh - 50px);
  width:100%;
  position:relative;
  padding:50px;
`;
const Backdrop = styled.div `
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-image:url(${props => props.bgUrl});
    background-position: center center;
    background-size:cover;
    filter: blur(3px);
    z-index:0;
    opacity:0.5;
`;

const Content = styled.div `
    display:flex;
    width:100%;
    position:relative;
    z-index:1;
    height:100%;
`;
const Cover = styled.div `
    width:30%;
    background-image:url(${props => props.bgUrl});
    background-position: center center;
    background-size:cover;
    height:100%;    
    border-radius: 5px;
`;

const Data = styled.div `
    width: 70%;
    margin-left: 10px;
`;
const Title = styled.h3 `
    font-size:32px;
    margin-bottom: 10px;
`;
const ItemContainer = styled.div `
    margin-bottom:10px;
`;
const Item = styled.span ``;
const Divider = styled.span `
    margin: 0 10px;
`;
const Overview = styled.p `
    font-size:12px;
    opacity:0.8;
`;

const DetailPresenter = ({result, error, loading}) => loading
    ? (<Loader/>)
    : (
        <Container>
            <Helmet>
                <title>
                    {
                        result.original_title
                            ? result.original_title
                            : result.original_name
                    }</title>
            </Helmet>
            <Backdrop
                bgUrl={result.backdrop_path
                    ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
                    : require("../../assets/noPosterSmall.png")}/>

            <Content>
                <Cover
                    bgUrl={result.poster_path
                        ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                        : require("../../assets/noPosterSmall.png")}/>
                <Data>
                    <Title>
                        {
                            result.original_title
                                ? result.original_title
                                : result.original_name
                        }</Title>
                    <ItemContainer>
                        <Item>
                            {
                                result.release_date
                                    ? result
                                        .release_date
                                        .substring(0, 4)
                                    : result
                                        .first_air_date
                                        .substring(0, 4)
                            }
                        </Item>
                        <Divider>•</Divider>
                        <Item>
                            {
                                result.runtime
                                    ? result.runtime
                                    : result.episode_run_time[0]
                            }
                            min
                        </Item>
                        <Divider>•</Divider>
                        <Item>
                            {
                                result.genres && result
                                    .genres
                                    .map(
                                        (genre, index) => index === result.genres.length - 1
                                            ? genre.name
                                            : `${genre.name} / `
                                    )
                            }
                        </Item>
                    </ItemContainer>
                    <Overview>
                        {result.overview}
                    </Overview>
                </Data>
            </Content>

        </Container>
    );

DetailPresenter.prototype = {
    result: PropTypes.object,
    error: PropTypes.bool.isRequired,
    loading: PropTypes.string
};

export default DetailPresenter;