import { ReactElement } from "react"

type props = {
  icon: any,
}

export const DividerSection = ({ icon }: props): ReactElement => {
  return (
    <div className="h-0 w-full flex justify-center items-center">
      <div
        className="border-solid border-2 border-secondary-dark p-2 rounded-full z-10"
      >
        <div className="bg-primary-light
          rounded-full w-14 h-14 
          flex items-center justify-center"
        >
          {icon}
        </div>
      </div>
    </div>
  )
}