import NavBar from "./Nav";
import { Hero } from "./Hero";
import LeaderBoard from "./LeaderBoard";
import Footer from "./Footer";
import Modal from "./Modal";
import { useState } from "react";

function App(){
  const [open, setOpen] = useState(false)
  return <div>
    <NavBar />
    <Hero />
    <Modal open={ open } onClose={()=> setOpen(false)}>
      
    </Modal>
    <LeaderBoard />
    <Footer />

    
  </div>
}

export default App;