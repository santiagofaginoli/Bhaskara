import { Card, Col, Row, Text } from "@nextui-org/react";

export const Card2 = () => (
  <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text h3 color="white">
          Eduardo Sáenz de Cabezón
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={"img/cabezon.png"}
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Eduardo-Cabezon"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#fff" size={12}>
            Eduardo Sáenz de Cabezón es un matemático, profesor de Lenguajes y
            Sistemas Informáticos y también teólogo, aunque en la actualidad no
            ejerza como tal y reconocido especialista en monólogos científicos.
            Desarrolla su investigación en el área del álgebra computacional, a
            la que ha contribuido con 25 publicaciones de investigación y
            colaboraciones con matemáticos españoles y europeos como Henry P.
            Wynn. Tambien realiza una intensa labor de divulgación de las
            matemáticas mediante conferencias, espectáculos, charlas y talleres
          </Text>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
