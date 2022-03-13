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
        "What poem would you like to take from?\nPoem 1 or Poem 2?\ne.x (poem 1 or p2)"
      ).toLowerCase();
      let poemStr;
      if (poem === "poem 1" || poem === "p1") {
        poemStr = firstPoem;
      } else if (poem === "poem 2" || poem === "p2") {
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
   * have empty array
   * iterate through a random length determined by a random number between 0, 1
   * assign that length to a variable
   * 
   * have a for loop that iterates that variables length
   * have two random numbers
   * one for which poem (will be 0 or 1)
   * create another array and fill it with numbers up to the length
   * 
   * update state
   * @param {*} e 
   */
  const randomPoems = (e) => {
    e.preventDefault();
    let output = []
    let firstPoem = sendValue(e);
    let secondPoem = sendSecondValue(e);

    if(firstPoem == "" || secondPoem == ""){
      alert("Please enter text into the text fields!")
      return;
    }

    let length = 0
    let choosingLength = getRandomInt(0, 1);
    if(choosingLength == 0){
      length = firstPoem.length;
    } else if(choosingLength == 1){
      length = secondPoem.length
    }

    // Creating array with no repeats to shuffle later
    let numbers = [];
    for(let i = 0; i < length; i++){
      numbers.push(i);
    }

    // Shuffle the numbers array
    const shuffledNumbers = numbers.sort((a, b) => 0.5 - Math.random());
    

    //For loop to push a new line from a random poem into the array
    for(let i = 0; i < length; i++){
      let randomPoem = getRandomInt(0, 1);
      if(randomPoem === 0){
        output.push(<div>{takeFromArray(firstPoem, shuffledNumbers[i])}</div>)
      } else if(randomPoem === 1){
        output.push(<div>{takeFromArray(secondPoem, shuffledNumbers[i])}</div>)
      }
    }

    setValue(output)
    
  }

  // Getting random number
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
            <Stack direction="column">
              <div>
              <TextField
                id="outlined-textarea"
                placeholder="Insert Poem Here"
                multiline
                inputRef={valueRef}
              />
            </div>
            <p style={{color: "#607c3c"}}>Poem 1</p>
            </Stack>
            <Stack direction="column">
              <div>
                <TextField
                  id="outlined-textarea"
                  // label="Poem 2"
                  placeholder="Insert Poem Here"
                  multiline
                  inputRef={secondValueRef}
                />
              </div>
              <p style={{color: "#607c3c"}}>Poem 2</p>
            </Stack>
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
          <strong>
            CHOP
          </strong>
        </Button>
        <br />
        <br />
        <Button
          onClick={randomPoems}
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
          <strong>
            RANDOM CHOP
          </strong>
        </Button>
        <div>
          <h3 id="finalOutput" style={{color: "#607c3c"}}>{value}</h3>
        </div>
      </form>
      <br />
    </div>
  );
}
