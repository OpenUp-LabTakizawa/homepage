import { Heading } from "@/app/components/layout/heading"
import { MEMBER } from "@/app/lib/constant"
import type { JSX } from "react"

export default function Member(): JSX.Element {
  return <Heading menu={MEMBER} />
}
