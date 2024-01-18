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

function createData(lop_hoc, nam, mo_ta) {
  return { lop_hoc, nam, mo_ta };
}

const rows = Array(10)
  .fill()
  .map((item) => {
    const currentYear = new Date().getFullYear();

    const lop_hoc = "Lớp 9A1 - Văn giáo viên Phan Huy Thái";
    const nam = Math.floor(Math.random() * (currentYear - 2016 + 1)) + 2016;
    const mo_ta = "Lớp luyện văn ôn thi vào 10";
    return createData(lop_hoc, nam, mo_ta);
  });

const TableClassTeacher = () => {
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper} className="mt-4">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">STT</TableCell>
            <TableCell align="left">Lớp học</TableCell>
            <TableCell align="right">Năm</TableCell>
            <TableCell align="right">Mô tả</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              hover={true}
            >
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell component="th" scope="row" align="left">
                {row.lop_hoc}
              </TableCell>
              <TableCell align="right">{row.nam}</TableCell>
              <TableCell align="right">{row.mo_ta}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const TeacherExercise = () => {
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
              <Tab label="Bài chờ chấm" />
              <Tab label="Bài đã giao" />
              <Tab label="Bài đã chấm" />
            </Tabs>
          </Box>

          <TableClassTeacher />
        </Box>
      </Container>
    </>
  );
};

export default TeacherExercise;
