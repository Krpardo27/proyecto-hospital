import React from "react";
import { render, screen } from "@testing-library/react";
import { test, expect, beforeEach } from "@jest/globals";
import "@testing-library/jest-dom";
import Servicios from "../components/Servicios";

// Configurar jest-fetch-mock
import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks(); // Reinicia los mocks antes de cada prueba
});

test("muestra los Servicios del hospital", async () => {
  // Simular la respuesta de fetch con la estructura correcta
  fetchMock.mockResponseOnce(
    JSON.stringify([{ id: 1, servicio: "Urgencias", imagen: "imagen.png" }])
  );

  render(<Servicios />);

  // Verificar que el texto se renderiza correctamente
  const servicio = await screen.findByText("Urgencias");
  expect(servicio).toBeInTheDocument();
});