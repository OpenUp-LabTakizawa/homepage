import { expect, test } from "bun:test"
import { render } from "@testing-library/react"
import Home from "./page"

render(<Home />)

test("h1 test", () => {
  const h2 = document.querySelectorAll("h1")
  expect(h2[0]?.innerText).toEqual("テクノロジーで地域貢献に取り組む")
})

test("p test", () => {
  const p = document.querySelectorAll("p")
  expect(p[0]?.innerText).toEqual(
    "岩手県立大学と滝沢市が産官学連携を目的として設立した滝沢市IPUイノベーションセンターにOPEN UPラボ滝沢は入居しています。",
  )
  expect(p[1]?.innerText).toEqual(
    "ラボを取り巻くコミュニティとの協働や新たな取り組みで連携し、地域社会への貢献を行っています。",
  )
})
