export function Index(props) {
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome web {props.user.username}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  let user = {};
  const res = await fetch('http://localhost:3333/api');
  user = await res.json();

  return {
    props: {
      user,
    },
  };
}

export default Index;
