import { Card, Col, Row, Text } from "@nextui-org/react";

export const Card4 = () => (
  <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text h3 color="white">
          Isaac Newton
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={"img/isaac.png"}
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Newton"
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
            Isaac Newton fue un físico, teólogo, inventor, alquimista y
            matemático inglés. Desde finales de 1664 trabajó intensamente en
            diferentes problemas matemáticos. Abordó entonces el teorema del
            binomio, a partir de los trabajos de John Wallis, y desarrolló un
            método propio denominado cálculo de fluxiones. Poco después regresó
            a la granja familiar a causa de una epidemia de peste bubónica.
          </Text>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
