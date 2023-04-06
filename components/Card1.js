import { Card, Col, Row, Text } from "@nextui-org/react";

export const Card1 = () => (
  <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text h3 color="white">
          Adrian Paenza
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={"img/adrian-paenza.png"}
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Adrian-Paenza"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" size={12}>
            Nacio en argentina Buenos Aires, fue la primer persona en el país en
            escribir una nota de opinión sobre lo lindo de hacer matemática en
            la vida cotidiana, tambien es periodista, desde entonces trabajó en
            diversos diarios y tuvo todas las series educativas de matemáticas
            del canal Encuentro. Hoy lleva adelante alterados por pi.
          </Text>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
