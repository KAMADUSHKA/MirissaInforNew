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
    Matar: "04:00",
    Kadawatha: "06:05",
  },
  {
    id: 2,
    Matar: "04:30",
    Kadawatha: "06:35",
  },
  {
    id: 3,
    Matar: "05:00",
    Kadawatha: "07:05",
  },
  {
    id: 4,
    Matar: "05:30",
    Kadawatha: "07:35",
  },
  {
    id: 5,
    Matar: "06:00",
    Kadawatha: "08:05",
  },
  {
    id: 6,
    Matar: "06:45",
    Kadawatha: "08:50",
  },
  {
    id: 7,
    Matar: "07:30",
    Kadawatha: "09:35",
  },
  {
    id: 8,
    Matar: "08:15",
    Kadawatha: "01:20",
  },
  {
    id: 9,
    Matar: "09:00",
    Kadawatha: "11:05",
  },
  {
    id: 10,
    Matar: "09:45",
    Kadawatha: "11:50",
  },
  {
    id: 11,
    Matar: "10:30",
    Kadawatha: "12:35",
  },
  {
    id: 12,
    Matar: "11:15",
    Kadawatha: "13:20",
  },
  {
    id: 13,
    Matar: "12:00",
    Kadawatha: "14:05",
  },
  {
    id: 14,
    Matar: "12:45",
    Kadawatha: "14:50",
  },
  {
    id: 15,
    Matar: "13:30",
    Kadawatha: "15:35",
  },
  {
    id: 16,
    Matar: "14:15",
    Kadawatha: "16:20",
  },
  {
    id: 17,
    Matar: "15:00",
    Kadawatha: "17:05",
  },
  {
    id: 18,
    Matar: "15:30",
    Kadawatha: "17:35",
  },
  {
    id: 19,
    Matar: "16:00",
    Kadawatha: "18:05",
  },
  {
    id: 20,
    Matar: "16:45",
    Kadawatha: "18:50",
  },
  {
    id: 21,
    Matar: "17:30",
    Kadawatha: "19:35",
  },
  {
    id: 22,
    Matar: "18:15",
    Kadawatha: "20:20",
  },
  {
    id: 23,
    Matar: "19:00",
    Kadawatha: "21:05",
  },
  {
    id: 24,
    Matar: "20:00",
    Kadawatha: "22:05",
  },
];

export default function MataraToKadavatha() {
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
          MATARA TO KADAWATHA
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
              <TableCell sx={{fontSize: "15px",}}> <b>From : </b>  MATARA </TableCell>
              <TableCell align="right" ><b>To : </b> KADAWATHA</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Matar}
                </TableCell>
                <TableCell align="right">{row.Kadawatha}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
