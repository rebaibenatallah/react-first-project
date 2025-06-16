import React from "react";
import { contact, project } from "../data/dummydata";
import Heading from "../common/Heading";

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="container">
          <Heading title="Keep In Touch" />
          <div className="content flexsb">
            <div className="right">
              <form action="">
                <div className="flex">
                  <input type="text" name="" id="" placeholder="Name" />
                  <input type="email" name="" id="" placeholder="Email" />
                </div>
                <input type="text" name="" id="" placeholder="Subject" />
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Submit</button>
              </form>
            </div>
            <div className="left">
              {contact.map((item, i) => (
                <div className="box" key={i}>
                  <i>{<item.icon />}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
