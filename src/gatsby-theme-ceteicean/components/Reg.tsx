import React from "react"
import { SafeUnchangedNode, TBehavior } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { DisplayContext } from "./Context"

type TEIProps = {
  teiNode: Node,
  availableRoutes?: string[]
}

const Reg: TBehavior = (props: TEIProps) => {
  const { contextOpts } = React.useContext(DisplayContext)

  if (contextOpts.originalSpelling) {
    return <Behavior node={props.teiNode} />
  }
  
  return <SafeUnchangedNode {...props} />
}

export default Reg
