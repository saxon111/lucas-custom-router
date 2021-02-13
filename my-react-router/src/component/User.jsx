export default function User(props) {
    console.log('User',props)
  return (

    <div>
      <button onClick={() => props.history.push("/profile")}>
        goto profile
      </button>
      <button onClick={() => props.history.go(-1)}>
        goto -1
      </button>
      User
    </div>
  );
}
