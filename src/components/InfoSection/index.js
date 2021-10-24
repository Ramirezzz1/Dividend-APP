import React from 'react'
import { Button } from 'react-scroll'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements'

const InfoSection = () => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                     <TextWrapper>
                         <TopLine>{TopLine}</TopLine>
                         <Heading>{headline}</Heading>
                         <Subtitle>Subtitle</Subtitle>
                         <BtnWrap>
                             <Button to="home"/>
                         </BtnWrap>
                     </TextWrapper>
                    </Column1>
                    <Column2>
                     <ImgWrap>
                      <Img/>
                     </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
            
        </>
    )
}

export default InfoSection