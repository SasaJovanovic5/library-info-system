import React from "react";
import KnjigaInterface from "./KnjigaInterface";
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';


interface PrikazKnjigaProps {
    id: number,
    knjiga: KnjigaInterface,
    vrniKnjigo: (id: number) => any,
    podaljsaj: (id: number) => any,
    izbrisi: (id: number) => any

}

function PrikazKnjiga(props: PrikazKnjigaProps) {

    const vrniKnjigo =() => {
      props.vrniKnjigo(props.id);
    };

    const podaljsaj =() => {
        props.podaljsaj(props.id);
    };

    const izbrisi = () => {
        props.izbrisi(props.id);
    };


    return (

        <Col sm={2} style={{marginBottom: 10, marginTop: 10}}>
            <Card>
                <Card.Img variant="top" src={props.knjiga.slika}></Card.Img>
                <Card.Body>
                    <Card.Title><Link to={"/knjiga/" + props.id}>{props.knjiga.naziv}</Link></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.knjiga.avtor}</Card.Subtitle>
                    <Row>
                        <Col>
                            <Link to={"/knjiga/" + props.id}><Button variant="primary">Več</Button></Link>

                        </Col>
                        {props.knjiga.izposojena == false &&
                            <Col>
                                <Button variant="danger" onClick={izbrisi}>Izbriši</Button>
                            </Col>
                        }
                        {props.knjiga.izposojena == true &&
                            <Col>
                                <Button variant="primary" onClick={vrniKnjigo}>Vrni</Button>
                            </Col>
                        }
                    </Row>
                    {props.knjiga.izposojena == false &&
                        <Row>
                            <Col style={{marginBottom: 10, marginTop: 10}}>
                                <Link to={"/izposoja/" + props.id}><Button variant="primary">Izposodi</Button></Link>
                            </Col>
                        </Row>
                    }
                    {props.knjiga.izposojena == true &&
                        <Row>
                            <Col style={{marginBottom: 10, marginTop: 10}}>
                                <Button onClick={podaljsaj} variant="primary">Podaljsaj</Button>
                            </Col>
                        </Row>

                    }

                </Card.Body>
            </Card>
        </Col>
    );

}

export default PrikazKnjiga;