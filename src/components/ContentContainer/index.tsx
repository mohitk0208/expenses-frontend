import React from "react"
interface ContentContainerPropTypes {
  children?: React.ReactNode
}


function ContentContainer({ children }: ContentContainerPropTypes) {

  return (
    <div className="w-screen flex-[2]" >
      <div>
        {children}
      </div>
    </div>
  )
}

export default ContentContainer