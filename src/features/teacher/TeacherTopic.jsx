import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HeaderBar from "../../components/custom/HeaderBar";
import { useNavigate } from "react-router-dom";

function createData() {
  const khoi = [6, 7, 8, 9];
  const lop_hoc = [
    "Lớp Văn giáo viên Phan Huy Thái",
    "Lớp Toán giáo viên Nguyễn Văn A",
    "Lớp Sinh học giáo viên Trần Thị B",
  ];

  const ten_de_bai = [
    "Đề thi số 1",
    "Đề thi kiểm tra cuối kỳ",
    "Bài tập ôn tập số 3",
  ];
  const cau_hoi = [
    "Câu hỏi về văn bản",
    "Bài toán tích phân",
    "Nhận biết tế bào",
  ];

  const ngay_tao = "20/1/2024";
  const randomKhoi = khoi[Math.floor(Math.random() * khoi.length)];

  const randomLop = lop_hoc[Math.floor(Math.random() * lop_hoc.length)];
  const randomTenDeBai =
    ten_de_bai[Math.floor(Math.random() * ten_de_bai.length)];
  const randomCauHoi = cau_hoi[Math.floor(Math.random() * cau_hoi.length)];

  return {
    khoi_hoc: randomKhoi,
    ten_de_bai: randomTenDeBai,
    cau_hoi: randomCauHoi,
    ngay_tao,
    lop_hoc: randomLop,
  };
}

const rows = Array(10).fill().map(createData);

const TableClassTeacher = () => {
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper} className="mt-4">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Khối</TableCell>
            <TableCell align="left">Đề bài</TableCell>
            <TableCell align="right">Câu hỏi chấm điểm</TableCell>
            <TableCell align="right">Ngày tạo</TableCell>
            <TableCell align="right">Lớp đã giao</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              hover={true}
            >
              <TableCell align="center">{row.khoi_hoc}</TableCell>
              <TableCell component="th" scope="row" align="left">
                {row.ten_de_bai}
              </TableCell>
              <TableCell align="right">{row.cau_hoi}</TableCell>
              <TableCell align="right">{row.ngay_tao}</TableCell>
              <TableCell align="right">{row.lop_hoc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const TeacherTopic = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HeaderBar role="teacher" />

      <Container maxWidth={"xl"} className="my-6 px-6">
        <Box className="-mx-6 px-6">
          <Box sx={{ width: "100%" }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Kho đề bài chung" />
              <Tab label="Kho đề bài của tôi" />
            </Tabs>
          </Box>

          <TableClassTeacher />
        </Box>
      </Container>
    </>
  );
};

export default TeacherTopic;
