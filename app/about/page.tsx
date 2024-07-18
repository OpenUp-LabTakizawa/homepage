import { Heading } from "@/app/components/layout/heading"
import { ABOUT } from "@/app/lib/constant"
import type React from "react"

export default function About(): React.JSX.Element {
  return <Heading menu={ABOUT} />
}
