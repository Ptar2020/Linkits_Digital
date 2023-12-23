import React, { useState, useEffect } from "react";
const axios = 21;
function Services() {
  const [data, setData] = useState([]);
  // Sample data
  // const data = [{ id: 1, title:"My Title",sub_title:"Sub Title",description:"Description"},]

  async function getServices() {
    await axios
      .get("http://127.0.0.1:8080/services")
      .then((response) => {
        if (response.data.msg) {
          console.log(response.data.msg);
        } else {
          setData(response.data);
        }
      })
      .catch((error) => console.log(error.message));
  }

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <>
          {data.map((chunk) => {
            return (
              <div key={chunk.id}>
                <h1 className="text-center  title">{chunk.title}</h1>
                <hr />
                <div className="text">
                  <h2>{chunk.sub_title}</h2>
                  <p>{chunk.description}</p>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <h1 id="services" className="text-center  title   mt-4 pt-4">
            OUR SERVICES
          </h1>
          <hr />
          <div className="text">
            <p>
              Elevate your digital presence with our diverse range of IT
              services:
            </p>
            <div>
              <div>
                <h2>Web Development</h2>
                <p>
                  With a legacy of excellence spanning over three years, Linkits
                  Digital takes pride in being your dedicated partner for web
                  development. Our commitment is reflected in the creation of
                  responsive, secure, and user-friendly websites that cater to
                  both individuals and companies. Elevate your online presence
                  with our expert team, ensuring your digital footprint leaves a
                  lasting impression.
                </p>
              </div>
              <div>
                <h2>Software Development</h2>
                <p>
                  Embark on a transformative journey with Linkits Digital's
                  seasoned team of developers. We specialize in crafting custom
                  software solutions designed to seamlessly align with your
                  unique business requirements. From innovative enterprise
                  applications to cutting-edge mobile apps, our expertise is the
                  key to bringing your visionary ideas to life, empowering your
                  business for the future.
                </p>
              </div>
              <div>
                <h2>Graphic Design</h2>
                <p>
                  At Linkits Digital, we don't just design; we create
                  experiences that captivate and resonate. Our forte lies in
                  crafting visually stunning and user-friendly designs that
                  transcend the ordinary. From responsive and modern web
                  experiences to iconic company logos, compelling posters,
                  brochures, and flyers, we leave an indelible mark that sets
                  you apart in the competitive landscape. Elevate your brand
                  aesthetic with our design prowess.
                </p>
              </div>
              <div>
                <h2>ICT Consultancy</h2>
                <p>
                  Experience seamless computing with Linkits Digital's
                  comprehensive ICT consulting services. Entrust us with your
                  computer and mobile phone hardware and software challenges,
                  and witness professional solutions delivered with precision.
                  Our experts ensure thorough checks and efficient resolutions,
                  enhancing the performance and longevity of your technology
                  investments. Trust Linkits Digital for a smoother, more
                  reliable digital experience.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Services;
