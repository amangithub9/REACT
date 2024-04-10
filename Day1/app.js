// Manipulate the HTML DOM using Javascript.
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone!";
// cosnt root = document.getElementById("root");
//root.appendChild(heading);

  const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "Heading 1"
  );

  const heading2 = React.createElement(
    "h2",
    {
      id: "title",
    },
    "Heading 2"
  );

  const conatiner = React.createElement("div", { id: "container" }, [
    heading,
    heading2,
  ]);

console.log(heading);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing react element inside root
root.render(conatiner);
// root.render(heading);
// root.render(heading2);
