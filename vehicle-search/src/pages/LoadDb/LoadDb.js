import React, { useEffect, useState } from "react";
import { Container, Progress } from "reactstrap";
import { db } from "../../database";
import "./LoadDb.css";

export default props => {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Starting Load Sequence");

  const { setLoaded } = props;

  // Checks to see if the database is loaded
  const _checkDb = () => {
    setMessage("Checking database");
    db.info().then(info => {
      if (info.doc_count > 40000) {
        setMessage("Database populated");
        setProgress(100);
        setLoaded(true);
      } else {
        _loadDb();
      }
    });
  };

  const _fetchData = async () => {
    setMessage("Fetching car data");
    try {
      const response = await fetch("./all.json");
      return response.json();
    } catch (err) {
      // Do something for an error here
      console.log("Error Reading data " + err);
      return [];
    }
  };

  const _loadDb = async () => {
    setProgress(50);
    const data = await _fetchData();
    setProgress(60);
    setMessage("Inserting into database");
    db.bulkDocs(data)
      .then(() => {
        setMessage("Database populated");
        _createIndices();
      })
      .catch(err => {
        setMessage("Failed to insert data into database");
        setProgress(100);
        console.log(err);
      });
  };

  const _createIndices = async () => {
    setMessage("Creating index (1/3)");
    setProgress(70);
    await db
      .createIndex({
        index: {
          fields: ["make"]
        }
      })
      .then(result => {
        setProgress(80);
      })
      .catch(err => {
        console.log(err);
      });

    setMessage("Creating index (2/3)");
    await db
      .createIndex({
        index: {
          fields: ["make", "model"]
        }
      })
      .then(result => {
        setProgress(90);
      })
      .catch(err => {
        console.log(err);
      });

    setMessage("Creating index (3/3)");
    await db
      .createIndex({
        index: {
          fields: ["make", "model", "year"]
        }
      })
      .catch(err => {
        console.log(err);
        setProgress(100);
      });

    setMessage("Finished Initialization");
    setLoaded(true);
  };

  useEffect(() => {
    _checkDb();
  }, []);

  return (
    <Container className="d-flex w-100 h-100 justify-content-center align-items-center flex-column">
      <span className="py-3">{message}</span>
      <Progress className="w-50" color="primary" value={progress} />
    </Container>
  );
};
