import { Col, Container, Row } from "react-bootstrap";
const Blogs = () => {
  return (
    <div>
      <Container>
        <Row sm={12} md={12} lg={12}>
          <article>
            <Col>
              <h3 className="my-3">#Javascript Vs NodeJS</h3>
              <div>
                <h4>Javascript:</h4>
                <ul>
                  <li>
                    Javascript is programming language that's is used in
                    website.
                  </li>
                  <li>It's used for font-end development</li>
                  <li>It's running on client-side and website.</li>
                  <li>Js is playing and capable of html DOM</li>
                  <li>
                    Since js is programming language and created by C++ and some
                    frameworks and library like React,Vue,Angular etc.
                  </li>
                </ul>
              </div>
              <div>
                <h4>NodeJS:</h4>
                <ul>
                  <li>
                    NodeJs is JavaScript runtime that's is used in web-server
                  </li>
                  <li>It's used for Back-end development</li>
                  <li>It's running on server side and Terminal</li>
                  <li>NodeJs is not capable of html DOM</li>
                  <li>
                    It's Server side running environment that's internal process
                    control V8 Engine.
                  </li>
                </ul>
              </div>
            </Col>
          </article>
          <article>
            <Col>
              <h3 className="my-3">#SQL Vs noSQL</h3>
              <div>
                <h4>SQL:</h4>
                <ul>
                  <li>It is relation Database that called (RDBMS)</li>
                  <li>SQL database is fixed and Static Database management.</li>
                  <li>
                    It's performance and Consistency is maintained so difficult.
                  </li>
                  <li>SQL database is data schema is vertically scalable.</li>
                  <li>
                    SQL database likes Oracle,MySQL ,PostgreSQL and others.
                  </li>
                </ul>
              </div>
              <div>
                <h4>noSQL:</h4>
                <ul>
                  <li>
                    It is not relation Database that called randomly
                    distributed.
                  </li>
                  <li>NoSQL database is Dynamic Database management.</li>
                  <li>
                    It's performance and Consistency is maintained so easy.
                  </li>
                  <li>noSQL database is data is horizontally scalable.</li>
                  <li>NoSQL database likes MongoDB,GraphQL and others.</li>
                </ul>
              </div>
            </Col>
          </article>
          <article>
            <h3 className="my-3">
              #What is the purpose of jwt and how does it work?
            </h3>
            <h6>
              JWT means that Json Web Token.jwt gives 2 access tokens that is
              primary access token and another refresh access token.It's mainly
              used for security purposes 2 partition -a client side and server
              side.It's used signIn crypto algorithms and auto generated tokens
              and limited times in users.There is no user sign the claims
              without tokens.
            </h6>
          </article>
        </Row>
      </Container>
    </div>
  );
};

export default Blogs;
