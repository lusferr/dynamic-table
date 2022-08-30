import React from 'react';
import './style.css'

interface tableProps {
    data: never[];
    column: { heading: string; }[];
}

function Table({ data, column }: tableProps) {
    return (
        <table>
            <thead>
                <tr>
                    {column.map((item, index) => <TableHeadItem item={item} />)}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {data.map((item, index) => <TableRow item={item} column={column} />)}
                </tr>
            </tbody>
        </table>
    );
};

const TableHeadItem = ({ item }: any) => <th>{item.heading}</th>
const TableRow = ({ item, column }: any) => (
    <tr>
        {column.map(({ columnItem, index }: any) => {
            return <td>{item[`${columnItem.value}`]}</td>
        })}
    </tr>
)

export default Table;