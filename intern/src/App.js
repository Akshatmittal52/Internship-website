import './App.css';

import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';

import LoginScreen from './Component3/LoginScreen';
import Register from './Component3/Register';
import Success from './Component3/Success';
import Form from './Component4/Form';
import InnerApp from './innerApp';
import Admin from './Component3/AdminPanel/Admin';
import AdminLogin from './Component3/AdminPanel/AdminLogin';
import Edit from './Component3/AdminPanel/edit';
import img1 from "./Images/webdev.png"
import img2 from './Images/app.webp';
import img3 from './Images/cloudimage.jpeg';
import img4 from './Images/data.jpeg';
import img5 from './Images/graphic.jpeg';
import img6 from './Images/ai.jpeg';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     
      <Routes>
      <Route path='/' element={<InnerApp/>}></Route>
          <Route path="/login" element={<LoginScreen/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/Form1" element={<Form name="Web Development" info="Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites." img={img1}/>}/>
          <Route path="/Form2" element={<Form name="App Development" info="Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources. Hence, the mobile development process involves creating installable software bundles (code, binaries, assets, etc.) , implementing backend services such as data access with an API, and testing the application on target devices." img={img2}/>}/>
          <Route path="/Form3" element={<Form name="Cloud Computing" info="Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider like Amazon Web Services (AWS).
" img={img3}/>}/>
          <Route path="/Form4" element={<Form name="Graphic Design" info="Graphic design is the craft of planning and creating visual content to communicate ideas and messages. Graphic design is everywhere you look in the digital age — from billboards to cereal boxes to mobile apps. Through incorporating different elements and principles, these designs can influence our perception and emotions." img={img5}/>}/>
          <Route path="/Form5" element={<Form name="Machine Learing" info="Machine Learning is the field of study that gives computers the capability to learn without being explicitly programmed. ML is one of the most exciting technologies that one would have ever come across. As it is evident from the name, it gives the computer that makes it more similar to humans: The ability to learn. Machine learning is actively being used today, perhaps in many more places than one would expect." img={img6}/>}/>
          <Route path="/Form6" element={<Form name="Database Management" info="Database Management allows a person to organize, store, and retrieve data from a computer. Database Management can also describe the data storage, operations, and security practices of a database administrator (DBA) throughout the life cycle of the data. Managing a database involves designing, implementing, and supporting stored data to maximize its value. " img={img4}/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/adminlogin" element={<AdminLogin/>}/>
          <Route path="/edit/:id" element={<Edit />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
