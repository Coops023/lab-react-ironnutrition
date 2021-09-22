import { Divider, Input } from "antd";
import { useState } from "react";
import React from 'react'


export default function Search(props) {
    const [search, setSearch] = useState('')

    

    const handleSearch = e => {
        e.preventDefault();
        props.filteredFood(e.target.value)
        //reset state
        setSearch('');
    }

    return (
        <>
            <Divider>Search</Divider>
            <label>Search</label>
            <Input value={search} type="text" onChange={handleSearch} />
           
        </>
    )
}
