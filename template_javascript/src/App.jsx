import React from "react";
// function App() {
//   const get = () => {
//     const title = document.getElementById("title").value;
//     console.log(title);
//   };

//   return (
//     <div className="App">
//       <input type="text" id="title" />
//       <button onClick={() => get()}>print title contents</button>
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      info: {
        one: "",
        two: "",
      },
      saveMe: "Tito",
    };
  }

  handleChange = (e) => {
    this.setState({
      info: {
        ...this.state.info,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <form style={{ display: "flex", flexDirection: "column" }}>
        <input type="text" name="one" onChange={(e) => this.handleChange(e)} />
        <input type="text" name="two" onChange={(e) => this.handleChange(e)} />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(this.state);
          }}
        >
          Print State
        </button>
      </form>
    );
  }
}

export default App;
