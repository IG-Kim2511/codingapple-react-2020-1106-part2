import logo from './logo.svg';
import './App.css';

import { Navbar , Nav ,NavDropdown , Form , FormControl, Button, Jumbotron} from 'react-bootstrap';

import React, { useState } from 'react';
import { Box } from "@chakra-ui/core";
import Detail20_file from './Detail20.js'


import Data21 from './Data21.js'
import Detail21 from './Detail21.js'
import Detail21_2 from './Detail21_2.js'


// 17
import data4naming from './data.js'
// 19
import{Route,Link,Switch}from 'react-router-dom'

function App15(){
  return(
    <div>
      <p className="black-nav">🦄15 react bootstrap (쇼핑몰 프로젝트 : 프로젝트 생성 & Bootstrap 설치)</p> 
      <Button variant="primary" size="lg" active>
         button
      </Button>
    </div>
  )

}

//
function App16(){
  return(
    <div>
    <p className="black-nav">🦄</p> 
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
  // 

  <Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>


    </div>
  )

}
//
function App17(){

  let [shoes,shoes변경]=useState(data4naming);
  return(
    <div>
    <p className="black-nav">🦄</p> 

<p> {shoes[0].title}</p>
<p> {shoes[1].content}</p>



    </div>
  )

}

//
function App18(){
  
  let [shoes,shoes변경] = useState(data4naming);

  return(
    <div>
    <div >
    //  (6)-1
    <Card shoes={shoes}></Card>  
      <div className="col-md-4">
        <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
        <h4> {shoes[1].title} </h4> 
        <p>{shoes[1].content} & {shoes[1].price}  </p>          
      </div>
      <div >
        <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="20%" />
        <h4> {shoes[2].title} </h4> 
        <p>{shoes[2].content} & {shoes[2].price}  </p>          
      </div>    
   </div> 
<div>
// 7-1
<Card2 shoes={shoes[0]}></Card2>
<Card2 shoes={shoes[1]}></Card2>
<Card2 shoes={shoes[2]}></Card2>

</div>

<div>
// 8-1 2
{
shoes.map((a,i)=>{
return <Card2 shoes={shoes[i]} i={i}></Card2>
// return <Card2 shoes={shoes[a] }></Card2>

})


}
</div>


<div>
<p>
<Card2></Card2>
</p>
</div>

    </div>
  )

  

}

function Card(props){
return(
  <div>
  <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="20%" />
  // 6-2
  <h4>{props.shoes[0].title}</h4>
  <p>{props.shoes[0].content}</p>
  </div>
)
}
function Card2(props){
  return(
    <div>
    // 8-4
    <img src={"https://codingapple1.github.io/shop/shoes"+ (props.i+1)+".jpg"}/>
    // 7-2
    
    </div>
  )
}

//🦄19 React Router 1 : 셋
function App19(){
  return(
    <div>
     <p className="black-nav">🦄19 React Router 1 : 셋</p> 
     <span><Link to="/">Home</Link></span>
     <Link to="/detail">detail</Link>
     <Link to='/component'>component</Link>
      <Link to='/component2'>component2</Link>
      <Link to='/main2'>main2</Link>
      <Link to='/detail2'>detail2</Link>
     
     
    // (4-2) (4-3)
    <Route path="/"> <div>메인페이지인데요</div></Route>
    <Route path="/detail"><div>상세페이지인데요</div></Route>
    <Route path="/ㄴㄻㄴㄹㅇ">계속 추가 끝없이 가능</Route>


<Route> path="/component" component={Card3}</Route>
<Route><Card3></Card3></Route>

// 5
<Route path="/" exace>main gogogo </Route>

// 6-1

<Route path="/">
<Jumbotron></Jumbotron>
</Route>

    </div>
  )
}

function Card3(props){
  return(
    <div>    
    "Card3 component"
    </div>
  )
}


//🦄20 React Router 2 : Link, Switch, history 
function App20(){
  return(
    <div>
     <p className="black-nav">🦄 20 React Router 2 : Link, Switch, history </p> 

<Box bg="tomato" w="100%" p={4} color="white">
  This is the Box
</Box>
     
<Nav.Link><Link to='/'>Home</Link></Nav.Link>
<Nav.Link><Link to='/detail'>Detail</Link></Nav.Link>
<Nav as={Link} to = '/>'></Nav>



<Route path="/detail">
<Detail20_file></Detail20_file>
</Route>
// 8-2
<Switch>
<Route>
<Card20></Card20>
</Route>

<Route path="/detail">
<Detail20_file></Detail20_file></Route>

// 
<Route path=":id">
<div>random</div>
</Route>
</Switch>
    </div>
  )

}
function Card20(props){
  return(
    <div>    
    </div>
  )
}

//🦄21


function App21(){

  let[shoes,shoesset] = useState(Data21);

  return(
    <div>
     <p className="black-nav">🦄21</p> 
      <nav>
      <Link to='/'>Home</Link>
      <Link to='/detail'>Detail</Link>
      <Link to='/detail/0'>Detail0</Link>
      <Link to='/detail/1'>Detail1</Link>
      <Link to='/detail/2'>Detail2</Link>
      </nav>

      <Route path="/">
      <h1>hello world</h1>
      </Route>

      <switch>      
      // 467
      <Route path="/detail/:id">
       <Detail21 shoes={shoes}/>
      </Route>

      / 8
      <Route path="/detail/:id">
       <Detail21_2 shoes={shoes}/>
      </Route>   

      </switch>
    </div>  
    )
}

//🦄
function App22(){
  return(
    <div>
     <p className="black-nav">🦄</p> 
     <nav className="ig_nav">
     <Link to='/'>Home</Link>
     <Link to='/detail'>Detail</Link>
     </nav>

     <Route path="/"></Route>
     <switch>
     Detail22. 
<Detail22></Detail22>
     <Route path= '/detail'>

     
     </Route>
     </switch>

    </div>
  )
}



//🦄
function App55(){
  return(
    <div>
     <p className="black-nav">🦄</p> 
     <nav className="ig_nav">
     <Link to='/'>Home</Link>
     <Link to='/detail'>Detail</Link>
     </nav>
    </div>
  )
}

function Card55(props){
  return(
    <div>    
    </div>
  )
}

function App(){
  return(
    <div>
       <App15/>      
       <App16/>             
        <App17/>      
        <App18/>    
         <App19/>    
          <App20/>    
          <App21/>    
          <App22/>    
        </div>
       //  <App23/>    
       //  <App24/>    
       //  <App25/>    
       //  <App26/>    
       //  <App27/>    
       //  <App28/>    
       //  <App30/>    
       //  <App31/>    
       //  <App32/>    
       //  <App33/>    
       //  <App34/>    
       //  <App35/>   
       )
}

export default App;
