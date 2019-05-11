import React, {Component} from "react";
import Book from "./Book";

export default class ResultsContainer extends Component {
    render() {
        return (
            <div>
                <h4>Results</h4>
                {this.props.volumes.length
                    ? this.props.volumes.map(volume => <Book key={volume.id} volume={volume}/>)
                    : <p>No results</p>}
            </div>
        );
    }
}