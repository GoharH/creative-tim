import "./style.scss";
import fakeData from "./MOCK_DATA.json";
import * as React from "react";
import { useTable } from "react-table";

function TablesPage() {
    const data = React.useMemo(() => fakeData, []);
    const columns = React.useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
            },
            {
                Header: "Name",
                accessor: "userName",
            },
            {
                Header: "Salary",
                accessor: "salary",
            },
            {
                Header: "Country",
                accessor: "country",
            },
            {
                Header: "City",
                accessor: "city",
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });

    return <>
        <div className="G-section-container table-sec">
            <div className="G-page-title-part">
                <h3 className="G-page-title">Striped Table with Hover</h3>
                <p className="G-page-subTitle">Here is a subtitle for this table</p>
            </div>
            <div className="App">
                <div className="container">
                    <table {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render("Header")}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map((row) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => (
                                            <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    </>



}

export default TablesPage;