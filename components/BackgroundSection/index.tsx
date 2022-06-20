import { ReactElement } from "react"

type props = {
  box1?: {
    color: string,
    content: ReactElement,
  },
  box2?: {
    color: string,
    content: ReactElement,
  },
  box3?: {
    color: string,
    content: ReactElement,
  },
  id: string,
}

export const BackgroundSection = ({ box1, box2, box3, id }: props): ReactElement => {
  return (
    <section id={id} className="w-full grid grid-cols-2">
      {box3 ? (
        <>
          <div className="bg-blue-100 h-110" />
          <div className="bg-blue-200 h-110" />
          <div className="p-4 flex justify-center items-center w-full h-110 z-10 absolute">
            {box3.content}
          </div>
        </>
      ) :
        (
          <>
            <div className={`${box1?.color} h-110`}>
              {box1?.content}
            </div>
            <div className={`${box2?.color} h-110`}>
              {box2?.content}
            </div>
          </>
        )
      }
    </section>
  )
}