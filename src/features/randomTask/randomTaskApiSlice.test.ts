import { describe, expect, it } from "vitest"
import taskFile from "../../../docs/todoGPT.csv?raw"
import { parseTasks } from "./randomTaskApiSlice"

describe("parseTasks", () => {
  it("keeps a comma-containing prompt as one selectable item and ignores blank lines", () => {
    expect(parseTasks("# TODO\r\n\r\n* First, do this\r\n\r\n* Next step\r\n")).toEqual([
      "* First, do this",
      "* Next step",
    ])
  })

  it("keeps complete phrases from the Pages data file", () => {
    const tasks = parseTasks(taskFile)
    expect(tasks).toHaveLength(114)
    expect(tasks).toContain("* Decorate, decorate")
    expect(tasks).toContain("* Left channel, right channel, centre channel")
    expect(tasks).toContain(
      "* Listen in total darkness, or in a very large room, very quietly",
    )
  })
})
