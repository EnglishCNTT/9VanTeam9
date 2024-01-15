import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import HeaderBar from "../../components/custom/HeaderBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

function createData(lop_hoc, cho_cham, da_cham, da_giao, ti_le_lam_bai) {
  return { lop_hoc, cho_cham, da_cham, da_giao, ti_le_lam_bai };
}

const rows = Array(10)
  .fill()
  .map((item) => {
    let da_giao = Math.floor(Math.random() * 101);
    let da_cham = Math.floor(Math.random() * 100);

    while (da_giao <= da_cham) {
      da_giao = Math.floor(Math.random() * 101);
      da_cham = Math.floor(Math.random() * 100);
    }

    const cho_cham = da_giao - da_cham;
    const ti_le_lam_bai = ((da_cham / da_giao) * 100).toFixed(2);
    return createData(
      "Lớp 9A1 - Văn giáo viên Phan Huy Thái",
      cho_cham,
      da_cham,
      da_giao,
      ti_le_lam_bai
    );
  });

const HomePageTeacher = () => {
  return (
    <>
      <HeaderBar />

      <Container maxWidth={"xl"} className="my-6">
        <Box className="-mx-6">
          <Typography variant="h5" className="text-base" gutterBottom>
            Tổng quan các lớp đang hoạt động
          </Typography>

          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">STT</TableCell>
                  <TableCell align="left">Lớp học</TableCell>
                  <TableCell align="right">Chờ chấm</TableCell>
                  <TableCell align="right">Đã chấm</TableCell>
                  <TableCell align="right">Đã giao</TableCell>
                  <TableCell align="right">Tỉ lệ làm bài</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell component="th" scope="row" align="left">
                      {row.lop_hoc}
                    </TableCell>
                    <TableCell align="right">{row.cho_cham}</TableCell>
                    <TableCell align="right">{row.da_cham}</TableCell>
                    <TableCell align="right">{row.da_giao}</TableCell>
                    <TableCell align="right">
                      {row.ti_le_lam_bai} %
                      <BorderLinearProgress variant="determinate" value={row.ti_le_lam_bai} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  );
};

export default HomePageTeacher;
