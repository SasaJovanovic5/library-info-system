import React from "react";
import {Button, Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Container>
            <Row style={{marginTop: 10}}>
                <Col>
                    <Link to="/"><Button>Vse knjige</Button></Link>
                </Col>
                <Col>
                    <Link to="/izposojene"><Button>Izposojene knjige</Button></Link>
                </Col>
                <Col>
                    <Link to="/zamujene"><Button>Zamujene knjige</Button></Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;