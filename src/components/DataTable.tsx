"use client";

import { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";

export interface Column<T> {
  header: React.ReactNode;
  render: (row: T) => React.ReactNode;
  align?: "left" | "right" | "center";
  sortValue?: (row: T) => string | number;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  rows: T[];
  getRowId: (row: T) => React.Key;
  defaultSort?: Sort;
  emptyMessage?: string;
}

type Sort = { column: number; direction: "asc" | "desc" };

const compare = (a: string | number, b: string | number) =>
  typeof a === "number" && typeof b === "number"
    ? a - b
    : String(a).localeCompare(String(b));

export function DataTable<T>({
  columns,
  rows,
  getRowId,
  defaultSort,
  emptyMessage = "No results found",
}: DataTableProps<T>) {
  const [sort, setSort] = useState<Sort | null>(defaultSort ?? null);

  const toggleSort = (column: number) =>
    setSort((prev) => ({
      column,
      direction:
        prev?.column === column && prev.direction === "asc" ? "desc" : "asc",
    }));

  const sortValue = sort && columns[sort.column].sortValue;
  const sortedRows =
    sort && sortValue
      ? [...rows].sort(
          (a, b) =>
            compare(sortValue(a), sortValue(b)) *
            (sort.direction === "asc" ? 1 : -1),
        )
      : rows;

  return (
    <TableContainer component={Paper} variant="outlined">
      <Table sx={{ tableLayout: "fixed" }}>
        <TableHead>
          <TableRow>
            {columns.map((col, i) => (
              <TableCell
                key={i}
                align={col.align}
                sx={{ fontWeight: "bold" }}
                sortDirection={sort?.column === i ? sort.direction : false}
              >
                {col.sortValue ? (
                  <TableSortLabel
                    active={sort?.column === i}
                    direction={sort?.column === i ? sort.direction : "asc"}
                    onClick={() => toggleSort(i)}
                    sx={{
                      "&:not(.Mui-active) .MuiTableSortLabel-icon": {
                        opacity: 0.3,
                      },
                    }}
                  >
                    {col.header}
                  </TableSortLabel>
                ) : (
                  col.header
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length === 0 && (
            <TableRow>
              <TableCell colSpan={columns.length} align="center">
                {emptyMessage}
              </TableCell>
            </TableRow>
          )}
          {sortedRows.map((row) => (
            <TableRow key={getRowId(row)}>
              {columns.map((col, i) => (
                <TableCell key={i} align={col.align}>
                  {col.render(row)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
