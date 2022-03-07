import React from 'react';

export const GlobalFilter = ({filter,  setFilter}) => {
    return (
        <span style={{margin: "0 auto"}}>
            Search: {'  '}
            <input value={filter || "" }
            onChange={e => setFilter(e.target.value) }
            />
        </span>
    );
};

export default GlobalFilter;