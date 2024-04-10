import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="text-white-800 flex-between body-text w-full gap-y-10 border-t border-black-400 bg-black-100  p-[15px] max-md:flex-col">
      <div className="flex gap-x-5">
        <Link href="/termsAndCondition">Terms & Conditions</Link>
        <Link href="/privacyPolicy">Privacy Policy</Link>
      </div>
      <p className='text-center flex justify-center items-center'>Copyright © 2024 DevTrekker | Nikhil | All Rights Reserved</p>

      
    </footer>
  )
}

export default Footer