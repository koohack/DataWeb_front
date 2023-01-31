import React from 'react'
import { useLocation } from 'react-router';
import { Box, Typography, TextField, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import * as yup from "yup";
import { Formik } from "formik";

function Comment() {
  const location = useLocation();
  const nowData = location.state;
  const id = nowData.id;

  // Here we need to get
  // 1. title + text
  // 2. comment for this post

  const initialValues = {
    comment: "",
  }

  const userSchema = yup.object().shape({
    comment: yup.string().required("댓글을 입력해주세요!!"),
  });

  const handleFormSubmit = () => {
    console.log("click");
  }

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignitem="center">
        <Header title="Comment" subtitle="Write your comment" />
      </Box>

      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "darkcyan"}}>Post : <br /></Typography>
        <Typography variant="h7" sx={{ color: "greenyellow" }}>나는 오늘 점심에 축구를 했다. 근데 누구랑 대판 싸웠다. 그래서 얼굴에 구멍이 나버렸다.</Typography>

      </Box>

      <Box>
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
          >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Box display="flex" justifyContent="space-between">
                  <TextField
                    id="outlined-multiline-static"
                    label="Comment"
                    multiline
                    rows={4}
                    fullWidth
                    variant="filled"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.comment}
                    name="comment"
                    error={!!touched.comment && !!errors.comment}
                    helperText={touched.comment && errors.comment}
                  />
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                  <Button type="submit" color="secondary" variant="contained">
                    Submit
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
      </Box>



    </Box>
  )
}

export default Comment