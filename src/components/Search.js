import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Search() {
    const navigate = useNavigate();
    const [term, setTerm] = useState('');
    let goToSearchResults = () => {
       navigate('/search?term=' + term);
    };

    return (
        <div>
            <input placeholder="Term" onChange={(newValue) => setTerm(newValue.target.value)} value={term} />
            <button onClick={goToSearchResults}>Search</button>
        </div>
    );
}


export default Search;