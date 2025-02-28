// src/hooks/useIndexedDB.js

import { useEffect, useState } from "react";
import { openDB } from "idb";

const useIndexedDB = () => {
  const [db, setDb] = useState(null);

  // Abre la base de datos IndexedDB al inicio
  useEffect(() => {
    const initDB = async () => {
      const database = await openDB("CitasDB", 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains("citas")) {
            db.createObjectStore("citas", { keyPath: "id", autoIncrement: true });
          }
        },
      });
      setDb(database);
    };

    initDB();
  }, []);

  // Función para almacenar una cita en IndexedDB
  const addCita = async (cita) => {
    if (db) {
      await db.put("citas", cita); // Añade una nueva cita
    }
  };

  // Función para obtener todas las citas de IndexedDB
  const getCitas = async () => {
    if (db) {
      return await db.getAll("citas");
    }
    return [];
  };

  return {
    addCita,
    getCitas,
  };
};

export default useIndexedDB;
