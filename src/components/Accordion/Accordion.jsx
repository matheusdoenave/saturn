import PropTypes from 'prop-types'
import React, { cloneElement, Children, useState } from 'react'
import styled, { css, layout } from '@xstyled/styled-components'

import { Flex, Icon, Typography } from '../'

const Accordion = ({ children, disabled = false, expanded: propsExpanded = false }) => {
  const [expanded, setExpanded] = useState(propsExpanded)

  const propChildren = Children.map(children, current => {
    return cloneElement(current, {
      disabled,
      expanded: expanded ? 1 : 0,
      setExpanded
    })
  })

  return <div>{propChildren}</div>
}

Accordion.propTypes = {
  children: PropTypes.array,
  disabled: PropTypes.bool,
  expanded: PropTypes.bool
}

Accordion.defaultValues = {
  disabled: false
}

const AccordionHeader = ({ disabled, expanded, expandIcon = 'expand_more', setExpanded, title }) => {
  return (
    <StyledHeader
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      disabled={disabled}
      onClick={() => (!disabled ? setExpanded(current => !current) : '')}
    >
      <Typography as='span' fontWeight={1} color='gray.800' fontSize={3} lineHeight={3}>
        {title}
      </Typography>
      <StyledIcon expanded={expanded} icon={expandIcon} color='gray.800' />
    </StyledHeader>
  )
}

AccordionHeader.propTypes = {
  disabled: PropTypes.bool,
  expanded: PropTypes.number,
  expandIcon: PropTypes.string,
  setExpanded: PropTypes.func,
  title: PropTypes.string.isRequired
}

const AccordionDetail = ({ children, expanded }) => <AccordionContent expanded={expanded}>{children}</AccordionContent>

AccordionDetail.propTypes = {
  expanded: PropTypes.number
}

const StyledIcon = styled(Icon)`
  transition: all 0.3s;
  transform: ${({ expanded }) => (expanded ? 'rotate(180deg)' : 'rotate(0deg)')};
`

const AccordionsWrapper = styled.div`
  width: 100%;

  & > div:first-child > div:first-child {
    border-radius: 4px 4px 0 0;
  }

  & > div:last-child > div:first-child {
    border-radius: 0 0 4px 4px;
  }

  & > div {
    box-shadow: 0px 3px 4px
      ${({ border }) => (border === 'shadow' || border === undefined ? ' rgba(33, 33, 33, 0.2)' : 'none')};
  }

  & > div:first-child > div:first-child {
    ${({ border }) =>
      border === 'line'
        ? {
            borderTop: '1px',
            borderStyle: 'solid'
          }
        : {}}
  }

  & > div > div:first-child {
    ${({ border }) =>
      border === 'line'
        ? {
            borderWidth: '0px 1px 1px',
            borderStyle: 'solid'
          }
        : {}}
  }

  & > div:not(:last-child) {
    border-color: gray.300 !important;
    ${({ divider }) => (divider ? { borderBottom: '1px solid' } : '')}
  }

  ${layout}
`

const StyledHeader = styled(Flex)(
  ({ disabled }) => css`
    padding: 4;
    background: white;
    height: 56px;
    width: inherit;
    cursor: ${disabled ? 'default' : 'pointer'};
    box-sizing: border-box;
    border-color: gray.300 !important;
  `
)

const AccordionContent = styled.div(
  ({ expanded }) => css`
    width: inherit;
    transition: all 0.3s linear;
    box-sizing: border-box;
    overflow: hidden;
    background-color: gray.100;

    visibility: ${expanded ? 'visible' : 'hidden'};
    padding: ${expanded ? '16px' : '0px 16px'};
    height: ${expanded ? '100%' : '0'};
    opacity: ${expanded ? 1 : 0};
  `
)

export { AccordionDetail, AccordionHeader, AccordionsWrapper }
export default Accordion
