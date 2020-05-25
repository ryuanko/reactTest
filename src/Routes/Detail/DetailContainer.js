import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";

export default class extends React.Component {
    constructor(props) {
        super(props);
        const {location: {pathname}} = props;

        this.state = {
            results: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        };
    }



    // async 없음 await 할수 없음
    async componentDidMount() {
        const {
            match: {
                params: {
                    id
                }
            },
            history: {
                push
            },

        } = this.props;

        const {isMovie} = this.state;

        const parsedId = parseInt(id)
        if (isNaN(parsedId)) {
            return push("/")
        }
        
        let result = null;
        try {
            if (isMovie) {
                ({data: result} = await movieApi.movieDetail(parsedId));
            } else {
                ({data: result} = await tvApi.showDetail(parsedId));
            }
        } catch (error) {
            this.setState({error: "Can't find Detail infomation."})
        } finally {
            this.setState({loading: false, result})
        }
    }

    render() {
        const {result, error, loading} = this.state;
        console.log(result)
        return (<DetailPresenter result={result}error={error} loading={loading}/>);
    }
}