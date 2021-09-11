import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    width: 300px;
    height: 150px;
    margin: 30px 50px;
    background: #edf0f1;
`;

const CalonImage = styled.div`
`;

const CalonName = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 20%;
`;

const NoCalon = styled.div`
`;

export default function Card(props) {
    return (
        <CardContainer className="card-container">
            <NoCalon>{props.no}</NoCalon>
            <CalonImage></CalonImage>
            <CalonName className="calon-name">Ahmad Zidan</CalonName>
        </CardContainer>
    )
}
