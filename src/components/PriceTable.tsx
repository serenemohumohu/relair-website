import Link from "next/link";

const prices = [
  { service: "ヒゲ脱毛", note: "初回限定", price: "¥550" },
  { service: "ワキ脱毛", note: "何度でも", price: "¥500" },
  { service: "VIO脱毛", note: "", price: "¥3,300" },
  { service: "全身脱毛 (ヒゲ・顔・VIO除く)", note: "", price: "¥4,180" },
  { service: "全身脱毛 (ヒゲ・顔・VIO含む)", note: "", price: "¥5,500" },
];

const PriceTable = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="overflow-hidden bg-white rounded-lg shadow-lg">
        {prices.map((item, index) => (
          <div
            key={index}
            className="grid items-center grid-cols-3 gap-4 px-6 py-5 border-b border-gray-200 md:grid-cols-4 last:border-b-0"
          >
            <div className="col-span-2 font-bold text-primary-dark md:col-span-2">
              {item.service}
            </div>
            <div className="text-right md:text-center">
              {item.note && (
                // ★ここに bg-secondary を追加！
                <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-secondary">
                  {item.note}
                </span>
              )}
            </div>
            <div className="col-span-3 text-2xl font-bold text-right text-primary-dark font-montserrat md:col-span-1">
              {item.price}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/menu" // あとで全メニューページへのリンクに変更
          className="inline-block px-10 py-3 font-bold transition-colors border-2 rounded-full border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white"
        >
          全てのメニューを見る
        </Link>
      </div>
    </div>
  );
};

export default PriceTable;
