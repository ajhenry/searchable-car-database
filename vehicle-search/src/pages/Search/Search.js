import React from "react";
import "./Search.css";
import { Container, Row, Col, Button } from "reactstrap";
import { Input, Item } from "../../components";
import { db, makeData, description } from "../../database";

class Search extends React.Component {
  constructor(props) {
    super(props);

    db.info().then(function(info) {
      console.log(info);
    });

    this.state = {
      make: null,
      model: null,
      year: null,
      type: null,
      makeData,
      modelData: [],
      yearData: [],
      typeData: [],
      carData: null
    };
  }

  _startDB = async () => {};

  _populateDB = async () => {
    //this._populateDatabase(data);
  };

  _deleteDB = async () => {
    db.destroy()
      .then(function(response) {
        console.log(`Successfully destroyed database`);
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  _checkDB = () => {
    console.log("Hello");
    db.info().then(function(info) {
      console.log(info);
    });
  };

  breakType = type => {
    const data = type.split(" L - ");
    return { displ: data[0], trany: data[1] };
  };

  _searchByData = () => {
    const { make, model, year, type } = this.state;

    let searchQuery = {};
    let listType = "model";

    if (!model) {
      searchQuery = { make };
      listType = "make";
    } else if (!year) {
      searchQuery = { make, model };
      listType = "year";
    } else if (!type) {
      searchQuery = { make, model, year };
      listType = "type";
    } else {
      searchQuery = { make, model, year, ...this.breakType(type) };
      listType = "car";
    }

    db.find({
      selector: searchQuery
    })
      .then(result => {
        console.log(result);
        this._generateDataLists(result, listType);
      })
      .catch(err => {
        console.log(err);
      });
  };

  _generateDataLists = (data, listType) => {
    console.log(listType);
    let { modelData, yearData, typeData, carData } = this.state;
    if (listType === "make") {
      modelData = [...new Set(data.docs.map(vehicle => vehicle.model))].sort();
    } else if (listType === "year") {
      yearData = [...new Set(data.docs.map(vehicle => vehicle.year))].sort();
    } else if (listType === "type") {
      typeData = [
        ...new Set(
          data.docs.map(vehicle => `${vehicle.displ} L - ${vehicle.trany}`)
        )
      ];
    } else if (listType === "car") {
      carData = data.docs[0];
    }

    console.log(modelData);
    console.log(yearData);
    this.setState({ modelData, yearData, typeData, carData });
  };

  _populateDatabase = async data => {
    db.bulkDocs(data)
      .then(function(response) {
        // handle response
        console.log(`Finished ${response}`);
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  _handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name);
    if (name === "make") {
      console.log(`Name is make`);
      this.setState(
        { [name]: value, model: null, year: null, type: null, carData: null },
        this._searchByData
      );
    }

    if (name === "model") {
      console.log(`Name is model`);
      this.setState(
        { [name]: value, year: null, type: null, carData: null },
        this._searchByData
      );
    }

    if (name === "year") {
      console.log(`Name is year`);
      this.setState(
        {
          [name]: value,
          type: null,
          carData: null
        },
        this._searchByData
      );
    }

    if (name === "type") {
      console.log(`Name is type`);
      this.setState(
        {
          [name]: value
        },
        this._searchByData
      );
    }
  };

  render = () => {
    const {
      make,
      model,
      year,
      type,
      makeData,
      modelData,
      yearData,
      typeData,
      carData
    } = this.state;
    return (
      <Container className="d-flex flex-fill flex-column align-items-center justify-content-center">
        <Input
          data={makeData}
          title="Select a make"
          selected={make}
          onChange={this._handleInputChange}
          name="make"
        />
        {make && modelData ? (
          <Input
            data={modelData}
            title="Select a model"
            value={model}
            onChange={this._handleInputChange}
            name="model"
          />
        ) : null}
        {model && make && yearData ? (
          <Input
            data={yearData}
            title="Select a year"
            value={year}
            onChange={this._handleInputChange}
            name="year"
          />
        ) : null}
        {model && make && year && typeData ? (
          <Input
            data={typeData}
            title="Select a type"
            value={type}
            onChange={this._handleInputChange}
            name="type"
          />
        ) : null}
        {carData
          ? Object.keys(carData).map((key, index) => {
              return (
                <Item
                  id={key}
                  value={carData[key]}
                  description={description[key]}
                />
              );
            })
          : null}
      </Container>
    );
  };
}

export default Search;
