import { useState, React } from "react";
import HeaderBar from "../../components/custom/HeaderBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { Check, Logout } from "@mui/icons-material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import joinclass from "../../assets/images/joinclass.png";
import { useNavigate } from "react-router-dom";

function createData(name, unmake, done) {
  return { name, unmake, done };
}

const rows = [
  createData("Vũ Ngọc Anh", "ngocanh@gmail.com", 50000),
  createData("Phan Huy Thái", "huythai@gmail.com", 150000),
  createData("Đinh Viết Huy", "viethuy@gmail.com", 250000),
];

const HomePageStudent = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderBar role="parent" />
      <div className="flex justify-between px-7 py-3">
        <span className="text-xl font-bold">Tài khoản của con bạn</span>
      </div>
      <TableContainer className="px-3" component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Họ và tên</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Email
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Số dư
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                hover={true}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.unmake}</TableCell>
                <TableCell align="right">{row.done}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default HomePageStudent;
