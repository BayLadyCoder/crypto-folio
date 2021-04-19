import styled from "styled-components";

export const FormWrapper = styled.div`
  margin-top: 30px;
`;

export const Form = styled.form`
  width: 900px;
  display: flex;
  justify-content: center;
  background-color: #fff;
`;

export const FormLeftContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #eee;
  padding: 20px;
`;
export const FormRightContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #ccc;
  padding: 20px;
`;

export const FormTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const AddCoinsInput = styled.input`
  width: 100%;
  padding: 5px 10px;
  margin-bottom: 10px;
`;

export const AddCoinBtn = styled.button`
  padding: 10px 20px;
`;
