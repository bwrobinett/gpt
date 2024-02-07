import { useState } from "react"
import { useGetTasksQuery } from "./todoApi"

function getRandomItemFromArray(array: string[]) {
  return (
    array[Math.floor(Math.random() * array.length)] || "* Tap the page"
  ).slice(2)
}

export function RandomTask() {
  const { data: tasks = [], isLoading, isError } = useGetTasksQuery()
  const [randomTask, setRandomTask] = useState(getRandomItemFromArray(tasks))

  if (isLoading || !randomTask) {
    return null
  }

  if (isError) {
    return <div>Error loading tasks</div>
  }

  return (
    <div
      onClick={() => {
        setRandomTask(getRandomItemFromArray(tasks))
      }}
      style={{
        backgroundColor: "salmon",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        userSelect: "none",
      }}
    >
      <h1 style={{ padding: "100px" }}>{randomTask}</h1>
    </div>
  )
}
