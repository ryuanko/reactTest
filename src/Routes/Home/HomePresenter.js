import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"

const HomePresenter = ({nowPlaying, upcoming, popular, error, loading}) => null;

HomePresenter.PropTypes = {
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    error: PropTypes.array,
    loading: PropTypes.array
};

export default HomePresenter;