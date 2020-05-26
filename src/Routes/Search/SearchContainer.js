import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";


export default class extends React.Component {
    state = {
        moviesResults: null,
        tvResults: null,
        searchTerm: "",
        error: null,
        loading: false
    };
     
    handleSubmit = (event) => {
      event.preventDefault();
      const {searchTerm} = this.state;
      if (searchTerm !=="") {
        this.searchByTerm()
      }
    }

    updateTerm = (event) => {
      const {target: {value}} = event;

      this.setState({
        searchTerm: value
      });

    };

    searchByTerm = async () => {
      const {searchTerm} = this.state;
      this.setState({loading:true})
      try {
        const {data: {results: moviesResults }} = await movieApi.search(searchTerm);
        const {data: {results: tvResults }} = await tvApi.search(searchTerm);

        this.setState({
          moviesResults,
          tvResults
        })
      } catch (error) {
        this.setState({
          error: "Can't find Detail infomation."
        })
      } finally {
        this.setState({
          loading:false
        })
      }
    }

    render() {
        const {moviesResults, tvResults, error, loading, searchTerm} = this.state;
        return (
            <SearchPresenter
                moviesResults={moviesResults}
                tvResults={tvResults}
                error={error}
                loading={loading}
                searchTerm= {searchTerm}
                handleSubmit={this.handleSubmit}   
                updateTerm={this.updateTerm}             
                />
        );
    }
}