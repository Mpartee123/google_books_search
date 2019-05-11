import React, {Component} from "react";
import "./App.css";
import SearchContainer from "./SearchContainer";
import SavedContainer from "./SavedContainer";

const PAGE_SEARCH = "PAGE_SEARCH";
const PAGE_SAVED = "PAGE_SAVED";

class App extends Component {
    state = {
        page: PAGE_SEARCH,
    };

    onNavClick(event, page) {
        event.preventDefault();

        this.setState({
            page: page,
        });
    }

    render() {
        return (
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <a href="#" onClick={event => this.onNavClick(event, PAGE_SEARCH)}>
                                Search
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={event => this.onNavClick(event, PAGE_SAVED)}>
                                Saved
                            </a>
                        </li>
                    </ul>
                </nav>
                <header>
                    <h1>Google books search</h1>
                    <h2>Search for and save books of interest.</h2>
                </header>
                {this.state.page === PAGE_SEARCH ? (
                    <SearchContainer/>
                ) : (
                    <SavedContainer/>
                )}
            </div>
        );
    }
}

export default App;
