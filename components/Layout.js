import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Text,
  Grid,
  Card,
  Checkbox,
  Input,
  Navbar,
  Dropdown,
  Button,
  Collapse,
  Image,
  Spacer,
  Switch,
  changeTheme,
  useTheme,
  Link,
  Popover,
} from "@nextui-org/react";
import { FaShoppingCart, FaTrash, FaSun, FaMoon } from "react-icons/fa";
import Head from "next/head";

const Layout = ({ children }) => {
  const { type, isDark } = useTheme();

  const handleChange = () => {
    const nextTheme = isDark ? "light" : "dark";
    window.localStorage.setItem("data-theme", nextTheme); // you can use any storage
    changeTheme(nextTheme);
  };
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
      </Head>
      <Navbar isBordered variant="sticky" css={{ mb: "12px" }}>
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            DivGeeks
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight"
        >
          <Navbar.Link href="#inicio">Inicio</Navbar.Link>
          <Navbar.Link href="#mas-info">Mas Informacion</Navbar.Link>
          <Navbar.Link href="#matematicos">Matematicos Famosos</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <div>
            <Switch
              checked={isDark}
              color="secondary"
              onChange={handleChange}
              size="xl"
              iconOn={<FaMoon filled />}
              iconOff={<FaSun filled />}
            />
          </div>
        </Navbar.Content>
        <Navbar.Collapse>
          <Navbar.CollapseItem>
            <Link css={{ color: "violet" }} href="#inicio">
              Inicio
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link css={{ color: "violet" }} href="#mas-info">
              Mas Informacion
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link css={{ color: "violet" }} href="#matematicos">
              Matematicos Famosos
            </Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
      {children}
      <Grid css={{ mt: "20px" }} className="subrayado"></Grid>
      <Navbar css={{ mt: "20px" }}>
        <Grid css={{ mb: "40px" }}>
          <Popover>
            <Popover.Trigger>
              <Button auto flat>
                Integrantes
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <Text css={{ p: "$4" }}>-Nicolas Pereyra</Text>
              <Text css={{ p: "$4" }}>-Lautaro Faure</Text>
              <Text css={{ p: "$4" }}>-Santiago Faginoli</Text>
            </Popover.Content>
          </Popover>
        </Grid>
        <Grid>DivGeeks</Grid>
      </Navbar>
    </>
  );
};

export default Layout;
