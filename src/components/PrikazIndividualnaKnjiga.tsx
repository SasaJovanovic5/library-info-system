import React from "react";
import KnjigaInterface from "./KnjigaInterface";
import {Link, useParams} from 'react-router-dom';
import { Row, Col, Card, Button, Container , Image} from 'react-bootstrap';

interface PrikazIndividualnaKnjigaProps {
    knjige: KnjigaInterface[]

}

function PrikazIndividualnaKnjiga(props: PrikazIndividualnaKnjigaProps) {
    const { id }: any = useParams();
    const knjiga: KnjigaInterface = props.knjige[id];

    return (
        <Container style={{marginBottom: 10, marginTop: 10}}>
            <Row>
                <Col>
                    <Image src={knjiga.slika} thumbnail />
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <h2><b>{knjiga.naziv}</b></h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>{knjiga.avtor}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul>
                                <li><b>Zanr: </b> {knjiga.zanr}</li>
                                <li><b>Stevilo strani: </b>{knjiga.stStrani}</li>
                                <li><b>IBAN: </b>{knjiga.iban}</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default  PrikazIndividualnaKnjiga;