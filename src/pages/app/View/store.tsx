import { Helmet } from 'react-helmet-async'

import { Carrouseu } from './carousel'

export function Store() {
  return (
    <>
      <Helmet title="Store" />
      <div className="flex items-center  justify-center gap-20 px-6">
        <Carrouseu />
      </div>
    </>
  )
}
