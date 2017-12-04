import React from 'react';
function Home(){
  return(
    <h1>Welcome to my {props.title} page!</h1>
    <p>The top teams in the NFL are:</p>
    props.teams.map((team)=>{
      return (<li>team</li>)
    })
  );
};

export default Home;
