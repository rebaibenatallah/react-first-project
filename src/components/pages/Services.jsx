import React from "react";
import { services } from "../data/dummydata";
import Heading from "../common/Heading";
import {
  Settings,
  CropRotate,
  ViewInAr,
  PieChart,
  Code,
  BarChart,
  CloudOutlined,
  FavoriteBorder,
  Public,
  PersonOutlined,
  AddLocationAltOutlined,
  PhoneIphone,
  EmailOutlined,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  Menu,
} from "@mui/icons-material";
import { Icon } from "@mui/material";

function Services() {
  return (
    <section className="services">
      <div className="container">
        <Heading title="Services" />
        <div className="content grid3">
          {services.map((item, i) => (
            <div key={i} className="box">
              <i>{<item.icon />}</i>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
