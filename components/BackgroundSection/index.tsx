import { ReactElement } from "react"

type props = {
  box1: {
    color: string,
    content: ReactElement,
  },
  box2: {
    color: string,
    content: ReactElement,
  },
  id: string,
}

export const BackgroundSection = ({ box1, box2, id }: props): ReactElement => {
  return (
    <section id={id} className="w-full grid grid-cols-2">
      <div className={`${box1.color} h-110`}>
        {box1.content}
      </div>
      <div className={`${box2.color} h-110`}>
        {box2.content}
      </div>
    </section>
  )
}