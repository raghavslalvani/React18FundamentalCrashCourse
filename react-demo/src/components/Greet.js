export const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};
// export default Greet;
// This is a simple React component that returns a greeting message.
// Props are immutable, meaning they cannot be changed by the component that receives them.
