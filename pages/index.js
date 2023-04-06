import Layout from '@/components/Layout'
import Head from 'next/head';
import { useState } from 'react';
import { Grid, Card, Text, Input, Divider, Button, Image } from '@nextui-org/react'
import Swal from 'sweetalert2';
import { Card1 } from '@/components/Card1';
import { Card2 } from '@/components/Card2';
import { Card3 } from '@/components/Card3';
import { Card4 } from '@/components/Card4';

export default function Home() {
   const [inputs, setInputs] = useState({
     A: "",
     B: "",
     C: "",
   });
   const [stateA, setA] = useState("");
   const [stateB, setB] = useState("");
   const [stateC, setC] = useState("");
   const [resutaldo, setResultado] = useState(0);
   function calcularDelta(a, b, c) {
     return b * b - 4 * a * c;
   }
   const handleOnChage = (e) => {
     setInputs({ ...inputs, [e.target.name]: e.target.value });
     if (e.target.name === "A") {
       setA(e.target.value);
     }
     if (e.target.name === "B") {
       setB(e.target.value);
     }
     if (e.target.name === "C") {
       setC(e.target.value);
     }
     console.log(e.target.value, e.target.name);
   };

   const handleSubmit = () => {
     if (!stateA || !stateB || !stateC) {
       Swal.fire({
         icon: "warning",
         title: "¡Cuidado!",
         text: "Ingrese todos los campos",
       });
       return;
     } else if (stateA == 0) {
       Swal.fire({
         icon: "warning",
         title: "¡Cuidado!",
         text: "No se puede dividir por 0",
       });
       return;
     } else if (isNaN(stateA) || isNaN(stateB) || isNaN(stateC)) {
       Swal.fire({
         icon: "warning",
         title: "¡Cuidado!",
         text: "Ingrese solo numeros",
       });
     }
     let delta = calcularDelta(stateA, stateB, stateC);
     if (delta < 0) {
       delta = delta * -1;
       let x1 = ((stateB * -1) / (2 * stateA)) * 1;
       if (x1 > 0) {
         x1 = "+" + x1;
       }
       let x1i = Math.sqrt(delta) / (2 * stateA) + "i";
       let x2 = ((stateB * -1) / (2 * stateA)) * -1;
       if (x2 > 0) {
         x2 = "+" + x2;
       }
       let x2i = Math.sqrt(delta) / (2 * stateA) + "i";
       setResultado({ resA: x1, resB: x2, resAi: x1i, resBi: x2i });
       return;
     }
     let x1 = (-stateB + Math.sqrt(delta)) / (2 * stateA);
     let x2 = (-stateB - Math.sqrt(delta)) / (2 * stateA);
     setResultado({ resA: x1, resB: x2 });
    };
    const limpiar = () => {setResultado(0)}
  return (
    <Layout>
      <Head>
        <title>Calculadora de Bhaskara</title>
        <meta
          name="description"
          content="esta pagina sirve para calcular Bhaskara de forma facil"
        ></meta>
      </Head>
      <div>
        <Grid.Container justify="center" gap={2} className="hero" id='inicio'>
          <Grid xs={12} md={12} justify="center">
            <Card className='formulario' alignItems='center'>
              {" "}
              {/*bg:'transparent'}}> */}
              <Card.Header>
                <Grid justify="center" xs={12} md={12}>
                  <Text b>Formula de Bhaskara</Text>
                </Grid>
              </Card.Header>
              <Card.Divider css={{ mb: "10px" }} />
              <Card.Body css={{ py: "$10" }}>
                <Grid.Container xs={12}>
                  <Grid
                    css={{ mb: "20px" }}
                    xs={12}
                    md={4}
                    xl={4}
                    justify="space-around"
                  >
                    <Input
                      Placeholder="Valor de A"
                      type="text"
                      color="success"
                      bordered
                      status="default"
                      name="A"
                      id="stateA"
                      value={inputs.A}
                      clearable
                      helperText="Ingrese el valor de A"
                      onChange={(e) => {
                        handleOnChage(e);
                      }}
                    />
                  </Grid>
                  <Grid
                    css={{ mb:'20px'}}
                    xs={12}
                    md={4}
                    xl={4}
                    justify="space-around"
                  >
                    <Input
                      Placeholder="Valor de B"
                      type="text"
                      color="warning"
                      bordered
                      status="default"
                      name="B"
                      id="stateB"
                      value={inputs.B}
                      clearable
                      helperText="Ingrese el valor de B"
                      onChange={(e) => {
                        handleOnChage(e);

                      }}
                    />
                  </Grid>
                  <Grid
                    css={{ mb: "20px",}}
                    xs={12}
                    md={4}
                    xl={4}
                    justify="space-around"
                  >
                    <Input
                      Placeholder="Valor de C"
                      type="text"
                      color="primary"
                      bordered
                      status="default"
                      name="C"
                      id="stateC"
                      value={inputs.C}
                      clearable
                      helperText="Ingrese el valor de C"
                      onChange={(e) => {
                        handleOnChage(e);
                      }}
                    />
                  </Grid>
                </Grid.Container>
                <Grid xs={12} justify="space-around">
                  <Button type="button" onClick={() => handleSubmit()}>
                    Mandar
                  </Button>

                  <Button type="button" onClick={() => limpiar()}>
                    limpiar
                  </Button>
                </Grid>
                <Grid xs={12} justify="space-around">
                  <Text>
                    El valor de X1 es: {resutaldo.resAi} {resutaldo.resA}
                  </Text>
                  <Text>
                    El valor de X2 es: {resutaldo.resBi} {resutaldo.resB}
                  </Text>
                </Grid>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>

        <Grid.Container justify="center" gap={2} alignItems="center">
          <Grid xs={6} md={6} xl={6} justify="center" style={{textAlign:'center',padding:"10px"}}>
            <Text   h4>
              La Formula de Bhaskara permite determinar las raíces de un
              polinomio de segundo grado, fue deducida por el famoso matemático
              indio Bhaskaracharya, más conocido como Bhaskara II.
            </Text>
          </Grid>
          <Grid xs={6} md={6} xl={6} justify="center">
            <Image
              width={375}
              height={375}
              layout="intrinsic"
              src={"img/baskara.png"}
              alt="Bhaskara"
            />
          </Grid>
        </Grid.Container>

        <Grid.Container xs={12} md={12} xl={12} justify="center" id='mas-info'>
          <Grid xs={12} md={12} xl={12}>
            <Text h1>La formula de Bhaskara es la siguiente:</Text>
          </Grid>
        </Grid.Container>
        <Grid.Container>
          <Grid xs={12} md={12} xl={12} justify="center">
            <Card
              isPressable
              isHoverable
              variant="bordered"
              css={{
                mw: "400px",
                border: "none",
                bg: "white",
                mb: '50px'
              }}
            >
              <Card.Image
                width={375}
                height={375}
                layout="intrinsic"
                src={"img/formula-bhaskara.png"}
              />
            </Card>
          </Grid>
        </Grid.Container>

        <Grid.Container xs={12} md={12} xl={12} justify="center">
          <Grid xs={12} md={12} xl={12}>
            <Text h1>
              ¿Como saber cual es el a, b y c de una ecuacion cuadratica?
            </Text>
          </Grid>
        </Grid.Container>
        <Grid.Container gap={2}>
          <Grid xs={12} md={6} justify="center">
            <Card
              isPressable
              isHoverable
              variant="bordered"
              css={{
                mw: "400px",
                border: "none",
                bg: "white",
              }}
            >
              <Card.Image
                width={375}
                height={375}
                layout="intrinsic"
                src={"img/abc1.png"}
              />
            </Card>
          </Grid>
          <Grid xs={12} md={6} justify="center">
            <Card
              isPressable
              isHoverable
              variant="bordered"
              css={{
                mw: "400px",
                border: "none",
                bg: "white",
              }}
            >
              <Card.Image
                width={375}
                height={375}
                layout="intrinsic"
                src={"img/abc2.png"}
              />
            </Card>
          </Grid>

          <Grid.Container xs={12} md={12} xl={12} justify="center" css={{mb:'50px'}}>
            <Grid xs={12} md={12} xl={12} justify="center" >
              <Text h3>
                Esta imagen nos da un ejemplo de como hacerlo, recuerden que
                para hacer esto la ecuacion siempre tiene que estar igualada a
                0.
              </Text>
            </Grid>
          </Grid.Container>
        </Grid.Container>

        <Grid.Container gap={2} justify='center' alignContent='center' css={{mb:'50px'}}>
          <Grid.Container justify="center">
            <Grid xs={12} md={12} xl={12} justify="center">
              <Text h1>Igualación</Text>
            </Grid>
          </Grid.Container>
          <Grid.Container justify='center'>
            <Grid xs={12} md={6} justify="center" style={{textAlign:'center',padding:"10px"}}>
              <Text h3>
                Para aplicar este metodo tienes que igualar las 2 ecuaciones, es
                decir, ecuacion = ecuacion una vez que tenemos esto tenemos que
                pasar toda una ecuacion para el otro lado juntando las x, las x
                elevado a la 2 y los numeros de un lado, para poder igualarlo a
                0 y aplicar la formula de bhaskara.
              </Text>
            </Grid>
            <Grid xs={12} md={6} justify="center">
              <Card
                isPressable
                isHoverable
                variant="bordered"
                css={{
                  mw: "400px",
                  border: "none",
                  bg: "white",
                }}
              >
                <Card.Image
                  width={375}
                  height={375}
                  layout="intrinsic"
                  src={"img/igualacion.png"}
                />
              </Card>
            </Grid>
          </Grid.Container>
        </Grid.Container>

        <Grid.Container xs={12} md={12} xl={12} justify="center" id='matematicos'>
          <Grid xs={12} md={12} xl={12} justify="center">
            <Text h1>Matematicos reconocidos</Text>
          </Grid>
        </Grid.Container>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={4}>
            <Card1 />
          </Grid>
          <Grid xs={12} sm={6}>
            <Card2 />
          </Grid>
          <Grid xs={12} sm={6}>
            <Card3 />
          </Grid>
          <Grid xs={12} sm={4}>
            <Card4 />
          </Grid>
        </Grid.Container>
      </div>
    </Layout>
  );
}
