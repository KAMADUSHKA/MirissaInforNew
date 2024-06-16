import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
  import React from "react";
  
  const rows = [
    {
      id: 1,
      Kadawatha: "05:30",
      Matar: "07:35",
    },
    {
      id: 2,
      Kadawatha: "06:30",
      Matar: "08:35",
    },
    {
      id: 3,
      Kadawatha: "07:15",
      Matar: "09:20",
    },
    {
      id: 4,
      Kadawatha: "08:00",
      Matar: "10:05",
    },
    {
      id: 5,
      Kadawatha: "08:45",
      Matar: "10:50",
    },
    {
      id: 6,
      Kadawatha: "09:30",
      Matar: "11:35",
    },
    {
      id: 7,
      Kadawatha: "10:15",
      Matar: "12:20",
    },
    {
      id: 8,
      Kadawatha: "11:00",
      Matar: "13:05",
    },
    {
      id: 9,
      Kadawatha: "11:45",
      Matar: "13:50",
    },
    {
      id: 10,
      Kadawatha: "12:30",
      Matar: "14:35",
    },
    {
      id: 11,
      Kadawatha: "13:15",
      Matar: "15:20",
    },
    {
      id: 12,
      Kadawatha: "14:00",
      Matar: "16:05",
    },
    {
      id: 13,
      Kadawatha: "14:45",
      Matar: "16:50",
    },
    {
      id: 14,
      Kadawatha: "15:30",
      Matar: "17:35",
    },
    {
      id: 15,
      Kadawatha: "16:00",
      Matar: "18:05",
    },
    {
      id: 16,
      Kadawatha: "16:30",
      Matar: "18:35",
    },
    {
      id: 17,
      Kadawatha: "17:00",
      Matar: "19:05",
    },
    {
      id: 18,
      Kadawatha: "17:30",
      Matar: "19:35",
    },
    {
      id: 19,
      Kadawatha: "18:15",
      Matar: "20:20",
    },
    {
      id: 20,
      Kadawatha: "19:00",
      Matar: "21:05",
    },
    {
      id: 21,
      Kadawatha: "19:45",
      Matar: "21:50",
    },
    {
      id: 22,
      Kadawatha: "20:30",
      Matar: "22:35",
    },
    {
      id: 23,
      Kadawatha: "21:15",
      Matar: "23:20",
    },
    {
      id: 24,
      Kadawatha: "22:00",
      Matar: "00:05",
    },
  ];
export default function KadawathaToMatara() {
  return (
    <>
        <TableContainer component={Paper}>
        <br/>
        <Typography
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            fontSize: "23px",
            fontWeight: "bold",
          }}
        >
          KADAWATHA TO MATARA
        </Typography>
        <Table
          sx={{
            minWidth: 150,
            maxWidth: 410,
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{fontSize: "15px",}}> <b>From : </b>  KADAWATHA </TableCell>
              <TableCell align="right" ><b>To : </b> MATARA </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Kadawatha}
                </TableCell>
                <TableCell align="right">{row.Matar}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
