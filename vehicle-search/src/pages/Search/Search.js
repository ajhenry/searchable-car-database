import React from "react";
import "./Search.css";
import { Container, Row, Col, Button } from "reactstrap";
import Input from "../../components/Input";
import db from "../../database/database";

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
      makeData: [
        "Mcevoy Motors",
        "VPG",
        "Lambda Control Systems",
        "Bentley",
        "Oldsmobile",
        "CX Automotive",
        "Ferrari",
        "Import Foreign Auto Sales Inc",
        "Mahindra",
        "Saleen",
        "S and S Coach Company  E.p. Dutton",
        "Genesis",
        "MINI",
        "Rolls-Royce",
        "Suzuki",
        "London Coach Co Inc",
        "Isis Imports Ltd",
        "Nissan",
        "American Motors Corporation",
        "Kia",
        "Infiniti",
        "Wallace Environmental",
        "Aurora Cars Ltd",
        "GMC",
        "Geo",
        "Mercedes-Benz",
        "CODA Automotive",
        "Chevrolet",
        "Jaguar",
        "Peugeot",
        "Maserati",
        "CCC Engineering",
        "Environmental Rsch and Devp Corp",
        "Saab",
        "Tesla",
        "BMW Alpina",
        "Yugo",
        "Vixen Motor Company",
        "Red Shift Ltd.",
        "Ruf Automobile Gmbh",
        "Bugatti",
        "Autokraft Limited",
        "Karma",
        "Vector",
        "TVR Engineering Ltd",
        "Pagani",
        "Land Rover",
        "Dodge",
        "Fisker",
        "Excalibur Autos",
        "J.K. Motors",
        "JBA Motorcars, Inc.",
        "Azure Dynamics",
        "Sterling",
        "Morgan",
        "Lotus",
        "Plymouth",
        "Dabryan Coach Builders Inc",
        "Federal Coach",
        "Porsche",
        "Shelby",
        "Hyundai",
        "Panoz Auto-Development",
        "Laforza Automobile Inc",
        "Dacia",
        "Avanti Motor Corporation",
        "BMW",
        "PAS Inc - GMC",
        "smart",
        "Merkur",
        "Honda",
        "Panther Car Company Limited",
        "Scion",
        "Quantum Technologies",
        "Grumman Olson",
        "Pininfarina",
        "Aston Martin",
        "Texas Coach Company",
        "General Motors",
        "E. P. Dutton, Inc.",
        "Isuzu",
        "Bill Dovell Motor Car Company",
        "Buick",
        "AM General",
        "McLaren Automotive",
        "Volvo",
        "London Taxi",
        "Lamborghini",
        "PAS, Inc",
        "Mercury",
        "SRT",
        "Audi",
        "Pontiac",
        "Fiat",
        "Spyker",
        "Cadillac",
        "Jeep",
        "Mitsubishi",
        "Hummer",
        "Acura",
        "Saleen Performance",
        "Import Trade Services",
        "Ram",
        "Kenyon Corporation Of America",
        "Maybach",
        "Lexus",
        "Qvale",
        "Evans Automobiles",
        "BYD",
        "Bertone",
        "Toyota",
        "RUF Automobile",
        "Daihatsu",
        "Consulier Industries Inc",
        "Tecstar, LP",
        "Volga Associated Automobile",
        "Koenigsegg",
        "Volkswagen",
        "Renault",
        "Saturn",
        "Mazda",
        "Roush Performance",
        "Lincoln",
        "Alfa Romeo",
        "Daewoo",
        "Goldacre",
        "Eagle",
        "Superior Coaches Div E.p. Dutton",
        "ASC Incorporated",
        "Bitter Gmbh and Co. Kg",
        "Ford",
        "Subaru",
        "Grumman Allied Industries",
        "Mobility Ventures LLC",
        "Chrysler",
        "Panos"
      ].sort(),
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

  _searchDB = () => {
    db.createIndex({
      index: {
        fields: ["year"]
      }
    })
      .then(function(result) {
        console.log(`Created year index`);
      })
      .catch(function(err) {
        console.log(err);
      });

    db.createIndex({
      index: {
        fields: ["make"]
      }
    })
      .then(function(result) {
        console.log(`Created make index`);
      })
      .catch(function(err) {
        console.log(err);
      });

    db.createIndex({
      index: {
        fields: ["make", "year"]
      }
    })
      .then(function(result) {
        console.log(`Created make index`);
      })
      .catch(function(err) {
        console.log(err);
      });

    db.find({
      selector: { make: "Honda" },
      fields: ["make", "year", "model", "trany", "displ"],
      sort: ["make"]
    })
      .then(function(result) {
        console.log(result);
      })
      .catch(function(err) {
        console.log(err);
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
      selector: searchQuery,
      fields: ["make", "year", "model", "trany", "displ"]
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
        { [name]: value, model: null, year: null, type: null },
        this._searchByData
      );
    }

    if (name === "model") {
      console.log(`Name is model`);
      this.setState(
        { [name]: value, year: null, type: null },
        this._searchByData
      );
    }

    if (name === "year") {
      console.log(`Name is year`);
      this.setState(
        {
          [name]: value,
          type: null
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
              return <span>{`${key} - ${carData[key]}`}</span>;
            })
          : null}

        <div className="d-flex flex-row justify-content-between">
          <Button onClick={this._startDB}>Start DB</Button>
          <Button onClick={this._populateDB}>Populate DB</Button>
          <Button onClick={this._deleteDB}>Delete DB</Button>
          <Button onClick={this._checkDB}>Check DB</Button>
        </div>
        <Button onClick={this._searchDB}>Search</Button>
      </Container>
    );
  };
}

export default Search;
