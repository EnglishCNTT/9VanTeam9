import React from "react";
import HeaderBar from "../../components/custom/HeaderBar";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ArrowForward, Logout, Save, SwapHoriz } from "@mui/icons-material";
import parentrole from "../../assets/images/parentrole.png";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ParentProfile = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderBar role="student" />
      <div className="flex justify-between px-7 py-3">
        <span className="text-xl font-bold">Hồ sơ cá nhân</span>
      </div>
      <Box sx={{ width: "100%", height: "100%" }} class="bg-gray-200 p-7">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 8 }}>
          <Grid item xs={6} md={6}>
            <Box
              sx={{
                height: "644px",
                backgroundColor: "white",
                borderRadius: "20px",
                padding: "16px",
              }}
            >
              <span className="text-xl font-semibold">Thông tin cá nhân</span>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                marginTop={3}
              >
                <Grid item xs={6} md={6}>
                  <span className="font-semibold ">Họ</span>
                  <TextField
                    id="outlined-basic"
                    defaultValue="Vũ"
                    variant="outlined"
                    fullWidth
                    class="mt-2"
                    size="small"
                  />
                </Grid>
                <Grid item xs={6} md={6}>
                  <span className="font-semibold">Tên</span>
                  <TextField
                    id="outlined-basic"
                    defaultValue="Ngọc Anh"
                    variant="outlined"
                    fullWidth
                    class="mt-2"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <span className="font-semibold mt-2">Email</span>
                  <TextField
                    id="outlined-basic"
                    defaultValue="
                    vungocanh@gmail.com"
                    disabled
                    variant="outlined"
                    fullWidth
                    class="mt-2"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <span className="font-semibold mt-2">Số điện thoại</span>
                  <TextField
                    id="outlined-basic"
                    defaultValue="0987654321"
                    variant="outlined"
                    fullWidth
                    class="mt-2"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <span className="font-semibold">Địa chỉ</span>
                  <TextField
                    id="outlined-basic"
                    defaultValue="Hà Nội"
                    variant="outlined"
                    fullWidth
                    class="mt-2"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <Button
                    startIcon={<Save />}
                    variant="contained"
                    sx={{
                      flexDirection: "row",
                      float: "right",
                      marginTop: 3,
                    }}
                  >
                    Lưu
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={6} md={6}>
            <Box
              sx={{
                height: "644px",
                backgroundColor: "gray-200",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  height: "302px",
                  backgroundColor: "white",
                  borderRadius: "20px",
                  padding: "18px",
                }}
              >
                <span className="text-xl font-semibold ">Vai trò hiện tại</span>
                <div className="flex flex-col justify-center items-center">
                  <img src={parentrole} alt="" className="m-auto mt-10" />
                  <span className="text-lg font-medium mt-2">Phụ huynh</span>
                </div>

                <Button
                  startIcon={<SwapHoriz />}
                  variant="contained"
                  sx={{
                    flexDirection: "row",
                    float: "right",
                    marginTop: 5,
                  }}
                  onClick={() => navigate("/role")}
                >
                  Đổi vai trò
                </Button>
              </Box>
              <Box
                sx={{
                  height: "302px",
                  backgroundColor: "white",
                  padding: "18px",
                  borderRadius: "20px",
                }}
              >
                <span className="text-xl font-semibold">Số dư</span>
                <Box class="mt-5">
                  <span className="font-normal mt-3">
                    Số dư hiện tại của bạn
                  </span>
                  <TextField
                    id="outlined-basic"
                    defaultValue="50000đ"
                    disabled
                    variant="outlined"
                    fullWidth
                    class="mt-2"
                    size="small"
                  />
                </Box>
                <Button
                  endIcon={<ArrowForward />}
                  variant="contained"
                  sx={{
                    flexDirection: "row",
                    float: "right",
                    marginTop: 9,
                  }}
                >
                  Nạp thêm
                </Button>
              </Box>
            </Box>
          </Grid>
          {/* button logout */}
          <Grid item xs={12} md={12}>
            <Button
              startIcon={<Logout />}
              variant="contained"
              sx={{
                flexDirection: "row",
                float: "right",
                marginTop: 3,
                backgroundColor: "red",
              }}
              onClick={() => navigate("/")}
            >
              Đăng xuất
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ParentProfile;
