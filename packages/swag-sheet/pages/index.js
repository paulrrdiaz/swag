import React from 'react'
import { css } from '@stitches/react'
import Uploader from '../components/Uploader.js'

export default function Home () {
  return (
    <div className={css({ fontFamily: 'sans-serif' })()}>

      <h1>
        Swansheet
      </h1>

      <div>
        <Uploader
          onContinue={data => alert(JSON.stringify(data, undefined, 2))}
          onCellUpdate={(ctx, value) => alert(value)}
        />
      </div>

    </div>
  )
}
