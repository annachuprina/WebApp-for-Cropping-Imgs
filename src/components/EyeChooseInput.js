import React  from "react"
import {useDispatch} from 'react-redux'
import Icon from "../components/Icon"
import styled from 'styled-components'
import {uloadimg} from "../store/actions"

const Container = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
`
const CustomInput = styled.input `
  opacity: 0;
  visibility: hidden;
  position: absolute;
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

const CustomLable = styled.label`
  border: ${props => props.page==="LeftEyePage" ? "4px solid white" :  "4px solid black"};
  box-sizing: border-box;
  border-radius: 15px;
  height: 150px;
  width: 300px;
  position: absolute;
  top: 25%;
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


const EyeChooseInput = (props) => {
    const dispatch = useDispatch()
    const onChange = (event) => {
      event.preventDefault();
      const { files } = event.target;
      console.log(files[0])
      const myFileItemReader = new FileReader()
      myFileItemReader.addEventListener("load", ()=>{
        const file = myFileItemReader.result
        if(file){
          dispatch(
            uloadimg(window.URL.createObjectURL(files[0]),
            file,
            files[0].size, 
            files[0].type, 
            true, 
            props.page,
            )
          )
        }
      }, false)
      myFileItemReader.readAsDataURL(files[0])
    }
    return ( 
      <Container>
        <Icon color="black"/>
        <CustomInput id='ImageInput' type="file" onChange={onChange} accept="image/*" page={props.page}/>
        <CustomLable htmlFor='ImageInput'  value={props.value} page={props.page}>
          <CustomText page={props.page}>{props.value}
          </CustomText>
        </CustomLable>
      </Container>
    )
}
export default EyeChooseInput