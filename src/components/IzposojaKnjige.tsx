import React from "react";
import OsebaInterface from "./OsebaInterface";
import KnjigaInterface from "./KnjigaInterface";
import { useParams } from "react-router-dom";
import {Row, Col, Container, Button, Form} from "react-bootstrap";

interface OsebaProps {
    knjige: KnjigaInterface[],
    onAdd: (oseba: OsebaInterface) => any;
}

function IzposojaKnjige(props: OsebaProps) {
    const { id }: any = useParams();
    const knjiga: KnjigaInterface = props.knjige[id];
    const[ime, setIme] = React.useState("");
    const[priimek, setPriimek] = React.useState("");
    const[naslov, setNaslov] =React.useState("");
    const[kontakt, setKontakt] = React.useState(0);

    const imeChange = (element: React.ChangeEvent<HTMLInputElement>) => {
        setIme(element.target.value);
    };

    const priimekChange = (element: React.ChangeEvent<HTMLInputElement>) => {
        setPriimek(element.target.value);
    };

    const naslovChange = (element: React.ChangeEvent<HTMLInputElement>) => {
        setNaslov(element.target.value);
    };

    const kontaktChange = (element: React.ChangeEvent<HTMLInputElement>) => {
        setKontakt(Number(element.target.value));
    };





    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        let datum = new Date();
        let danasnjiDatum = Date.now();
        datum.setDate(datum.getDate() + 7);

        let oseba: OsebaInterface = {
            ime: ime,
            priimek: priimek,
            naslov: naslov,
            kontakt: kontakt,
            id: id,
            datum: datum
        };
        knjiga.izposojena = true;
        props.onAdd(oseba);
    };

    return(
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Label>Ime: </Form.Label>
                            <Form.Control type="text" value={ime} onChange={imeChange}></Form.Control>
                            <Form.Label>Priimek: </Form.Label>
                            <Form.Control type="text" value={priimek} onChange={priimekChange}></Form.Control>
                            <Form.Label>Naslov: </Form.Label>
                            <Form.Control type="text" value={naslov} onChange={naslovChange}></Form.Control>
                            <Form.Label>Kontakt: </Form.Label>
                            <Form.Control type="number" value={kontakt} onChange={kontaktChange}></Form.Control>
                        </Form.Group>
                        <Button type="submit">Dodaj</Button>

                    </Form>
                </Col>
            </Row>
        </Container>

    );
}

export default IzposojaKnjige;