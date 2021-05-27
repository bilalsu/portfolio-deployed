import React from 'react';

const TableBody = (props) => {
    const rows = props.linkData.map((index) => {
        return (
            <tr key={index}>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}

const Table = (props) => {
    const { linkData, removeLink } = props

    return (
        <table>
            <TableBody linkData={linkData} removeLink={removeLink} />
        </table>



    )

}

export default Table