import styled from 'styled-components';

export const RegisterPage_Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Register_page_container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: middle;
  align-items: center;
  padding: 20px 10px 50px;
  
`;

export const Register_text = styled.div`
  margin: 70px 0;
  font-size: 24px;
  font-weight: 1000;
`;

export const Register_form_container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
`;

export const Input_Name = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid lightgrey;
  outline: none;
  margin-bottom: 10px;
  padding-left: 10px;
  &:focus {
    border: 1px solid grey;
  }
`;

export const NameCheckBtn = styled.button`
  width: 413px;
  height: 50px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
  margin: 5px 0px 20px 0px;
`;

export const Input_Email = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid lightgrey;
  outline: none;
  margin-bottom: 10px;
  padding-left: 10px;
  &:focus {
    border: 1px solid grey;
  }
`;

export const Input_PW = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid lightgrey;
  outline: none;
  margin-bottom: 10px;
  padding-left: 10px;
  &:focus {
    border: 1px solid grey;
  }
`;

export const Input_ConfirmPW = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid lightgrey;
  outline: none;
  margin-bottom: 10px;
  padding-left: 10px;
  &:focus {
    border: 1px solid grey;
  }
`;

export const Register_btn = styled.button`
  width: 413px;
  height: 50px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
  margin-top: 20px;
`;

export const NotRegister_btn = styled.div`
  width: 413px;
  height: 50px;
  line-height: 50px;
  background-color: #a9a9a9;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  text-align: center;
  margin-top: 20px;
`;

export const ErrMsg = styled.h3`
  color: firebrick;
  font-size: 14px;
  font-weight: 400;
`;
