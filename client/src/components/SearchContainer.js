import React,{Component} from "react";
import axios from "axios";
import ResultsContainer from "./ResultsContainer";

export default class SearchContainer extends Component {
    state = {
        query:'',
        volumes: null,
    };

    onSearch=(event)=>{
        event.preventDefault();

        // Make request to Google Books API.
        // Store the volumes as a new state property.
        // Show the result box when the volumes in state is populated.
        // Render each book in the result box.
        axios.get('https://www.googleapis.com/books/v1/volumes', {
            params: {
                q: this.state.query,
                key: "AIzaSyDysnCWy_xlZElfNHzxmdfWMK2oL82YRro",
            }
        }).then(response => {
            this.setState({
                volumes: response.data.items || [],
            });
        });
    };

    onSearchChange=(event)=>{
        this.setState({query: event.target.value});
    };

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.onSearch}>
                        <input type="text" placeholder="Search Books..." value={this.state.value} onChange={this.onSearchChange}/>
                        <button type="submit">Search</button>
                    </form>
                </div>
                {this.state.volumes && (
                    <ResultsContainer volumes={this.state.volumes}/>
                )}
            </div>
        );
    }
}
