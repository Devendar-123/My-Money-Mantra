import { Container, Typography, Card } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
 
const bankLogos = [
  "/Images/logo1.jpg",
  "/Images/logo2.jpg",
  "/Images/logo3.jpg",
  "/Images/logo4.jpg",
  "/Images/logo5.jpg",
  "/Images/logo6.jpg",
  "/Images/logo7.jpg",
  "/Images/logo8.jpg",
  "/Images/logo9.jpg",
];
function Partners() {
  return (
    <Container
      sx={{
        width: "100%",
        height: "300px",
        // backgroundColor: "#e3f2fd",
        backgroundColor: "#EAF7FA",
        marginTop: 15,
        boxShadow: "0px 10px 20px rgba(212, 212, 212, 0.2)",
        borderRadius: "55px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Manrope, sans-serif !important",
          padding: 5,
          marginLeft: "410px",
          fontSize: "2.3rem",
          fontWeight: "700",
          color: "black",
          lineHeight: 1.2,
          position: "relative",
          display: "inline-block",
          "&::after": {
            content: '""',
            position: "absolute",
            right: 40,
            borderRadius: "5px",
            bottom: "35px",
            width: "118px",
            height: "4px",
            backgroundColor: "#3593b0",
          },
        }}
      >
        Our Partners
      </Typography>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={25}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        style={{ width: "90%", marginTop: "5px" }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {bankLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "90px",
                padding: "10px",
              }}
            >
              <img
                src={logo}
                alt={`logo ${index + 1}`}
                style={{ width: "100px", height: "auto" }}
              />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
 
export default Partners;