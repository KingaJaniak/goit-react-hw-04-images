import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Header = styled.header`
  margin: auto;
`;

export const Form = styled.form`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 10px;
  display: flex;
`;

export const Button = styled.button`
  display: block;
  margin: 0;
  padding: 10px;
  background-color: lightcoral;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
`;
export const BtnLoader = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px;
  background-color: lightcoral;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
`;

export const Label = styled.span`
  height: 38px;
`;

export const Input = styled.input`
  display: inline-block;
`;

export const UlList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 20px;
`;

export const LiList = styled.li`
  display: grid;
`;

export const ModalWrapper = styled.div`
  max-width: 90%;
  max-height: 90%;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ImgSmall = styled.img`
  width: 300px;
  height: 200px;
`;

export const AppWrapper = styled.div`
  margin: 20px;
`;
