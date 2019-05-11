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
    setMessage('Checking database')
    db.info().then(function(info) {
      console.log(info);
      if (info.doc_count > 40000) {
        setMessage('Database populated')
        setProgress(100)
        setLoaded(true);
      } else {
        _loadDb();
      }
    });
  };

  const _fetchData = () => {
    setMessage('Fetching car data')
    return fetch('./all.json').then(response => {
        console.log(response);
        return response.json();
      }).catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
        return []
      });
  }

  const _loadDb = async () => {
    setProgress(50)
    const data = await _fetchData();
    setProgress(60)
    setMessage('Inserting into database')
    db.bulkDocs(data)
      .then(() => {
        console.log('Finished loading db')
        setMessage('Database populated')
        _createIndices();
      })
      .catch((err)=> {
        setMessage('Failed to insert data into database')
        setProgress(100)
          console.log(err)
      });
  };

  const _createIndices = async () => {
      setMessage('Creating index (1/3)')
      setProgress(70)
    await db.createIndex({
        index: {
          fields: ["make"]
        }
      })
        .then(function(result) {
          console.log(`Created make index`);
          setProgress(80);
        })
        .catch(function(err) {
          console.log(err);
        });
  
        setMessage('Creating index (2/3)')
      await db.createIndex({
        index: {
          fields: ["make", "model"]
        }
      })
        .then(function(result) {
          console.log(`Created make, model index`);
          setProgress(90);
        })
        .catch(function(err) {
          console.log(err);
        });
  
    setMessage('Creating index (3/3)')
      await db.createIndex({
        index: {
          fields: ["make", "model", "year"]
        }
      })
        .then(function(result) {
          console.log(`Created make, model, year index`);
        })
        .catch(function(err) {
          console.log(err);
          setProgress(100);
        });

        setMessage('Finished Initialization')    
    setLoaded(true)

  
  };

  useEffect(() => {
      _checkDb()
  }, []); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour

  return (
    <Container className="d-flex w-100 h-100 justify-content-center align-items-center flex-column">
    <span className="py-3">
      {message}
      </span>
      <Progress className="w-50" color="primary" value={progress} />
    </Container>
  );
};
