interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
  }
  
  export const Person = (props: Props) => {
    return (
      <div>
        <h1>Name: {props.name}</h1>
        <h1>Email: {props.email}</h1>
        <h1>Age: {props.age}</h1>
        <h1>This person {props.isMarried ? "is" : "is not"} MARRIED</h1>
        {props.friends.map((friend: string, index: number) => ( // Added index parameter
          <h1 key={index}>{friend}</h1>
        ))}
      </div>
    );
  }
  