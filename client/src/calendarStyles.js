import styled from 'styled-components';

const CalendarContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: 58px;
  left: 0px;
  border: 1px solid rgb(228, 231, 231);
  background: rgb(255, 255, 255);
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between | center;
  margin-top: 5px;
  border-radius: 3px;
`;

const CalendarTable = styled.table`
  border-collapse: collapse;
`;

const HeaderButton = styled.div`
  cursor: pointer;
  font-family: Roboto, sans-serif;
  width: 35px;
  height: 30px;
  color: rgb(117, 117, 117);
  border: 1px solid rgb(228, 231, 231);
  border-radius: 3px;
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: rgb(117, 117, 117);
  }
`;

const MonthYearHeader = styled.td`
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: center;
  color: rgb(72, 72, 72);
`;

const WeekdayHeader = styled.th`
  font-weight: 400;
  font-size: 12px;
  font-family: Roboto, sans-serif;
  text-align: center;
  color: rgb(117, 117, 117);
  width: 40px;
  padding-bottom: 3px;
  padding-top: 15px;
`;

const NADayGrid = styled.td`
  font-size: 12px;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(228, 231, 231);
  text-align: center;
  color: rgb(216, 216, 216);
  width: 38px;
  height: 38px;
  text-decoration: line-through;
`;

const DayGrid = styled.td`
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  background: ${(props) => {
    if (props.select.color) {
      return 'rgb(0, 166, 153)';
    }
    return 'rgb(255, 255, 255)';
  }};
  border: ${(props) => {
    if (props.select.color) {
      return '1px solid rgb(0, 166, 153)';
    }
    return '1px solid rgb(228, 231, 231)';
  }};
  text-align: center;
  color: ${(props) => {
    if (props.select.color) {
      return 'rgb(255, 255, 255)';
    }
    return 'rgb(72, 72, 72)';
  }};
  pointer-events: ${(props) => {
    if (props.select.color) {
      return 'none';
    }
    return 'auto';
  }};
  width: 38px;
  height: 38px;

  &:hover {
    background: ${props => (props.select.hover ? 'rgb(180, 241, 235)' : 'rgb(228, 231, 231)')};
    color: ${props => (props.select.hover ? 'rgb(255, 255, 255)' : 'rgb(72, 72, 72)')};
  }
`;

const ClearDatesDiv = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ClearDatesButton = styled.button`
  margin-right: 15px;
  border: none;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  color: #008489;
  cursor: pointer;
  outline: none;

  &:hover {
    text-decoration: underline;
  }
`;

export {
  CalendarTable,
  HeaderButton,
  MonthYearHeader,
  WeekdayHeader,
  DayGrid,
  NADayGrid,
  CalendarContainer,
  ClearDatesDiv,
  ClearDatesButton,
};
