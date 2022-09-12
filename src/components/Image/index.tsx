// import { Name } from './styles'
import { useState } from 'react'
import noImage from '../../assets/no-image.jpg'

export function Image({ src }: any) {
  const [hasError, setHasError] = useState(false)

  function imageError(e: any) {
    // console.log(e)
    setHasError(true)
  }

  return (
    <img
      src={hasError ? noImage : src}
      onError={imageError}
      alt=""
    />
  )
}
