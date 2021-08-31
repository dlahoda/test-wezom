import React from "react";
import { useTable } from "react-table";
import clsx from "clsx";

const Table = ({ colDefs, rowData, useTableProps = {} }) => {
  const columns = React.useMemo(() => colDefs, [colDefs]);
  const data = React.useMemo(() => rowData, [rowData]);
  const tableInstance = useTable(
    _.assign({}, { columns, data }, useTableProps)
  );

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    tableInstance;

  return (
    <table {...getTableProps({ className: clsx("w-full") })}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps({
                  className: clsx(column.className, "px-2 py-1"),
                  style: column.style,
                })}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps({
                      className: clsx(
                        cell.column.className,
                        "px-2 py-1"
                      ),
                      style: cell.column.style,
                    })}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
