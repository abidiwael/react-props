import "./App.css";
import Profil from "./profile/Profile_component/Profile.js";

function App() {
 let fullname = "Nelson Rolihlahla Mandela";
	let bio = "Nelson Rolihlahla Mandela was a South African anti-apartheid revolutionary, political leader and philanthropist who served as President of South Africa from 1994 to 1999. He was the country's first black head of state and the first elected in a fully representative democratic election.";
	let profession = "political leader";
  let image = <img src="me.jpg" alt="me" width="300px"/>
	return (
		<div className='App'>
			<Profil fullname={fullname} bio={bio} profession={profession} image={image}>
				{" "}
			</Profil>
    </div>
  );
}

export default App;
