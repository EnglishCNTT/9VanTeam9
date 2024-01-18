import React from "react";
import { useState } from "react";
import HeaderBar from "../../components/custom/HeaderBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { Check } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const HomePageStudent = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <HeaderBar role="Student" />
      <div className="flex justify-between px-7 py-3">
        <span className="text-xl font-bold">Lớp đang tham gia</span>
        <Button variant="contained" onClick={handleOpen}>
          Tham gia lớp
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Mã lớp
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Input placeholder="XXXXXXXXX" />
            <Button>Kiểm tra</Button>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", marginTop: 3 }}
          >
            <Button variant="text">Đóng</Button>
            <Button
              sx={{ marginLeft: 2 }}
              variant="contained"
              startIcon={<Check />}
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
