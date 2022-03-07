import React, {useEffect, useMemo, useState} from 'react';
import {useTable,  useGlobalFilter, useFilters, usePagination} from "react-table";
import MOCK_DATA from '../components/MOCK_DATA.json'
import {COLUMNS, groupedColumns} from '../components/colums'
import '../styles/table.css'
import GlobalFilter from "../components/GlobalFilter";
import NavigationTablePanel from "../components/NavigationTablePanel";
import PostService from "../API/PostService";
import {useFetching} from "../components/hooks/useFetching";
import {GetPagesCount} from "../utils/pages";
import Loader from "../components/UI/loader/Loader";
import axios from "axios";


const PaginationTable = () => {
    const [isPostsLoading, setPostsLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [fetchPosts, isLoading, postError] = useFetching(async () => {
        setPostsLoading(true)
        let response = await PostService.getAllData()
        setPosts(response)
        setPostsLoading(false)
    })
    useMemo(  () => {
        // const fetchData = async () => {
        //     const result = await axios(
        //         'https://jsonplaceholder.typicode.com/posts',
        //     );
        //     setPosts(result.data);
        // };
        // fetchData();
        fetchPosts()
    },[])
    const columns = useMemo(() => COLUMNS, [])

    const tableInstance = useTable({
        columns: columns,
        data: posts
    },useFilters,useGlobalFilter,usePagination)
    console.log("sada" + posts)
    const
        {getTableProps, getTableBodyProps, headerGroups, page,
            nextPage,previousPage,canNextPage,
            canPreviousPage,pageOptions,gotoPage,pageCount,setPageSize, state, prepareRow,setGlobalFilter} = tableInstance;
      const {pageIndex, pageSize, globalFilter}= state;
    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        <table {...getTableProps()}>

            <thead>
            {
                headerGroups.map((headerGroup) =>
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(column =>
                                <th {...column.getHeaderProps()}> {column.render('Header')}
                                    <div>{column.canFilter ? column.render("Filter") : null}</div>
                                </th>
                            )
                        }

                    </tr>
                )
            }

            </thead>
            <tbody {...getTableBodyProps()}>
            {
                page.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map((cell) => <td {...cell.getCellProps()}> {cell.render("Cell")} </td>)
                            }

                        </tr>
                    )
                })
            }

            </tbody>
        </table>
            <NavigationTablePanel pageIndex={pageIndex} pageSize={pageSize} pageCount={pageCount} canNextPage={canNextPage} canPreviousPage={canPreviousPage} nextPage={nextPage} previousPage={previousPage} gotoPage={gotoPage} pageOptions={pageOptions} setPageSize={setPageSize} />
            {
                isPostsLoading &&
                <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', marginTop: "30px"}}>
                    <Loader/>
                </div>
            }
    </>
    );
};

export default PaginationTable;