import {useLocation} from "react-router-dom";
import * as queryString from 'query-string';
function SearchResults() {
    const location = useLocation();
    let term = queryString.parse(location.search).term;
    return (
        <div>
        Searching for: {term}
        </div>
    );
};


export default SearchResults;
