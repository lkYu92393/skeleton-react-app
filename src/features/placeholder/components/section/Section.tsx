import React from "react"

type SectionType = {
    children: React.ReactNode,
}

const Section = (props: SectionType) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Section;