import PropTypes from "prop-types"; // Corrected import statement

export const Person = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Email: {props.email}</h1> {/* Corrected h1 tag */}
      <h1>Age: {props.age}</h1>
      <h1>This person {props.isMarried ? "is" : "is not"} MARRIED</h1>
      <h1>Friends:</h1>
      {props.friends.map((friend, index) => ( // Corrected map function
        <h1 key={index}>{friend}</h1>
      ))}
    </div>
  );
}

Person.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  friends: PropTypes.arrayOf(PropTypes.string),
};
