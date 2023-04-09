import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useRef } from "react";
import { useState } from "react";
import {
  EnvelopeFill,
  GeoAltFill,
  TelephoneFill,
  Whatsapp,
} from "react-bootstrap-icons";
import styles from "../styles/BookingForm.module.css";

import emailjs from "@emailjs/browser";

const initialState = {
  name: "",
  email: "",
  tel: "",
  message: "",
  service: "",
};

const BookingForm = ({ hide }) => {
  const [formData, setFormData] = useState(initialState);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!disableBtn) {
      emailjs
        .sendForm(
          "service_ya9m84v",
          "template_bweyk3i",
          form.current,
          "mOHPOEqOpSqXGSfQD"
        )
        .then(
          (result) => {
            return;
          },
          (error) => {
            console.log(error.text);
          }
        );
      setFormData(initialState);
    }
  };

  const disableBtn =
    !formData?.email?.length > 0 ||
    !formData?.email?.includes("@") ||
    !formData?.email?.trim() ||
    !formData?.service?.length > 0 ||
    !formData?.service?.trim() ||
    formData?.message?.length < 10 ||
    !formData?.message?.trim() ||
    !formData?.name?.length > 0 ||
    !formData?.name?.trim();

  return (
    <div className={styles.contactForm}>
      <div className={styles.contactUs}>
        <p className={styles.contact__title}>
          {!hide ? "APPOINTMENT" : "Get in touch!"}
        </p>
        <div className={styles.ourContacts}>
          <p className={styles.subTitle}>Make An Appointment For Your Family</p>
          <p className={styles.bookText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            temporibus fuga eius ex, quam iure saepe officia tenetur tempora,
            rem blanditiis quos maiores quis ipsum neque ducimus magni suscipit
            maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Amet temporibus fuga eius ex, quam iure saepe officia tenetur
            tempora, rem blanditiis quos maiores quis ipsum neque ducimus magni
            suscipit maxime.
          </p>
        </div>
        <div className={styles.buttons}>
          <Button>Talk to Us</Button>
          <Button>Read More</Button>
        </div>
      </div>
      <div className={styles.form__container}>
        <div className={styles.form__caption}>
          <p>Book An Appointment</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <div>
            <Box
              id={styles.formInputBox}
              sx={{ display: "flex", alignItems: "flex-end" }}
            >
              <TextField
                onChange={handleChange}
                id="demo-name"
                styles={{
                  "& .Mui-focused fieldset": {
                    borderColor: "green",
                  },
                }}
                label="Name"
                variant="outlined"
                className={styles.formInput}
                name="name"
                value={formData.name}
              />
            </Box>
            <Box
              id={styles.formInputBox}
              sx={{ display: "flex", alignItems: "flex-end" }}
            >
              <TextField
                onChange={handleChange}
                id="email"
                label="Email"
                variant="outlined"
                className={styles.formInput}
                name="email"
                value={formData.email}
              />
            </Box>
          </div>
          <div>
            <Box
              id={styles.formInputBox}
              sx={{ display: "flex", alignItems: "flex-end" }}
            >
              <TextField
                onChange={handleChange}
                id="telephone"
                label="Phone number"
                variant="outlined"
                color="primary"
                className={styles.formInput}
                name="tel"
                value={formData.tel}
              />
            </Box>
            <Box
              id={styles.formInputBox}
              sx={{ display: "flex", alignItems: "flex-end" }}
            >
              <FormControl
                fullWidth
                sx={{ m: 1 }}
                className={styles.serviceInputBox}
              >
                <InputLabel id="demo-controlled-open-select-labeloo">
                  -- Interested Service --
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-labeluu"
                  id="demo-controlled-open-select22"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  name="service"
                  variant="outlined"
                  label="Interested services"
                  fullWidth
                  value={formData.service}
                  onChange={handleChange}
                >
                  <MenuItem value=" Diagnostic imaging ">Diagnostic imaging</MenuItem>
                  <MenuItem value="Emergency services">
                  Emergency services
                  </MenuItem>
                  <MenuItem value="Mental health">
                  Mental health
                  </MenuItem>
                  <MenuItem value="Surgery">
                   Surgery{" "}
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </form>
        <div className={styles.button__wrapper}>
          <Button
            disabled={disableBtn}
            onClick={sendEmail}
            type="submit"
            className={`${styles.button} ${disableBtn && styles.disableBtn}`}
          >
            Book now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
