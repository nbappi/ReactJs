function Hello(props){
  const tag= "H2";
    return (
      <p>Writer Hello { props.name} with {tag} tag</p>
    )
}

function App(){

  const elem1 = <Hello name="Nuruzzaman" />

    return (
      <div>
          {elem1}
          <Hello name="Bappi" />
      </div>
    )

}

export default App;