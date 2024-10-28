import React from 'react'
import { useState } from 'react';
import './App.css'

 function App() {
  let [count, setCount] = useState(0);
  

  const addCount = ()=> {
    if (count < 100) {
      setCount(count + 1);
    }
   
  }
  const subCount = () =>{
    if (count > 0) {
      setCount(count - 1);
    }
    
  }
  const resetCount = () => {
    setCount(0);
  }
  return (
    <div className='main'>
     

        <div className='counter-container'>
        <h1>My Counter App</h1>

          {/* Progress Bar */}
      <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${(count / 100) * 100}%`, transition: 'width 0.3s ease' }}
          >
            
          </div>

      </div>
              <div className='counter-card'>
                  <h2>{count}</h2>
                    <div className='counter-buttons'>
                        <button onClick={addCount} disabled={count === 100}>Increase</button>
                        <button onClick={subCount} disabled={count === 0}>Decrease</button>
                        <button onClick={resetCount}>Reset</button>
                    </div>

              </div>

              {count === 100 && <p className="feedback">Maximum value reached!</p>}
              {count === 0 && <p className="feedback">Minimum value reached!</p>}
        </div>
    </div>
  )
}

export default App;
