import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { TPersons } from "../types";
import Image from "./Image";

// Table Columns
const columns = [
  {
    header: "#",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "firstname",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Gender",
    accessorKey: "gender",
  },
  {
    header: "Image",
    accessorKey: "image",
    cell: ({ row }: { row: any }) => {
      return <Image url={row.original.image} title={row.original.firstname} />;
    },
  },
];

const PersonsTable = ({ data }: { data: TPersons }) => {
  // Table instance
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  if (!data.length) {
    return <h3 className="text-xl italic text-center bg-gray-400 text-white p-2">No data found</h3>;
  }

  return (
    <>
      <table className="w-full">
        {/* Table Header */}
        <thead className="bg-gray-300">
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>

        {/* Table Body */}
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default PersonsTable;
