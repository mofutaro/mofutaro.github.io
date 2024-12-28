import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid grid-rows-4 items-center justify-items-center min-h-screen pb-20 gap-16">
      <header className="h-24 w-auto">
          <div className="relative flex items-center justify-between">
            <Link
              href="/"
              aria-label="推し勉"
              title="推し勉"
              className="inline-flex items-center"
            >
              <div className="w-8 h-8 rounded-[25%] relative shadow">
                <Image
                  className="rounded-[25%]"
                  src={"/AppIcon.png"}
                  alt={"Icon"}
                  fill={true}
                  />
              </div>
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                推し勉
              </span>
            </Link>
          </div>
        </header>
        <div className="text-xl">
          工事中...🏗️
        </div>
      <main className="flex flex-col">
        <div className="flex items-center justify-center gap-2">

          <Link className="inline-block h-16 aspect-[646/250] relative" href='https://play.google.com/store/apps/details?id=dev.jnaka9.motivetimer&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
            <Image
              src={"https://play.google.com/intl/en_us/badges/static/images/badges/ja_badge_web_generic.png"}
              alt={"Google Play で手に入れよう"}
              fill={true}
            />
          </Link>

          <Link className="inline-block inline-block" href="https://apps.apple.com/jp/app/%E6%8E%A8%E3%81%97%E5%8B%89/id1673642321?itscg=30200&itsct=apps_box_badge&mttnsubad=1673642321">
          <img className="object-fill h-12 aspect-[108.85157/40]" src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/ja-jp?releaseDate=1677542400" alt="App Storeでダウンロード" />
          </Link>
        </div>
      </main>
      <footer className="flex flex-col gap-4 items-center">
          <div>
            ​お問い合わせ先：jnakadev[at]gmail.com<br />
            ​※ [at]は@に置き換えてください
          </div>
          
          <div>
            ©2023 Jumpei Naka
          </div>
          
        </footer>
    </div>
  );
}
