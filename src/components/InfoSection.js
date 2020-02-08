import React from 'react'
import useSiteMetadata from './SiteMetadata'

import TextSection from './sections/Text'
import IntroductionSection from './sections/Introduction'
import SubmissionsSection from './sections/Submissions'
import ConnectivitySection from './sections/Connectivity'
import ScheduleSection from './sections/Schedule'
import HASSection from './sections/HAS'

const InfoSection = (props) => {
  const { node } = props.data
  const containerType = node.frontmatter.container
  const { submissions } = useSiteMetadata()
  if (containerType === 'text') {
    return (
      <TextSection node={ node } />
    )
  } else if (containerType === 'intro') {
    return (
      <IntroductionSection node={ node } />
    )
  } else if (containerType === 'submission') {
    return (
      <SubmissionsSection node={ node } link={ submissions } />
    )
  } else if (containerType === 'connectivity') {
    return (
      <ConnectivitySection node={ node } />
    )
  } else if (containerType === 'schedule') {
    return (
      <ScheduleSection node={ node } />
    )
  } else if (containerType === 'has') {
    return (
      <HASSection node={ node } />
    )
  }
  return (<span />)
}

export default InfoSection
