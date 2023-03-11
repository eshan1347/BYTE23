import React from "react"
import styles from "./style";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import LearningDis from "./components/LearningDis";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

<div className='pt-20 text-center text-white text-5xl'><h1>Learning Disabilities Test</h1></div>
      <div className={` bg-primary ${styles.flexStart}`}>
      
        <div className={`${styles.boxWidth}`}>
          <Main/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <LearningDis/>
          <Footer/>
        </div>
      </div>

    </div> 
  )
}

export default App