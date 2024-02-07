import { Provider } from "react-redux"
import { RandomTask } from "./RandomTask"
import { store } from "./store"

const App = () => {
  return (
    <Provider store={store}>
      <RandomTask />
    </Provider>
  )
}

export default App
