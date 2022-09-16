import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import KnjigaInterface from "./components/KnjigaInterface";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Nav, Navbar, Row, Col, Container, Button} from "react-bootstrap";
import DodajKnjigo from "./components/DodajKnjigo";
import Header from "./components/Header";
import PrikazKnjiga from "./components/PrikazKnjiga";
import PrikazIndividualnaKnjiga from "./components/PrikazIndividualnaKnjiga";
import OsebaInterface from "./components/OsebaInterface";
import IzposojaKnjige from "./components/IzposojaKnjige";
import PrikazIzposojeneKnjige from "./components/PrikazIzposojeneKnjige";
import ZamujeneKnjige from "./components/ZamujeneKnjige";





function App() {

    const[seznamKnjig, setSeznamKnjig] = React.useState<KnjigaInterface[]>([]);
    const[seznamOseb, setSeznamOseb] = React.useState<OsebaInterface[]>([]);
    const[seznamZanrov, setSeznamZanrov] = React.useState<string[]>([]);



    const dodajKnjigo = (knjiga: KnjigaInterface) => {
        let seznamKnjigKopija: KnjigaInterface[] = Array.from(seznamKnjig);
        let seznamZanrovKopija: string[] = Array.from(seznamZanrov);
        seznamKnjigKopija.push(knjiga);
        seznamZanrovKopija.push(knjiga.zanr);
        setSeznamKnjig(seznamKnjigKopija);
        setSeznamZanrov(seznamZanrovKopija);
    }

    const dodajOsebo = (oseba: OsebaInterface) => {
        let seznamOsebNov: OsebaInterface[] = Array.from(seznamOseb);
        seznamOsebNov.push(oseba);
        setSeznamOseb(seznamOsebNov);
    }

    const vrniKnjigo = (id: number) => {
        let seznamKnjigKopija: KnjigaInterface[] = Array.from(seznamKnjig);
        seznamKnjigKopija[id].izposojena = false;
        setSeznamKnjig(seznamKnjigKopija);

        let seznamOsebKopija: OsebaInterface[] = Array.from(seznamOseb);
        seznamOsebKopija.map((oseba, index) => {
            if(oseba.id == id) {
                seznamOsebKopija.splice(seznamOsebKopija.indexOf(oseba), 1)
                setSeznamOseb(seznamOsebKopija);
            }
        })


    }

    const odstraniKnjigo = (id: number) => {

        let seznamKnjigKopija: KnjigaInterface[] = Array.from(seznamKnjig);
        seznamKnjigKopija.splice(seznamKnjigKopija.indexOf(seznamKnjigKopija[id]), 1);
        setSeznamKnjig(seznamKnjigKopija);

    }

    const podaljsaj = (id: number) => {
        let seznamOsebKopija: OsebaInterface[] = Array.from(seznamOseb);
        seznamOsebKopija.map((oseba, index) => {
            if(oseba.id == id) {
                oseba.datum.setDate(oseba.datum.getDate() + 7);
                setSeznamOseb(seznamOsebKopija);
            }
        })

    }





    return (
        <Router>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#"><Link to="/">Bibliotheka</Link></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#"><Link to="/dodajKnjigo">Dodaj knjigo</Link></Nav.Link>
                    <Nav.Link href="#"><Link to="/about">O nas</Link></Nav.Link>
                </Nav>
            </Navbar>

            <Switch>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path="/dodajKnjigo">
                    <Container>
                        <DodajKnjigo onAdd={dodajKnjigo}></DodajKnjigo>
                    </Container>
                </Route>
                <Route exact path="/">
                    <Header></Header>
                    <Container fluid>
                        <Row>
                            {seznamKnjig.map((knjiga, index) => {
                                return <PrikazKnjiga id={index} knjiga={knjiga} vrniKnjigo={vrniKnjigo} podaljsaj={podaljsaj} izbrisi={odstraniKnjigo}/>;
                            })}
                        </Row>

                    </Container>
                </Route>
                <Route exact path="/izposojene">
                    <Header></Header>
                    <Container fluid>
                        <Row>
                            {seznamKnjig.map((knjiga, index) => {
                                return <PrikazIzposojeneKnjige id={index} knjiga={knjiga} vrniKnjigo={vrniKnjigo} podaljsaj={podaljsaj} osebe={seznamOseb}/>;
                            })}
                        </Row>

                    </Container>
                </Route>
                <Route exact path="/zamujene">
                    <Header></Header>
                    <Container fluid>
                        <Row>
                            {seznamKnjig.map((knjiga, index) => {
                                return <ZamujeneKnjige id={index} knjiga={knjiga} vrniKnjigo={vrniKnjigo} podaljsaj={podaljsaj} osebe={seznamOseb}/>;
                            })}
                        </Row>
                    </Container>

                </Route>
                <Route exact path="/knjiga/:id">
                    <PrikazIndividualnaKnjiga knjige={seznamKnjig}></PrikazIndividualnaKnjiga>
                </Route>
                <Route exact path="/izposoja/:id">
                    <IzposojaKnjige knjige={seznamKnjig} onAdd={dodajOsebo}></IzposojaKnjige>


                </Route>

            </Switch>
            <Footer></Footer>
        </Router>
    );
}

export default App;