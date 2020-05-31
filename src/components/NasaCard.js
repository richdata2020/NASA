import React from "react";
import ReactPlayer from 'react-player'
import { Button } from 'reactstrap';
import styled from 'styled-components'
import { Row, Col } from "reactstrap";

const NasaContainer = styled.div`
    margin: 5% 10% 10% 10%; 
`
const ButtonsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgba(63, 63, 63, 0.6);
`

const Img = styled.img`
    width: 100%;
`;

const NasaData = styled.div`
    background-color: rgba(63, 63, 63, 0.9);
`

const NasaDes = styled.div`
    padding-right: 25px;
    text-align: justify;
    @media (max-width: 1000px) {
        padding-right: 0px;
        padding: 0 5%;
    }
`

const NasaCard = props => {

    var imgOrVideoPlayer;
if (props.data.hdurl) {
    imgOrVideoPlayer = <Img src = {props.data.hdurl} alt={"NASA's best capture of the day!"} />
}

else if (props.data.url) {
    imgOrVideoPlayer = <ReactPlayer url={props.data.url} playing />
}
    return (
        <NasaContainer>
            <ButtonsDiv>
                <Button onClick={props.dateBackward}><i className="far fa-arrow-alt-circle-left fa-2x"></i></Button>
                <Button onClick={props.dateForward}><i className="far fa-arrow-alt-circle-right fa-2x"></i></Button>
            </ButtonsDiv>
            <div className="mt-5">
            <NasaData>
                <Row>
                        <Col xl="6" md="12" xs="12" >{imgOrVideoPlayer}</Col>
                        <Col xl="6" md="12" xs="12">
                            <NasaDes>
                                <h2>{props.data.title}</h2>
                                <h3>{props.data.date}</h3><br/>
                                <p>{props.data.explanation}</p>
                            </NasaDes>
                        </Col>
                </Row>
                </NasaData>
            </div>
        </NasaContainer>
    )
}
export default NasaCard;