import styled from "styled-components";

export const FormContainer = styled.div `
width: 100%;
height: 100vh;
background-color: #010101;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: #fff;
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px 0px;
  input, textarea {
    width: 100%;
    color: #fff;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #229d95;
    text-align: center;
    padding: 15px;
    margin: 5px 0px;
    &:focus {
      border: 2px solid #229d95;
    }
  }
  input[type='submit'] {
    border: 2px solid #229d95;
    border-radius: 5px;
    margin-top: 15px;
    background-color: #229d95;
    transition: all 0.5s ease-in-out;
    &:hover {
      background-color: #00757d;
      border: 2px solid #00757d;
      transition: all 0.5s ease-in-out;
      cursor: pointer;
    }
  }
}
`

export const SubmitMessage = styled.div`
background-color: #229d95;
padding: 25px;
transition: all 0.5s ease-in-out;
&.hidden {
  display: none;
  transition: all 0.5s ease-in-out;
}
&.show {
  display: block;
  transition: all 0.5s ease-in-out;
}

`
export const SubmitErrorMessage = styled.div`
background-color: #ff0000;
padding: 25px;
transition: all 0.5s ease-in-out;
&.hidden {
  display: none;
  transition: all 0.5s ease-in-out;
}
&.show {
  display: block;
  transition: all 0.5s ease-in-out;
}

`