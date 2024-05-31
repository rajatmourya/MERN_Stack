import './App.css';
import Avatar from './Components/Avatar';
import Card from './Components/Card';

function App() {

  const gridBox = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)'
}

const myName = "Rajat Mourya";

  return (
    <div style={gridBox}>
      <Card 
        name = "Shilpy Pandey" 
        email = "rajatm2442@gmail.com" 
        image = "https://placeholder.co/200 "
      />
      <Card name = "Rajat Mourya" email = "rm24042000@gmail.com" image = "https://placeholder.co/200 "/>
      <Card name = "Kedar Singh" email = "kedar123@gmail.com" image = "https://placeholder.co/200 "/>
      <Card name = "Rajat Mourya" email = "rm24042000@gmail.com" image = "https://placeholder.co/200 "/>
      <Card name = "Shivam Pathak" email = "pathak123@gmail.com" image = "https://placeholder.co/200 "/>
      <Avatar image = "https://placeholder.co/200 " name = 'Avatar' />
  </div>
  );
}

export default App;
