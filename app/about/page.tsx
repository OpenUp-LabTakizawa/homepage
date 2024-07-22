import { Heading } from "@/app/components/layout/heading"
import { ABOUT } from "@/app/lib/constant"
import type { JSX } from "react"

export default function About(): JSX.Element {
  return <Heading menu={ABOUT} />
}
