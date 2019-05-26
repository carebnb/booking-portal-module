import styled from 'styled-components';

const GuestPickerContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
  padding: 25px 16px;
  border-radius: 3px;
  background: rgb(255, 255, 255);
  color: #484848;
`;

const GuestCategoryDiv = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 25px;
  flex-direction: row;
  align-items: center;
`;

const GuestSubText = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #484848;
  margin-top: 5px;
`;

const CloseGuestDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const CloseGuestButton = styled.button`
  border: none;
  padding: 0;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #008489;
  cursor: pointer;
  outline: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ButtonContainer = styled.button`
  cursor: pointer;
  background: transparent;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: ${props => `1px solid rgba(0, 132, 137, ${props.opacity})`};

  &:focus {
    outline: none;
  }

  &:active {
    border-color: rgb(0, 132, 137);
    -webkit-box-shadow: 0 0 1px rgb(0, 132, 137);
    box-shadow: 0 0 3px rgb(0, 132, 137);
  }
`;

export {
  GuestPickerContainer,
  CloseGuestDiv,
  CloseGuestButton,
  GuestSubText,
  GuestCategoryDiv,
  ButtonContainer,
};
