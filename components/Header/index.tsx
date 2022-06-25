import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowLeft } from "phosphor-react";
import { ReactElement } from "react";

export const Header = (): ReactElement => {
  const router = useRouter()
  const query = router
  const { tag } = router.query
  return (
    <header className="w-full px-5 py-5 flex justify-between items-center 2xl:bg-blue-900 bg-blue-800 border-b border-gray-300">
      <div>
        <Link href="/#posts">
          <a>
            <ArrowLeft size={24} color="#f5f5f5" />
          </a>
        </Link>
      </div>
      <div className="flex">
        <h1 className="text-2xl font-bold">
          Jeff Lab
        </h1>
        <span className="mx-1 text-xl text-blue-100 font-black">|</span>
        <span className="text-2xl font-thin uppercase">{tag}</span>
      </div>
      <div />
    </header>
  )
}