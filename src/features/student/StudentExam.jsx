import { useState, React } from "react";
import HeaderBar from "../../components/custom/HeaderBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { Check, Logout, Search } from "@mui/icons-material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

function createData(stt, exam, classexam, expired, status) {
  return { stt, exam, classexam, expired, status };
}

const rows = [
  createData(
    1,
    "Bàn luận về vấn đề bạo lực học đường",
    "Lớp Văn - Thầy Thái",
    "16/1/2024",
    "Chưa làm"
  ),
  createData(
    2,
    "Thì hiện tại đơn",
    "Lớp Tiếng anh - Thầy Huy",
    "16/1/2024",
    "Chưa làm"
  ),
  createData(
    3,
    "Hình học",
    "Lớp Toán - Thầy Ngọc Anh",
    "21/1/2024",
    "Chưa làm"
  ),
  createData(
    4,
    "Chuyển động tròn đều",
    "Lớp Lý - Thầy Ngọc Anh",
    "30/1/2024",
    "Chưa làm"
  ),
  createData(
    5,
    "Cân bằng phương trình hoá học",
    "Lớp Hoá - Thầy Thái",
    "2/2/2024",
    "Chưa làm"
  ),
];

const StudentExam = () => {
  return (
    <>
      <HeaderBar role="student" />
      <div className="flex justify-between px-7 py-3">
        <span className="text-xl font-bold">Bài tập</span>
        <TextField
          id="input-with-icon-textfield"
          placeholder="Tìm kiếm"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </div>
      <TableContainer className="px-3" component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>STT</TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Đề bài
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Lớp</TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Hạn nộp
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Trạng thái
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.stt}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                hover={true}
              >
                <TableCell component="th" scope="row">
                  {row.stt}
                </TableCell>
                <TableCell align="left">{row.exam}</TableCell>
                <TableCell align="left">{row.classexam}</TableCell>
                <TableCell align="left">{row.expired}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    sx={{
                      fontWeight: "none",
                    }}
                    startIcon={<Logout />}
                  >
                    Làm bài
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StudentExam;
