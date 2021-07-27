import React from 'react'
import { styled } from '@stitches/react'
import Papa from 'papaparse'
import { LoadingBar, StyledDiv } from '@generates/swag'
import { merge } from '@generates/merger'
import Dropzone from 'react-dropzone'
import Spreadsheet from './Spreadsheet.js'
import ActionMenu from './ActionMenu.js'

const HeaderWrapper = styled('div', { display: 'flex', alignItems: 'center' })

export default function Uploader (props) {
  const {
    components,
    onClear = ctx => ctx.setData(),
    onContinue,
    onData = () => {},
    css,
    ...rest
  } = props
  const [data, setData] = React.useState(props.data)
  const ConfiguredActionMenu = components?.ActionMenu || ActionMenu
  const [isLoading, setIsLoading] = React.useState(false)

  function handleFile (files) {
    setIsLoading(true)
    const [file] = files
    if (file) {
      Papa.parse(
        file,
        merge(
          {
            header: true,
            worker: true,
            skipEmptyLines: true,
            complete (results) {
              onData(results.data)
              setData(results.data)
              setIsLoading(false)
            }
          },
          props.parse
        )
      )
    }
  }

  return (
    <div>

      <HeaderWrapper css={css?.headerWrapper}>

        {/* File input */}

        <div>
          <Dropzone onDrop={handleFile}>
            {({ getRootProps, getInputProps }) => (
              <StyledDiv
                css={{
                  cursor: 'pointer',
                  borderWidth: '2px',
                  borderStyle: 'dashed',
                  borderColor: '#3B82F6',
                  borderRadius: '.375em',
                  paddingTop: '1em',
                  paddingBottom: '1em',
                  paddingLeft: '1.25em',
                  paddingRight: '1.25em',
                  fontSize: '1.125em',
                  fontWeight: '500'
                }}
                {...getRootProps()}
              >

                <input {...getInputProps()} />

                Click here to select a file or drag and drop the file here

              </StyledDiv>
            )}
          </Dropzone>
        </div>

        {/* Action menu */}

        <ConfiguredActionMenu
          onClear={() => onClear({ setData })}
          onContinue={() => onContinue(data)}
          css={merge(
            { wrapper: { marginLeft: 'auto' } },
            css?.actionMenu
          )}
        />

      </HeaderWrapper>

      {/* Spreadsheet view */}

      {isLoading && (
        <LoadingBar
          css={merge(
            { wrapper: { marginTop: '2em', marginBottom: '.5em' } },
            css?.loadingBar
          )}
        />
      )}

      {!isLoading && data && (
        <Spreadsheet
          {...rest}
          data={data}
          onUpdateData={data => {
            setData(data)
            onData(data)
          }}
          css={css?.spreadsheet}
        />
      )}

    </div>
  )
}
