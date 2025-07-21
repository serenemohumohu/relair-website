import MainVisual from "@/components/MainVisual";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

// カードデータ
const treatmentCards = [
  {
    img: "/photo/men_datsumou.png",
    title: "メンズ脱毛",
    text: "最新の脱毛機で痛みを抑え、スピーディーに効果を実感。清潔感のある肌へ導きます。",
    link: "/mens-datsumou",
  },
  {
    img: "/photo/slimming.png",
    title: "痩身",
    text: "ウルトランスフォーマーで脂肪を分解・燃焼。引き締まった理想のボディを目指します。",
    link: "/slimming",
  },
  {
    img: "/photo/pelvic_correction.jpg",
    title: "骨盤・猫背矯正",
    text: "身体の歪みを整え、根本から不調を改善。美しい姿勢と健康な身体作りをサポートします。",
    link: "/pelvic",
  },
  {
    img: "/photo/oil_treatment.jpg",
    title: "オイルトリートメント",
    text: "心と身体を深く癒すリラクゼーション。日々のストレスから解放される至福のひとときを。",
    link: "/oil-treatment",
  },
];

const voiceCards = [
  {
    img: "/photo/voice01.png",
    text: "“ヒゲ脱毛で毎朝の処理が楽になり、肌もキレイになりました。もっと早くやればよかったです！”",
    meta: "30代 男性 / ヒゲ脱毛",
  },
  {
    img: "/photo/voice02.png",
    text: "“猫背が改善され、周りから『姿勢が良くなったね』と言われるようになりました。自信が持てます。”",
    meta: "20代 男性 / 猫背矯正",
  },
  {
    img: "/photo/voice03.png",
    text: "“スタッフの方々が親切で、いつもリラックスして施術を受けられます。心身ともにリフレッシュできる場所です。”",
    meta: "40代 男性 / オイルトリートメント",
  },
];

const columnCards = [
  {
    img: "/photo/column_datumou.png",
    date: "2025.07.16",
    title: "【メンズ脱毛】始める前に知っておきたい5つのこと",
    link: "/mens-hair-removal-guide",
  },
  {
    img: "/photo/posture_towel_stretch.png",
    date: "2025.07.10",
    title: "自宅でできる！簡単ストレッチで猫背を改善する方法",
    link: "/nekoze-stretch-home",
  },
  {
    img: "/photo/column_detox_main.png",
    date: "2025.07.05",
    title: "そのダルさ、夏の”むくみ”が原因かも？プロが教える本気のデトックス術",
    link: "/summer-detox-guide",
  },
];

// 共通セクションタイトル
const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <>
    <h2 className="font-montserrat text-4xl text-[#1a2e44] text-center font-bold tracking-wider">
      {title}
    </h2>
    <p className="text-center text-gray-500 mt-5 mb-12">{subtitle}</p>
  </>
);

export default function Home() {
  return (
    <>
      <MainVisual />

      {/* 施術紹介 */}
      <AnimatedSection
        id="treatment"
        className="py-20 md:py-32 px-5 max-w-6xl mx-auto"
      >
        <SectionTitle title="TREATMENT" subtitle="施術紹介" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatmentCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-lg shadow-lg text-center p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <Image
                src={card.img}
                alt={card.title}
                width={400}
                height={300}
                className="w-full h-auto rounded-md"
              />
              <h3 className="text-[#1a2e44] mt-4 text-xl font-bold">
                {card.title}
              </h3>
              <p className="text-sm mt-2 text-gray-600">{card.text}</p>
              <Link
                href={card.link}
                className="inline-block mt-5 py-3 px-10 border border-[#1a2e44] text-[#1a2e44] font-bold transition-all duration-300 hover:bg-[#1a2e44] hover:text-white"
              >
                詳しく見る
              </Link>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* スタッフ紹介 */}
      <AnimatedSection
        id="staff"
        className="section-container relative bg-[#fdfaf6] overflow-hidden py-20 md:py-32"
      >
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="STAFF" subtitle="スタッフ紹介" />
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
              <Image
                src="/photo/staff_group.png"
                alt="スタッフ集合写真"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl text-[#1a2e44] font-bold leading-relaxed">
                プロフェッショナルチームが
                <br />
                あなたをお迎えします
              </h3>
              <p className="mt-6 text-gray-600">
                当サロンには、豊富な知識と経験を持つ専門スタッフが在籍しています。お客様一人ひとりのお悩みに真摯に向き合い、最適な施術をご提案。安心してお任せください。
              </p>
              <Link
                href="/staff"
                className="inline-block mt-8 py-3 px-10 border border-[#1a2e44] text-[#1a2e44] font-bold transition-all duration-300 hover:bg-[#1a2e44] hover:text-white"
              >
                スタッフ一覧へ
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* お客様の声 */}
      <AnimatedSection id="voice" className="py-20 md:py-32 px-5 bg-[#fdfaf6]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="VOICE" subtitle="お客様の声" />
          <div className="grid md:grid-cols-3 gap-8">
            {voiceCards.map((card) => (
              <div
                key={card.meta}
                className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-start gap-5"
              >
                <Image
                  src={card.img}
                  alt={card.meta}
                  width={70}
                  height={70}
                  className="w-[70px] h-[70px] rounded-full border-4 border-[#d4af37] flex-shrink-0 mx-auto md:mx-0"
                />
                <div>
                  <p className="italic text-gray-700">“{card.text}”</p>
                  <p className="mt-4 font-bold text-sm text-gray-500">
                    {card.meta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 美容コラム */}
      <AnimatedSection id="column" className="py-20 md:py-32 px-5 bg-[#fdfaf6]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="COLUMN" subtitle="美容コラム" />
          <div className="grid md:grid-cols-3 gap-8">
            {columnCards.map((card) => (
              <Link
                href={card.link}
                key={card.title}
                className="block bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  width={400}
                  height={250}
                  className="w-full h-auto"
                />
                <div className="p-5">
                  <time className="text-sm text-gray-500">{card.date}</time>
                  <h4 className="mt-2 font-bold text-base leading-relaxed text-[#1a2e44]">
                    {card.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/column-list"
              className="inline-block py-3 px-10 border border-[#1a2e44] text-[#1a2e44] font-bold transition-all duration-300 hover:bg-[#1a2e44] hover:text-white"
            >
              コラム一覧へ
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* 店舗情報・アクセス */}
      <AnimatedSection id="access" className="py-20 md:py-32 px-5">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="ACCESS" subtitle="店舗情報" />
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
              <h3 className="text-3xl text-[#1a2e44] font-bold">
                トータルビューティー リレア
              </h3>
              <div className="mt-6 space-y-3 text-gray-600">
                <p>
                  〒874-0910
                  <br />
                  大分県別府市石垣西3-2-21 Domus Ishigaki w02号
                </p>
                <p>
                  <strong>電話番号:</strong> 050-8887-1232
                </p>
                <p>
                  <strong>アクセス:</strong>
                  <br />
                  【駐車場完備】
                  <br />
                  別府駅から車で5分・徒歩20分
                  <br />
                  南石垣バス停から徒歩1分
                </p>
                <p>
                  <strong>営業時間:</strong> 月曜～土曜 10:00～20:00
                </p>
                <p>
                  <strong>定休日:</strong> 日曜・祝日不定休
                </p>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.088301592446!2d131.4829583762579!3d33.29111897336199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3546a347a5997631%3A0x889c288965882c5!2z44OI44Kq44K%2F44Or44O744K544Kv44OG44Kj44K544O844Oa44O8IOODreODoOOCouOCog!5e0!3m2!1sja!2sjp!4v1721142647653!5m2!1sja!2sjp"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
