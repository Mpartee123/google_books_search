import React, {Component} from "react";

export default class Book extends Component {
    render() {

        const info = this.props.volume.volumeInfo;

        return (
            <div >
                <img src={info.imageLinks.thumbnail} />
                <h4>{info.title}</h4>
                <h5>{info.authors}</h5>
                <p>{info.description}</p>
            </div>
        );
    }
}