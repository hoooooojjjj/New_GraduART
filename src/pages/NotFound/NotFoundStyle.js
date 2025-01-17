import styled from "@emotion/styled";
import {Link} from "react-router-dom";
export const Title = styled('h1')`
    color: black;
    text-decoration: none;
    margin: 30px;
    font-weight: bold;
    font-size: large;
`

export const LinkList = styled('ul')`
    color: grey;
    text-decoration: none;
    display: flex;
`

export const DepartmentLink = styled(Link)`
  color: gray;
  text-decoration: none;
  padding-right: 0.75dvw;
  padding-left: 0.75dvw;
  font-weight: normal;
  font-size: medium;

  &.active {
    color: black;
    font-weight: bold;
  }
  `