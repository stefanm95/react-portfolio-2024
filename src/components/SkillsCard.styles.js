import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 300px;
  justify-content: flex-end;
  border: 1px solid grey;
  padding: 10px 10px;
  width: auto;
`;

export const Icon = styled.img`
  width: 60px;
  height: 60px;
  background-color: transparent;
  /* border-radius: 50%; */
  position: relative;
  margin-left: 16px;
  bottom: 10px;
`;
export const BoxText = styled.div`
  position: relative;
  font-size: 24px;
  line-height: 1.2;
  bottom: 5px;
  left: 20px;
  /* padding: 20px; */
  letter-spacing: 0.02rem;
  /* text-align: center; */
  color: #dedede;
`;

export const BoxSubText = styled.div`
  font-size: 12px;
  line-height: 1.5;
  padding: 20px;
  letter-spacing: 0.05rem;
  text-align: start;
  color: #dedede;
  position: relative;
  top: 4px;
`;
