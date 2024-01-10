import type { Metadata } from 'next'
import Headers from "../Dashpoard/Header/page"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<div className="">
    <Headers />
        {children}

</div>
   
  )
}
