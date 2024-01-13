import React from "react";
import logo from "../../assets/images/banner9van.png";
import studentCard from "../../assets/images/studencard.png";
import teacherCard from "../../assets/images/teachercard.png";
import parentCard from "../../assets/images/parentcard.png";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const ChooseRole = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-green-200 w-screen h-screen flex justify-center place-items-center">
      <div className="bg-gray-100 w-3/4 h-3/4 rounded-2xl flex flex-col justify-start place-items-center">
        <img src={logo} alt="" className="w-44 h-12 mt-10" />
        <span className="text-2xl font-bold mt-2">
          Chào mừng bạn đã đến với 9Văn
        </span>
        <span className="text-lg font-medium text-gray-500">
          Website chấm bài thông mình và rèn luyện môn văn hiệu quả
        </span>
        <span className="text-xl font-bold">Bắt đầu với vai trò ...</span>
        <div className="flex gap-9 px-5 mt-9">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => navigate("/student")}>
              <CardMedia
                component="img"
                height="140"
                image={studentCard}
                alt="green iguana"
              />
            </CardActionArea>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => navigate("/student")}
            >
              <Button color="primary" endIcon={<ArrowRightAlt />}>
                Học sinh
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => navigate("/teacher")}>
              <CardMedia
                component="img"
                height="140"
                image={teacherCard}
                alt="green iguana"
              />
            </CardActionArea>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => navigate("/teacher")}
            >
              <Button color="primary" endIcon={<ArrowRightAlt />}>
                Giáo viên
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => navigate("/parent")}>
              <CardMedia
                component="img"
                height="140"
                image={parentCard}
                alt="green iguana"
              />
            </CardActionArea>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => navigate("/parent")}
            >
              <Button color="primary" endIcon={<ArrowRightAlt />}>
                Phụ Huynh
              </Button>
            </CardActions>
          </Card>
        </div>
        <FormControlLabel
          className="mt-6"
          control={<Checkbox />}
          label="Nhớ vai trò tôi chọn và không hiển thị lại lần sau"
        />
        <span className="text-xs font-normal text-gray-500">Phiên bản 1.0</span>
      </div>
    </div>
  );
};

export default ChooseRole;
