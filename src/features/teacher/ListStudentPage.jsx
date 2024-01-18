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
import HeaderBar from "../../components/custom/HeaderBar";
import { Chip, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

const TableClassTeacher = () => {
  function createData(hoc_sinh, email_hoc_sinh, email_phu_huynh, trang_thai) {
    return { hoc_sinh, email_hoc_sinh, email_phu_huynh, trang_thai };
  }

  const _trang_thai = ["Đã duyệt", "Chờ duyệt", "Từ chối"];

  const rows = Array(10)
    .fill()
    .map((item) => {
      const hoc_sinh = "Phan Huy Thái";
      const email_hoc_sinh = "hocsinh@gmail.com";
      const email_phu_huynh = "phuhuynh@gmail.com";
      const i = Math.floor(Math.random() * 3);
      let color;
      if (i === 0) {
        color = "success";
      } else if (i === 1) {
        color = "secondary";
      } else {
        color = "error";
      }
      const trang_thai = <Chip label={_trang_thai[i]} color={color} />;
      return createData(hoc_sinh, email_hoc_sinh, email_phu_huynh, trang_thai);
    });
  return (
    <TableContainer component={Paper} className="mt-4">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">STT</TableCell>
            <TableCell align="left">Học sinh</TableCell>
            <TableCell align="right">Email học sinh</TableCell>
            <TableCell align="right">Email phụ huynh</TableCell>
            <TableCell align="right">Trạng thái</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell component="th" scope="row" align="left">
                {row.hoc_sinh}
              </TableCell>
              <TableCell align="right">{row.email_hoc_sinh}</TableCell>
              <TableCell align="right">{row.email_phu_huynh}</TableCell>
              <TableCell align="right">{row.trang_thai}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const ListStudentPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HeaderBar role="teacher" />

      <Container maxWidth={"xl"} className="my-6">
        <Box className="-mx-6 px-6">
          <Typography variant="h5" className="text-base" gutterBottom>
            Danh sách học sinh - Lớp 9A1 - Văn giáo viên Phan Huy Thái
          </Typography>

          <TableClassTeacher />
        </Box>
      </Container>
    </>
  );
};

export default ListStudentPage;
