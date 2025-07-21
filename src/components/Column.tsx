import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    img: "/photo/column_datumou.png",
    date: "2025.07.16",
    title: "【メンズ脱毛】始める前に知っておきたい5つのこと",
    link: "/mens-hair-removal-guide",
  },
  {
    img: "/photo/posture_towel_stretch.png",
    date: "2025.07.10",
    title: "簡単ストレッチで猫背改善！",
    link: "/nekoze-stretch-home",
  },
  {
    img: "/photo/column_detox_main.png",
    date: "2025.07.05",
    title: "そのダルさ、夏のむくみかも？",
    link: "/summer-detox-guide",
  },
];

const Column = () => {
  return (
    <section className="py-20 bg-[#fdfaf6] section-container" id="column">
      <h2 className="text-3xl font-bold text-center text-[#1a2e44]">COLUMN</h2>
      <p className="text-center text-gray-500 mb-12">美容コラム</p>
      <div className="grid md:grid-cols-3 gap-8">
        {columns.map((c) => (
          <Link
            key={c.title}
            href={c.link}
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all"
          >
            <Image
              src={c.img}
              alt={c.title}
              width={400}
              height={250}
              className="w-full h-auto"
            />
            <div className="p-5">
              <time className="text-sm text-gray-500">{c.date}</time>
              <h4 className="mt-2 font-bold text-[#1a2e44]">{c.title}</h4>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          href="/column-list"
          className="px-6 py-3 border border-[#1a2e44] text-[#1a2e44] font-bold hover:bg-[#1a2e44] hover:text-white transition"
        >
          コラム一覧へ
        </Link>
      </div>
    </section>
  );
};

export default Column;
