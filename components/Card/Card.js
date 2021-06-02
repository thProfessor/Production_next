import React from "react";
import {  BsPlus } from "react-icons/bs";
import {
  Card__head,
  Card__head_add,
  Card__head_title,
  Card__head_add_title,
  Card__head_left,
  Icon_adj,
  Card__head_add_syb,
  Line,
  Card__body,
} from "../../styles/Card";
import Card from '@material-ui/core/Card';


function CardOuter(props) {
  return (
    <div class="card" style={{ width: "50rem" }}>
      <Card__head>
        <Card__head_left>
          <Icon_adj>
            {props.icon}
          </Icon_adj>
          <Card__head_title>{props.title}</Card__head_title>
        </Card__head_left>
        <Card__head_add onClick={props.addClick}>
          <Card__head_add_title >Add&nbsp;</Card__head_add_title>
          <Card__head_add_syb>
            <BsPlus />
          </Card__head_add_syb>
        </Card__head_add>
      </Card__head>
      <div>
        <Line></Line>
      </div>
      <Card__body>{props.children}</Card__body>      
     </div>
  );
}

export default CardOuter;
