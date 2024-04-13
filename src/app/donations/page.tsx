import Donation from './Donation'
import Link from 'next/link'
import Logo from '../Logo'

const page = ({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) => {
  const companyName = searchParams?.name
  const amount = searchParams?.amount || 0

  var label = "Here's what your donation"
  if (companyName) {
    label = `Here's what the ${companyName} United Way campaign`
  }

  // make sure dollarRaised is a number
  if (amount === null) {
    throw new Error('dollarsRaised is null')
  }
  const dollarsRaised = parseFloat(amount)
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost text-4xl ml-5 " href="/">
          ←
          </Link>
        </div>

        <div className="navbar-end">
          <div className="w-1/4 mt-2">
            <Logo />
          </div>
        </div>
      </div>
      <div>
        <div className="flex w-full justify-center flex-col mx-auto mb-5">
          <a className="text-xl font-semibold text-center">{label}</a>
          <a className="text-lg font-semibold text-center">made possible last year</a>
          <a className="text-xl  text-center">
            Based on campaign results of <span className="font-bold text-2xl">${dollarsRaised}</span>
          </a>
        </div>
        <Donation companyName={companyName} dollarsRaised={dollarsRaised} />
      </div>
    </>
  )
}
export default page
