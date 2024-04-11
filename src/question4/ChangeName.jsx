export default function ChangeName({ name, setName, edit, setEdit }) {
  function ChangeName() {
    if (edit) {
      return (
        <>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
          <button onClick={() => setEdit(!edit)}>Save</button>
        </>
      );
    } else {
      return (
        <>
          <p>{name}</p>
          <button onClick={() => setEdit(!edit)}>Edit</button>
        </>
      );
    }
  }

  return <div>{ChangeName()}</div>;
}
