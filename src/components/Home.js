import React from "react";

function Home() {
  return (
    <div>
      <div className="about-container" id="about">
        <h1 className="text-center mb-4 title">WHO WE ARE</h1>
        <hr />

        <div id="about" className="about-content text">
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
          </div>
          
          
      {/* Services */}
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
            <h1 className="text-center  title">OUR SERVICES</h1>
            <hr />
            <div className="text">
              <p>
                Elevate your digital presence with our diverse range of IT
                services:
              </p>
              <div>
                <div>
                  <h2>Web Design</h2>
                  <p>
                    Create visually stunning and user-centric websites that
                    leave a lasting impression. Our web design solutions focus
                    on aesthetics, functionality, and seamless user experiences.
                  </p>
                </div>
                <div>
                  <h2>Logo Design</h2>
                  <p>
                    Build a strong brand identity with a distinctive and
                    memorable logo. Our design experts collaborate with you to
                    capture the essence of your business and convey it through a
                    compelling visual symbol.
                  </p>
                </div>
                <div>
                  <h2>Website Development</h2>
                  <p>
                    Bring your online vision to life with our custom website
                    development services. We specialize in creating responsive,
                    scalable, and feature-rich websites tailored to your
                    business needs.
                  </p>
                </div>
                <div>
                  <h2>Software Development</h2>
                  <p>
                    Transform your ideas into powerful software solutions. From
                    custom business applications to innovative mobile apps, our
                    software development team ensures cutting-edge solutions
                    that drive your business forward.
                  </p>
                </div>
                <div>
                  <h2>IT Consulting</h2>
                  <p>
                    Gain strategic insights and guidance with our IT consulting
                    services. We analyze your IT infrastructure, identify
                    opportunities for improvement, and provide tailored
                    recommendations to optimize your technology investments.
                  </p>
                </div>
                <div>
                  <h2>Network Security</h2>
                  <p>
                    Safeguard your digital assets with our robust network
                    security solutions. From firewalls to intrusion detection
                    systems, we implement comprehensive measures to protect your
                    business from cyber threats.
                  </p>
                </div>

                <div>
                  <h2>Cloud Computing</h2>
                  <p>
                    Unlock the full potential of cloud computing with our
                    tailored solutions. Enjoy the benefits of scalability,
                    flexibility, and data accessibility, as we help you migrate
                    and manage your applications in the cloud.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
