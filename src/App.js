function Hello(props){
  const tag= "H2";
    return (
      <p>Writer Hello { props.name} with {tag} tag</p>
    )
}

function HelloWithOption(props){
   return (
     <p>Hello {props.name} and Country is {props.options.country}</p>
   )

}

function App(){

  const elem1 = <HelloWithOption name="Nuruzzaman" options={{ country:"bangladesh", city: "tangail"}}/>

    return (
      <div>
          {elem1}
          <Hello name="Bappi" />
      </div>
    )

}

export default App;