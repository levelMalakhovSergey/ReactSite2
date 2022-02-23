import React,{ useMemo, useState }  from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
        <MyInput value={filter.query} onChange={ e=> setFilter({...filter, query: e.target.value})}  placeholder="Search" />
        <MySelect   
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue="Sort By"
          options={[
            { value: "title", name: "By title" },
            { value: "description", name: "By description" },
          ]}
        ></MySelect>
        
      </div>
    );
};

export default PostFilter;
