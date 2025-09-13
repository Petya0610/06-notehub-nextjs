'use client'

type Props = {
    error: Error;
}


const Error = ({error}: Props) => {
  return (<p>Cant fetch the list of notes. {error.message}</p>)
}

export default Error;