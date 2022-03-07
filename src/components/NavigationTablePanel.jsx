import React from 'react';
import '../styles/App.css'
const NavigationTablePanel = ({pageIndex,pageOptions, gotoPage,pageSize,setPageSize,canPreviousPage,canNextPage,previousPage,nextPage,pageCount}) => {
    return (
        <div className="navigationTablePanel">
            <span>
                page{" "} <strong>{pageIndex+1 } of {pageOptions.length}</strong>{" "}
            </span>
            <span>| Go To Page:  {" "}
                <input type='number' defaultValue={pageIndex+1} onChange={e => {
                    const pageNumber= e.target.value ? Number(e.target.value)-1 : 0;
                    gotoPage(pageNumber)
                }}
                       style={{width: "50px"}}
                />
            </span>
            <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                {
                    [10,25,50].map(pageSize => (<option key={pageSize} value={pageSize}> Show {pageSize}</option>))
                }
            </select>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} >{'<<'}</button>
            <button onClick={() => previousPage()}  disabled={!canPreviousPage}>Назад </button>
            <button onClick={() => nextPage()}  disabled={!canNextPage}>Вперёд </button>
            <button onClick={() => gotoPage(pageCount-1)} disabled={!canNextPage} >{'>>'}</button>
        </div>
    );
};

export default NavigationTablePanel;