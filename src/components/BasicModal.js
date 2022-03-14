import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import GitHubImage from "../assets/github.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: "2%",
  backgroundColor: "#ececa3",
  overflow: "hidden"
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          backgroundColor: "#ececa3",
          color: "black",
          ":hover": {
            background: "#809c13",
            color: "white",
          },
        }}
      >
        About me
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h3">
            Hey! My name is Anthony 😊
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            component="span"
          >
            Chopped Salad is a User Generated Poem software that <strong>CHOPS</strong> up poems you use
            to make a nice poem salad.
            <br />
            <br />
            I presented a version of ths program made in Python during an event
            at my high school called "Writers Week". A teacher expressed how she
            really liked the program, and she wanted to use this in her own
            classroom.
            <br />
            <br />
            This website is for her and for other teachers, students, and people
            who love poetry.
            <br />
            <br />
            If you would like to support Chopped Salad, and me, use {"\t"}
            <a href="https://venmo.com/code?user_id=2991224109662208345" style={{color: "#607c3c"}}>
              this link
            </a>{" "}
            <br />
            <br />
            <a href="https://github.com/tarmacjupiter">
              <img src={GitHubImage} style={{ height: 50, width: 50 }} />
            </a>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
