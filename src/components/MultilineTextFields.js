import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../App.css";

export default function MultilineTextFields() {
  const [value, setValue] = React.useState("");

  const valueRef = React.useRef("");
  const secondValueRef = React.useRef("");

  const sendValue = (e) => {
    e.preventDefault();
    console.log(valueRef.current.value); //on clicking button accesing current value of TextField and outputing it to console
    let arr = valueRef.current.value.split("\n");
    console.log(arr);
    return arr;
  };

  const sendSecondValue = (event) => {
    event.preventDefault();
    console.log(secondValueRef.current.value);
    let arr = secondValueRef.current.value.split("\n");
    console.log(arr);
    return arr;
  };

  //Removing specific value from an array
  function arrayRemove(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  /**
   * Should have one function that does the processing of the poems
   * The function will first take in both refs and store the values
   */

  const startingPoems = (e) => {
    e.preventDefault();
    let firstPoem = sendValue(e);
    let secondPoem = sendSecondValue(e);
    if (firstPoem == "" || secondPoem == "") {
      alert("Please make sure both poems have text inside of them!");
      return;
    }

    // Fill array to the largest poem amount of lines
    let i = 0;
    let numbers = [];
    if (firstPoem.length > secondPoem.length) {
      for (let i = 0; i < firstPoem.length; i++) {
        numbers.push(i);
      }
      i = firstPoem.length;
    } else {
      for (let i = 0; i < secondPoem.length; i++) {
        numbers.push(i);
      }
      i = secondPoem.length;
    }

    // Staring while loop to iterate throughout Poems
    let output = [];
    while (i > 0) {
      let poem = prompt(
        "What poem would you like to take from?\nPoem 1 or Poem 2?"
      ).toLowerCase();
      let poemStr;
      if (poem === "poem 1") {
        poemStr = firstPoem;
      } else if (poem === "poem 2") {
        poemStr = secondPoem;
      }
      let num = prompt(
        "What line would you like to take from " +
          poem +
          "?\nLines remaining:\n" +
          numbers
      );
      arrayRemove(numbers, parseInt(num));
      output.push(<div>{takeFromArray(poemStr, parseInt(num))}</div>);
      i--;
    }
    setValue(output);
  };

  /**
   * Returns a single line from a poem
   */
  const takeFromArray = (arr, index) => {
    return arr[index];
  };

  return (
    <div className="flexbox-container">
      <form noValidate autoComplete="off">
        <Stack spacing={5} direction="row">
          <div>
            <TextField
              id="outlined-textarea"
              label="Poem 1"
              placeholder="Insert Poem Here"
              multiline
              inputRef={valueRef}
            />
          </div>

          <div>
            <TextField
              id="outlined-textarea"
              label="Poem 2"
              placeholder="Insert Poem Here"
              multiline
              inputRef={secondValueRef}
            />
          </div>
        </Stack>
        <br />
        <Button
          onClick={startingPoems}
          variant="contained"
          sx={{
            backgroundColor: "#ececa3",
            color: "black",
            ":hover": {
              background: "#809c13  ",
              color: "white",
            },
          }}
        >
          Show poems
        </Button>
        <div>
          <h3 id="finalOutput" style={{color: "#607c3c"}}>{value}</h3>
        </div>
      </form>
      <br />
    </div>
  );
}
