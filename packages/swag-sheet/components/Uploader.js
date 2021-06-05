import React from 'react'
import { styled } from '@stitches/react'
import Papa from 'papaparse'
import { LoadingBar } from '@generates/pagoda'
import { merge } from '@generates/merger'
import Spreadsheet from './Spreadsheet.js'
import ActionMenu from './ActionMenu.js'

const HeaderWrapper = styled('div', { display: 'flex', alignItems: 'center' })

export default function Uploader (props) {
  const fileInput = React.useRef()
  const {
    components,
    onClear = ctx => {
      ctx.setData()
      ctx.fileInput.current.value = ''
    },
    onContinue,
    onData = () => {},
    css,
    ...rest
  } = props
  const [data, setData] = React.useState(props.data)
  const ConfiguredActionMenu = components?.ActionMenu || ActionMenu
  const [isLoading, setIsLoading] = React.useState(false)

  function handleFile (evt) {
    setIsLoading(true)
    const [file] = evt.target.files
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
          <input
            ref={fileInput}
            id="swansheetFileInput"
            type="file"
            onChange={handleFile}
          />
        </div>

        {/* Action menu */}

        <ConfiguredActionMenu
          onClear={() => onClear({ setData, fileInput })}
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
          css={merge({ wrapper: { marginTop: '1em' } }, css?.loadingBar)}
        />
      )}

      {!isLoading && data && (
        <Spreadsheet
          {...rest}
          data={data}
          setData={setData}
          css={css?.spreadsheet}
        />
      )}

    </div>
  )
}
