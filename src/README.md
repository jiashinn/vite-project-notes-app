#Technologies
Vite, React

#Challenges

- Build reusable componenets
- Click outside with nested components
- Passing state from child to parent
- Typing animation
- CRUD
- Search Function
- ThemeMode

#confused
-onClick={handleClick}
-onClick={handleClick()}
-onClick={handleClick && handleClick()}
-contenteditable

#lesson
use state to trigger the click event and change to input field but you need to click one more time to start typing.
-use autofocus and onblur

use state on local will trigger all components that are sharing the same state
-solution :https://beta.reactjs.org/learn/sharing-state-between-components

##edit
use editable
use share state and toggle p tag and input
solution:just use input settleD:

##find match object, update the new value and return to the exact position of arr

- const updatedData = originalData.map(x => (x.id === id ? { ...x, updatedField: 1 } : x));
