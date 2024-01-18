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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function createData(name, unmake, done) {
  return { name, unmake, done };
}

const rows = [
  createData("Lớp Toán - Thầy Ngọc Anh", 15, 6.0),
  createData("Lớp Văn - Thầy Thái", 27, 9.0),
  createData("Lớp Tiếng anh - Thầy Huy", 22, 16.0),
  createData("Lớp Lý - Thầy Ngọc Anh", 35, 4),
  createData("Lớp Hoá - Thầy Thái", 36, 16.0),
];

const HomePageStudent = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <HeaderBar role="student" />
      <div className="flex justify-between px-7 py-3">
        <span className="text-xl font-bold">Lớp đang tham gia</span>
        <Button variant="contained" onClick={handleOpen}>
          Tham gia lớp
        </Button>
      </div>
      <TableContainer className="px-3" component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Lớp</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Chưa làm
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Số bài đã làm
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
                <TableCell
                  component="th"
                  scope="row"
                  onClick={() => navigate("/student/exercise")}
                >
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.unmake}</TableCell>
                <TableCell align="right">{row.done}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "red",
                      fontWeight: "none",
                    }}
                    startIcon={<Logout />}
                  >
                    Rời
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={joinclass} alt="" />
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            marginTop={2}
          >
            Mã lớp
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Input placeholder="XXXXXXXXX" />
            <Button variant="contained">Kiểm tra</Button>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", marginTop: 3 }}
          >
            <Button variant="text" onClick={handleClose}>
              Đóng
            </Button>
            <Button
              sx={{ marginLeft: 2 }}
              variant="contained"
              startIcon={<Check />}
              onClick={handleClose}
            >
              Tham gia
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default HomePageStudent;
