import React from "react";

export default function Root(props) {
  const handleClick = (e) => {
    e.preventDefault();
    alert(`The ${props.name} button was clicked.`);
  };

  const handleCustomEvent = (event) => {
    console.log(
      `[${props.name}]: Received event`,
      event.type,
      event.detail.payload
    );
  };

  React.useEffect(() => {
    window.addEventListener("CUSTOM_EVENT", handleCustomEvent);

    // cleanup this component
    return () => {
      window.removeEventListener("CUSTOM_EVENT", handleCustomEvent);
    };
  }, []);

  return (
    <section>
      <h1>{props.name} is mounted with events!</h1>
      <button onClick={handleClick}>Click me</button>
    </section>
  );
}
