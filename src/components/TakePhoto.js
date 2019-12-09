import React  from "react"
import {useDispatch} from 'react-redux'
import Icon from "../components/Icon"
import styled from 'styled-components'
import {uloadimg} from "../store/actions"
import Webcam from "react-webcam";

const Container = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
`

const CustomText = styled.div`
  color: ${props => props.page==="LeftEyePage" ? "#fff":"#000"};
  font-size: 20px;
  text-align: center;
  @media (max-width: 768px) {
    margin: 15% auto;
  }
  @media (min-width: 768px) {
    margin: 20% auto;
  }
`

const CustomButton = styled.button`
  border: ${props => props.page==="LeftEyePage" ? "4px solid white" :  "4px solid black"};
  box-sizing: border-box;
  background-color:  ${props => props.page==="LeftEyePage" ? "black" :  "white"};
  border-radius: 15px;
  height: 150px;
  width: 300px;
  position: absolute;
  top: 55%;
  @media (max-device-width: 768px) {
    left: 15%;
    height: 100px;
    width: 250px;
  }
  @media (min-width: 800px) {
    left: ${props => props.page==="LeftEyePage" ? "65%" : "15%"};
    height: 150px;
    width: 300px;
  }
`;


const TakePhoto = (props) => {
    const dispatch = useDispatch()
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
    const webcamRef = React.useRef(null);
   
    const onChange = (event) => {
        event.preventDefault();
        const imageSrc = webcamRef.current.getScreenshot();
        if(imageSrc){
            dispatch(
                uloadimg(imageSrc,
                imageSrc,
                imageSrc.size, 
                imageSrc.type, 
                true, 
                props.page,
                )
            )
        }
    }
    return ( 
      <Container>
        <Icon/>
        <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
        />
        <CustomButton onClick={onChange} htmlFor='ImageInput'  value={props.value} page={props.page}>
          <CustomText page={props.page}>{props.value}
          </CustomText>
        </CustomButton>
      </Container>
    )
}
export default TakePhoto