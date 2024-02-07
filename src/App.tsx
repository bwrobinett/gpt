import { Provider } from "react-redux"
import { store } from "./app/store"
import { RandomTask } from "./features/randomTask/RandomTask"

const App = () => {
  return (
    <Provider store={store}>
      <RandomTask />
    </Provider>
  )
}

export default App
