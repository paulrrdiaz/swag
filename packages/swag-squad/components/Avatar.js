import React from 'react'
import { styled } from '@stitches/react'
import { StyledDiv } from '@generates/swag'
import { merge } from '@generates/merger'

const StyledImage = styled('img')

function getNumber (name) {
  const charactersArray = Array.from(name)

  let charactersCodesSum = 0
  for (const charactersArrayItem of charactersArray) {
    charactersCodesSum += charactersArrayItem.charCodeAt(0)
  }

  return charactersCodesSum
}

function getDigit (number, ntn) {
  return Math.floor((number / Math.pow(10, ntn)) % 10)
}

function getUnit (number, range, index) {
  const value = number % range
  return index && (getDigit(number, index) % 2) === 0 ? -value : value
}

function getRandomColor (number, colors, range) {
  return colors[(number) % range]
}

function generateColors (name, colors) {
  const numFromName = getNumber(name)
  const range = colors && colors.length

  const elementsProperties = Array.from({ length: 3 }, (_, i) => ({
    color: getRandomColor(numFromName + i, colors, range),
    translateX: getUnit(numFromName * (i + 1), '4em' / 10, 1),
    translateY: getUnit(numFromName * (i + 1), '4em' / 10, 2),
    scale: 1.2 + getUnit(numFromName * (i + 1), '4em' / 20) / 10,
    rotate: getUnit(numFromName * (i + 1), 360, 1)
  }))

  return elementsProperties
}

export default function Avatar (props) {
  const { size = '4em' } = props
  const css = merge(
    { height: size, width: size, borderRadius: '100%' },
    props.css
  )
  const { colors = ['#10B981', '#6366F1', '#F43F5E', '#F59E0B'] } = props

  let properties
  if (!props.image) properties = generateColors(props.name, colors)

  return (
    <StyledDiv css={css}>
      {props.image
        ? <StyledImage src={props.image} css={css} />
        : (
            <svg
              viewBox={'0 0 ' + size + ' ' + size}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={props.size}
              height={props.size}
            >
              <mask
                id="mask__marble"
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={size}
                height={size}
              >
                <rect
                  width={size}
                  height={size}
                  rx={!props.square && size * 2}
                  fill="white"
                />
              </mask>
              <g mask="url(#mask__marble)">
                <rect
                  width={size}
                  height={size}
                  rx="2"
                  fill={properties[0].color}
                />
                <path
                  filter="url(#prefix__filter0_f)"
                  d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                  fill={properties[1].color}
                  transform={
                    'translate(' +
                    properties[1].translateX +
                    ' ' +
                    properties[1].translateY +
                    ') rotate(' +
                    properties[1].rotate +
                    ' ' +
                    size / 2 +
                    ' ' +
                    size / 2 +
                    ') scale(' +
                    properties[2].scale +
                    ')'
                  }
                />
                <path
                  filter="url(#prefix__filter0_f)"
                  style={{ mixBlendMode: 'overlay' }}
                  d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                  fill={properties[2].color}
                  transform={
                    'translate(' +
                    properties[2].translateX +
                    ' ' +
                    properties[2].translateY +
                    ') rotate(' +
                    properties[2].rotate +
                    ' ' +
                    size / 2 +
                    ' ' +
                    size / 2 +
                    ') scale(' +
                    properties[2].scale +
                    ')'
                  }
                />
              </g>
              <defs>
                <filter
                  id="prefix__filter0_f"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation={7}
                    result="effect1_foregroundBlur"
                  />
                </filter>
              </defs>
            </svg>
          )
      }
    </StyledDiv>
  )
}
