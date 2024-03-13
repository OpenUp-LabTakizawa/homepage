import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Image
        src="/iwate_mountain.webp"
        width={500}
        height={500}
        alt="Iwate Mountain"
        className="hero min-h-screen"
      />
      <div>
        <div className="hero-overlay bg-opacity-60" />
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 font-bold text-3xl">
              <span className="mb-5 font-bold text-5xl text-primary">
                テクノロジー
              </span>
              で
              <br />
              <span className="mb-5 font-bold text-5xl text-accent">
                地域貢献
              </span>
              に取り組む
            </h1>
            <p className="mb-5">
              岩手県立大学と滝沢市が産官学連携を目的として設立した滝沢市IPUイノベーションセンターにOPEN
              UPラボ滝沢は入居しています。
              <br />
              ラボを取り巻くコミュニティとの協働や新たな取り組みで連携し、地域社会への貢献を行っています。
            </p>
            <button type="button" className="btn btn-warning">
              詳しくはこちら
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
