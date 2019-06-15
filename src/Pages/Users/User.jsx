import React, {Component} from "react";
import {getUserbyUsername} from "../../api";
import DisplaySingleUser from "../../Components/Users/DisplaySingleUser";
import ArticleIndex from "../Articles/ArticleIndex";
import {Container, Row, Col} from "react-bootstrap";
import PageTitle from "../../Components/Title/PageTitle";
import {navigate} from "@reach/router";

class User extends Component {
  state = {singleUser: {}};

  componentDidMount() {
    getUserbyUsername(this.props.username)
      .then(singleUser => {
        this.setState({singleUser});
      })
      .catch(err => {
        navigate("/error");
      });
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <section>
          <Container>
            <Row>
              <Col>
                <PageTitle>User Profile</PageTitle>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col md="auto mb-4">
                {this.state.singleUser && (
                  <DisplaySingleUser singleUser={this.state.singleUser} />
                )}
              </Col>
              <Col>
                <ArticleIndex author={this.props.username} />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default User;
