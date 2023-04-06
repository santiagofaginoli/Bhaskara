import { Card, Col, Row, Text } from "@nextui-org/react";

export const Card3 = () => (
  <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text h3 color="white">
          René Descartes
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={"img/rene.png"}
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
            René Descartes, fue un filósofo, matemático y físico francés
            considerado el padre de la geometría analítica y la filosofía
            moderna. Uno de los legados más perdurables de Descartes fue su
            desarrollo de la geometría cartesiana o analítica, que utiliza el
            álgebra para describir la geometría. Descartes inventó la convención
            de representar incógnitas en las ecuaciones con x , y , z y datos
            conocidos por a , b , c . También fue pionero en la notación
            estándar que usa superíndices para indicar los exponentes.Son
            conocidos los teoremas de Descartes acerca de los defectos
            angulares, teniendo similitudes con la teorema de Euler para
            poliedros y el teorema de los círculos de las cuatro tangentes.
          </Text>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
