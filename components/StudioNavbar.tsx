import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const StudioNavbar = (props: any) => {
  return (
    <div>
      <Link href="/" className="p-4 flex gap-2 text-base text-primary items-center" >
          <ArrowUturnLeftIcon className="h-4 w-4 text-2xl"/>
          Back to Website
      </Link>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar
