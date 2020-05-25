import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";


export default class extends React.Component {
    state = {
        moviesResults: null,
        tvResults: null,
        searchTerm: "",
        error: null,
        loading: true
    };
     
    handleSubmit = () => {
      const {searchTerm} = this.state;
      if (searchTerm !=="") {
        this.searchByTerm()
      }
    }

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
        const {moviesResults, tvResults, error, loading} = this.state;
        console.log(this.state)
        return (
            <SearchPresenter
                moviesResults={moviesResults}
                tvResults={tvResults}
                error={error}
                loading={loading}
                handleSubmit={this.handleSubmit}                
                />
        );
    }
}