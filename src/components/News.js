import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
export default function News(props) {
  const { article } = props;

  return (
    <div>
      <Card>
        <CardBody>
          <h2>{article.title}</h2>
          <CardText>{article.description}</CardText>
          <div>
            <CardImg width="150" src={article.urlToImage}></CardImg>
          </div>
          <a href={article.url}>Read More</a>
        </CardBody>
      </Card>
    </div>
  );
}
