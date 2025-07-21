import Image from "next/image";

const voices = [
  {
    img: "/photo/voice01.png",
    text: "ヒゲ脱毛で毎朝の処理が楽になり、肌もキレイに！",
    meta: "30代 男性 / ヒゲ脱毛",
  },
  {
    img: "/photo/voice02.png",
    text: "猫背が改善され、姿勢が良くなったと褒められました！",
    meta: "20代 男性 / 猫背矯正",
  },
  {
    img: "/photo/voice03.png",
    text: "親切な対応でリラックスできる場所です。",
    meta: "40代 男性 / オイルトリートメント",
  },
];

const Voice = () => {
  return (
    <section className="py-20 bg-[#fdfaf6] section-container" id="voice">
      <h2 className="text-3xl font-bold text-center text-[#1a2e44]">VOICE</h2>
      <p className="text-center text-gray-500 mb-12">お客様の声</p>
      <div className="grid md:grid-cols-3 gap-8">
        {voices.map((v) => (
          <div
            key={v.meta}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <Image
              src={v.img}
              alt={v.meta}
              width={70}
              height={70}
              className="mx-auto mb-4 rounded-full border-4 border-[#d4af37]"
            />
            <p className="italic text-gray-700">“{v.text}”</p>
            <p className="mt-4 font-bold text-sm text-gray-500">{v.meta}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Voice;
