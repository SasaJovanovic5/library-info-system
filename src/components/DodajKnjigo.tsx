import React from 'react';
import KnjigaInterface from "./KnjigaInterface";
import {Button, Row, Form, Col} from "react-bootstrap";

interface KnjigaProps {
    onAdd: (knjiga: KnjigaInterface) => any;
}



function DodajKnjigo(props: KnjigaProps) {
    const[naziv, setNaziv] = React.useState("");
    const[avtor, setAvtor] = React.useState("");
    const[zanr, setZanr] = React.useState("");
    const[stStrani, setStStrani] = React.useState(0);
    const[iban, setIban] = React.useState(0);
    const[slika, setSlika] = React.useState("");

    const nazivChange = (element: React.ChangeEvent<HTMLInputElement>) => {
      setNaziv(element.target.value);
    };

    const avtorChange = (element: React.ChangeEvent<HTMLInputElement>) => {
        setAvtor(element.target.value);
    };

    const zanrChange = (element: React.ChangeEvent<HTMLInputElement>) => {
        setZanr(element.target.value);
    };

    const stStraniChange = (element: React.ChangeEvent<HTMLInputElement>) => {
        setStStrani(Number(element.target.value));
    };

    const ibanChange = (element: React.ChangeEvent<HTMLInputElement>) => {
        setIban(Number(element.target.value));
    };

    const slikaChange = (element: React.ChangeEvent<HTMLInputElement>) => {
        if (element.target.files) {
            let datoteka: File = element.target.files[0];

            let fileReader = new FileReader();
            fileReader.onloadend = () => {
                setSlika(String(fileReader.result));
            }
            fileReader.readAsDataURL(datoteka);
        }
    };

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        let knjiga: KnjigaInterface = {
            naziv: naziv,
            avtor: avtor,
            zanr: zanr,
            stStrani: stStrani,
            iban: iban,
            slika: slika,
            izposojena: false

        };
        props.onAdd(knjiga);
    };

    return(
        <Row>
            <Col>
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label className="naziv">Naziv:</Form.Label>
                        <Form.Control type="text" value={naziv} onChange={nazivChange}></Form.Control>
                        <Form.Label>Avtor:</Form.Label>
                        <Form.Control type="text" value={avtor} onChange={avtorChange}></Form.Control>
                        <Form.Label>Zanr:</Form.Label>
                        <Form.Control type="text" value={zanr} onChange={zanrChange}></Form.Control>
                        <Form.Label>St. strani:</Form.Label>
                        <Form.Control type="number" value={stStrani} onChange={stStraniChange}></Form.Control>
                        <Form.Label>IBAN:</Form.Label>
                        <Form.Control type="text" value={iban} onChange={ibanChange}></Form.Control>
                        <Form.Label>Slika:</Form.Label>
                        <Form.Control type="file" accept={"image/*"} onChange={slikaChange}></Form.Control>

                    </Form.Group>
                    <Button type="submit">Dodaj</Button>
                </Form>
            </Col>

        </Row>

    );
}

export default DodajKnjigo;