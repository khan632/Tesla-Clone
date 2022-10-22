import React from 'react'
import Fade from 'react-reveal/Fade';

import styled from 'styled-components'

const Section = ({ title, description, backgroundImg, leftBtnText, rightBtnText }) => {
  return (
    <Wrap bgImg={backgroundImg}>
        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                {
                    description && <p>{description}</p>
                }   
            </ItemText>
        </Fade>

        <Button>
            <ButtonGroup>
                <Fade left>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                </Fade>
                <Fade right>
                    {
                        rightBtnText && 
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </Fade>
                
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg" />
        </Button>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImg}")`};
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 3rem;

    @media (max-width: 768px){
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width:256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin-left: 20px;
    @media (max-width: 768px){
        margin-bottom: 2rem;
    }
`

const RightButton = styled(LeftButton)`
    background-color: #fff;
    color: rgba(23, 26, 32, 0.8);

`

const DownArrow = styled.img`
    margin-bottom: 1.5rem;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Button = styled.div``;