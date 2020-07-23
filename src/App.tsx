import React from 'react';
import ELEMENTS from './components/FormConstructor'

function App() {

  const attr = {
    type: {
      type: "text",
      placeHolder: "this is a placeholder",
      autoFocus: true,
    },
    id: "my_id",
    _class: "my_class"
  }

  return (
    < div >
      <header>
        <h1>Form</h1>
        <form>
          <ELEMENTS atts={attr} />
        </form>
      </header>
    </div>
  )
}

export default App;
