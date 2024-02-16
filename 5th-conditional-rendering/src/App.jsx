//conditional rendering = allows you to control what gets rendered
//                        in yoyr application based on certain condition
//                        (show, hide, or change components)

import UserGreeting from "./UserGreeting"

const App = () => {
  return (
    <div>
      <UserGreeting isLoggedIn={true} username="Shibu"/>
      <UserGreeting isLoggedIn={true} />
    </div>
  )
}

export default App
