export default function Root(props) {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("The link was clicked.");
  };

  return (
    <section>
      <h1>{props.name} is mounted with events!</h1>
      <button onClick={handleClick}>Click me</button>
    </section>
  );
}
