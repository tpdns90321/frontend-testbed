import { ReactNode } from 'react';

function Paper(props: { children: ReactNode }) {
  return (
    <div className="rounded-md shadow w-fit h-fit p-4 m-2">
      { props.children }
    </div>
  )
}

export default Paper;
