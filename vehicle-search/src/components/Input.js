import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class LabeledInput extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  _onSelectChange = value => {
    const { onChangeHandler } = this.props;
    onChangeHandler(value);
  };

  render() {
    const { data, title, onChange, selected, name } = this.props;
    return (
      <Form>
        <FormGroup>
          <Label for="exampleSelect">{title}</Label>
          <Input type="select" {...this.props}>
            <option>Select a {name}</option>
            {data.map(option => {
              return <option>{option}</option>;
            })}
          </Input>
        </FormGroup>
      </Form>
    );
  }
}
