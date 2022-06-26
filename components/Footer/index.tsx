import Image from "next/image";
import Link from "next/link";
import { Download, Envelope, GithubLogo, InstagramLogo, LinkedinLogo, Phone } from "phosphor-react";
import { ReactElement } from "react";
import style from './style.module.scss'

export const Footer = (): ReactElement => {
  return (
    <footer
      id="contact"
      className="w-full bg-blue-800 h-80 flex flex-col justify-center items-center md:px-16 px-6">
      <div className="h-full md:h-52 w-full flex flex-row-reverse items-center md:justify-around justify-between text-white">
        <div className="flex flex-col gap-2">
          <span className="font-semibold mb-2">Rede sociais</span>
          <Link href="https://github.com/jeffersontk" passHref>
            <a className="flex gap-1 items-center" target="_blank" rel="noopener noreferrer">
              <div className={style.card}>
                <div className={`${style.face} ${style.faceFront}`}>
                  <Image
                    height={24}
                    width={24}
                    alt="Github"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACL0lEQVRIidVVPWtUQRQ9d6LwZqfQRkTFQgXBKKJG8CdEDQTBtHYWVoqFskXwI4VBQQv9BYp9hFUEEbQWIwgiwQ/EKqbZRd7cu9u8vRa+F2ZnZ/clZQ4MPM7ce869l3kzwFYHjdtU1QkROQtgDsBJAPvLnFUAH4jopbX2BREVmzbw3k8DeExEh2uK/AngmnPuVWrTJKomZr5LRK83IA4AhwC0ROSBqg4VPGQgIgsAbqFmfBFIVW+UuaMNmHkGwHxATQGYBfAlTlTV70Q0VxTFkYCeZ+ZzyRJUdRsz/2BmrZaqbi/3rPf+hKra8vt4u93eUe5NhDkislLlAcEYmPkCgKWB9ow5aK39NXIwALz3u4noT0TPOudaQDAiIroYjyDLstVx4gDgnPurqt8iel1r3UBVT0XVN4moV2dARD0iuhnRU0MGAHaFEd1u922deIVer/cuovalDIaO7EZBRPGRtinR3wMR1qaPWwJZlp2PqLWUwXIYoaqP8jwPz3gSeZ5PqurDiP6YMliKgvYaYz4x8708zycTwkdFZNEYswxgT1Rcq/qmgDQi8hnAMQC3AZwBULX+xDl3NRQRkWeqeinR1Fqj0ThARN2BDoior6rXAfQBNAFcBvAG/+e5GKsURXE/IQ5VbVbiSTDznfKXTwoEQia8Isr1dFxOaLLAzH1m/uq9fz8mLryDnod3UC2899MissLMI1+rsogOM19JvQW1KG/K02MMZjqdzs5NC28p/ANFF0YHAmnkkQAAAABJRU5ErkJggg==" />
                </div>
                <div className={`${style.face} ${style.faceBack}`}>
                  @Jeffersontk
                </div>
              </div>
              Github
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/jeffersonsbrito/" passHref>
            <a className="flex gap-1 items-center" target="_blank" rel="noopener noreferrer">
              <div className={style.card}>
                <div className={`${style.face} ${style.faceFront}`}>
                  <LinkedinLogo size={24} color="#f5f5f5" weight="fill" />
                </div>
                <div className={`${style.face} ${style.faceBack}`}>
                  @jeffersonsbrito
                </div>
              </div>
              Linkedin
            </a>
          </Link>
          <Link href="https://www.instagram.com/jeffthebrito/" passHref>
            <a className="flex gap-1 items-center" target="_blank" rel="noopener noreferrer">
              <div className={style.card}>
                <div className={`${style.face} ${style.faceFront}`}>
                  <InstagramLogo size={24} color="#f5f5f5" weight="fill" />
                </div>
                <div className={`${style.face} ${style.faceBack}`}>
                  @Jeffthebrito
                </div>
              </div>
              Instagram
            </a>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold mb-2">Contato</span>
          <div className="flex gap-1 items-center">
            <div className={style.card}>
              <div className={`${style.face} ${style.faceFront}`}>
                <Phone size={24} color="#f5f5f5" weight="fill" />
              </div>
              <div className={`${style.face} ${style.faceBack}`}>
                (21) 97266-2427
              </div>
            </div>
            Telefone
          </div>
          <div className="flex gap-1 items-center">
            <div className={style.card}>
              <div className={`${style.face} ${style.faceFront}`}>
                <Envelope size={24} color="#f5f5f5" weight="fill" />
              </div>
              <div className={`${style.face} ${style.faceBackEmail}`} title="jefferson.britotk@gmail.com">
                jefferson.britotk@gmail.com
              </div>
            </div>
            Email
          </div>
          <div className="flex gap-1 items-center max-w-[150px] md:max-w-[250px]">
            <div className={style.card}>
              <div className="w-12 h-12 bg-blue-900 flex justify-center items-center rounded-xl">
                <Download size={24} color="#f5f5f5" weight="fill" />
              </div>
            </div>
            Download do meu currículo
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-gray-300 w-full h-14 flex justify-center items-center mt-5 text-white ">
        <h4>Desenvolvido por Jefferson Brito</h4>
      </div>
    </footer >
  )
}