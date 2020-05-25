import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"

const TVPresenter = ({topRated, popular, airingToday, error, loading}) => null;

TVPresenter.PropTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    error: PropTypes.array,
    loading: PropTypes.array
};

export default TVPresenter;