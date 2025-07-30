import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Solutions = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Solutions | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Featured AI Solutions & Case Studies </h1>
            <p className="lead">Explore real-world applications of AI we've delivered or are capable of building — from automation and analytics to intelligent assistants.</p>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => (
            <div key={i} className="po_item">
              {/* Check if it's a video (embed) or an image */}
              {data.embed ? (
                <iframe
                  width="100%"
                  height="250"
                  src={data.embed + "?playsinline=0"}
                  title="YouTube Video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  style={{ touchAction: "manipulation", cursor: "pointer" }}
                ></iframe>
              ) : (
                <img src={data.img} alt="Project Thumbnail" />
              )}
              
              {/* Description and link */}
              <div className="content">
                <p>{data.description}</p>
                {data.link && (
                  <a href={data.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
