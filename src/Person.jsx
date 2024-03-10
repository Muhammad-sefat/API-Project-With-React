export default function Person({ person }) {
  return (
    <>
      <div className="commonStyle">
        <h3>My Id : {person.postId}</h3>
        <h2>My Name : {person.name}</h2>
        <h4>My Gmail : {person.email}</h4>
        <h4>My Title : {person.body}</h4>
      </div>
    </>
  );
}
