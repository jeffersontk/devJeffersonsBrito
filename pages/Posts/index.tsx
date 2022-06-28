import { ReactElement } from "react";
import { Footer } from "../../components/Footer";
import { Navigation } from "../../components/Navigation";

const PostsList = (): ReactElement => {
  return (
    <div>
      <Navigation />
      <div className="w-full flex justify-center">
        <div className="max-w-screen-2xl w-full flex flex-col justify-center items-center px-5 pt-5 gap-10">
          <div className="bg-blue-700 max-w-screen-lg lg:min-w-[1024px]  min-h-[35vh] flex justify-center items-center rounded-md p-4">
            <h1>Image banner</h1>
          </div>
          <div className="max-w-screen-lg lg:min-w-[1024px] flex justify-start border-t border-b border-gray-200 py-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam commodo sit id integer enim rhoncus. Consequat pellentesque ut aliquam mi ultrices. Risus pulvinar quis mauris vel adipiscing. Lectus amet ornare morbi nullam viverra commodo.
              Aliquam, eu sodales urna iaculis amet odio lobortis. Blandit duis condimentum turpis porta eu pellentesque id. Vitae lacus feugiat nec, ipsum ultrices felis. Facilisis facilisis quam tellus nec sit. Vitae adipiscing ultricies eros, vel phasellus egestas non et vivamus. Nibh porttitor integer tellus tristique amet. Turpis massa amet, ultricies consectetur laoreet sed sed. Ultrices aliquet mi fermentum nec a. <br /> <br /> Egestas ut cras in sit nulla pharetra nisl, elit penatibus. Pulvinar turpis amet adipiscing vitae urna felis. Risus lacus turpis ipsum fames vitae amet adipiscing. Ac ornare lectus aliquet ac eu aliquet nisi. Id morbi suscipit scelerisque amet amet nulla lectus.
              Rutrum eleifend donec rhoncus, fermentum morbi pellentesque. Et odio nascetur aliquam sit fringilla. Pellentesque nibh in amet tempor cursus consectetur. Aliquam augue mi, at nec, auctor ultrices. Id ut cursus tortor facilisi semper amet porttitor at ornare. Mi sed ultrices et, erat in placerat. Sit dui suspendisse vitae ut. <br /> <br />
              Pharetra ipsum ultricies dignissim nec tempor. Ipsum vulputate rutrum ornare viverra faucibus maecenas phasellus. Ante vulputate feugiat et senectus. Velit nunc leo nulla nulla consectetur diam nunc venenatis posuere. Amet proin pellentesque enim nisi libero quis id tempor. Adipiscing non augue nisi tellus sem. Urna nulla porta id venenatis. Bibendum eget tristique elementum morbi rhoncus, fringilla vestibulum.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PostsList