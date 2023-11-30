import React, { useEffect, useState } from "react";
const axios = 1;
function About() {
  const [data, setData] = useState([]);

  async function getAbout() {
    await axios
      .get("http://127.0.0.1:8080")
      .then((response) => {
        if (response.data.msg) {
          console.log(response.data.msg);
        } else {
          setData(response.data);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    getAbout();
  }, []);

  return (
    <div className="about-container ">
      {data.length > 0 ? (
        <>
          {data.map((chunk) => {
            return (
              <div key={chunk.id}>
                <h1 className="text-center mt-4 pt-4 mb-4 title" id="about">
                  {chunk.title}
                </h1>
                <hr />
                <div className="about-content text">
                  <p>{chunk.description}</p>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <h1 className="text-center mb-4 title mt-4 pt-4" id="about">
            WHO WE ARE
          </h1>
          <hr />

          <div className="about-content text">
            <p>
              Welcome to Linkits Digital, your dedicated partner in the
              ever-evolving landscape of technology. We are an innovative IT
              company specializing in a spectrum of internet-related services,
              committed to shaping digital experiences that transcend
              expectations.
            </p>
            <p>
              At Linkits Digital, we don't just provide services; we craft
              solutions tailored to your unique needs. Our mission is to be the
              forefront leader in delivering client-centric excellence across
              various domains.
            </p>

            <p>
              Linkits Digital is not just an IT company; we are your strategic
              partner in navigating the dynamic digital landscape. Our team is
              driven by a passion for innovation, a commitment to quality, and a
              focus on delivering results that propel your business forward.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default About;
