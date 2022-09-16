import React from "react";
import KnjigaInterface from "./KnjigaInterface";
import { Link } from 'react-router-dom';
import {Row, Col, Card, Button, Container, Alert} from 'react-bootstrap';
import OsebaInterface from "./OsebaInterface";


interface PrikazIzposojeneKnjigeProps {
    id: number,
    knjiga: KnjigaInterface,
    vrniKnjigo: (id: number) => any,
    podaljsaj: (id: number) => any,
    osebe: OsebaInterface[]


}

function PrikazIzposojeneKnjige(props: PrikazIzposojeneKnjigeProps) {

    const vrniKnjigo =() => {
        props.vrniKnjigo(props.id);
    };

    const podaljsaj =() => {
        props.podaljsaj(props.id);
    };



    let imeOsebe = null;
    let priimekOsebe = null;
    let naslovOsebe = null;
    let kontaktOsebe = null;
    let datumVrnitveDan = null;
    let datumVrnitveMesec = null;
    let datumVrnitveLeto = null;
    let datumVrnitve = null;



    const knjigaBoolean = props.knjiga.izposojena;

    props.osebe.map((oseba, index) => {
        if(oseba.id == props.id) {
            imeOsebe = oseba.ime;
            priimekOsebe = oseba.priimek;
            naslovOsebe = oseba.naslov;
            kontaktOsebe = oseba.kontakt;
            datumVrnitveDan = oseba.datum.getDate();
            datumVrnitveMesec = oseba.datum.getMonth() + 1;
            datumVrnitveLeto = oseba.datum.getFullYear();

            datumVrnitve = datumVrnitveDan + '/' + datumVrnitveMesec + '/' + datumVrnitveLeto;






        }
    })

    if(knjigaBoolean) {

        return (

            <Col sm={2} style={{marginBottom: 10, marginTop: 10}}>
                <Card>
                    <Card.Img variant="top" src={props.knjiga.slika}></Card.Img>
                    <Card.Body>
                        <Card.Title><Link to={"/knjiga/" + props.id}>{props.knjiga.naziv}</Link></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props.knjiga.avtor}</Card.Subtitle>
                        <Card.Text>
                            {imeOsebe} {priimekOsebe}<br/>
                            Naslov: {naslovOsebe} <br/>
                            Kontakt: {kontaktOsebe} <br/>
                            Rok vrnitve: {datumVrnitve}
                        </Card.Text>
                        <Row>
                            <Col>
                                <Link to={"/knjiga/" + props.id}><Button variant="primary">Več</Button></Link>

                            </Col>

                            {props.knjiga.izposojena == true &&
                            <Col>
                                <Button variant="primary" onClick={vrniKnjigo}>Vrni</Button>
                            </Col>
                            }
                        </Row>
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

    return(
        <Row>
            <Col style={{marginBottom: 50, marginTop: 50}}>

            </Col>
        </Row>

    );






}

export default PrikazIzposojeneKnjige;