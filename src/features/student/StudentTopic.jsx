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
  const ten_de_bai = [
    "Đề thi số 1",
    "Đề thi kiểm tra cuối kỳ",
    "Bài tập ôn tập số 3",
  ];

  const bia_sach = ["Bộ sách Văn 6", "Bộ sách Toán 7", "Bộ sách Sinh học 8"];

  const lan_luyen_cuoi = ["1", "2", "3"];

  const randomTenDeBai =
    ten_de_bai[Math.floor(Math.random() * ten_de_bai.length)];
  const randomBiaSach = bia_sach[Math.floor(Math.random() * bia_sach.length)];
  const randomLanLuyenCuoi =
    lan_luyen_cuoi[Math.floor(Math.random() * lan_luyen_cuoi.length)];

  return {
    ten_de_bai: randomTenDeBai,
    bia_sach: randomBiaSach,
    lan_luyen_cuoi: randomLanLuyenCuoi,
  };
}

const rows = Array(10).fill().map(createData);

const TableTopicStudent = () => {
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper} className="mt-4">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">STT</TableCell>
            <TableCell align="left">Đề bài</TableCell>
            <TableCell align="right">Bộ sách - Bài</TableCell>
            <TableCell align="right">Lần luyện cuối</TableCell>
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
                {row.ten_de_bai}
              </TableCell>
              <TableCell align="right">{row.bia_sach}</TableCell>
              <TableCell align="right">{row.lan_luyen_cuoi}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const StudentTopic = () => {
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
              <Tab label="Tự luyện đề chung" />
              <Tab label="Tự luyện đề riêng" />
            </Tabs>
          </Box>

          <TableTopicStudent />
        </Box>
      </Container>
    </>
  );
};

export default StudentTopic;
