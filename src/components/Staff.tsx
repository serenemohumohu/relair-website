import Image from "next/image";
import Link from "next/link";

const Staff = () => {
  return (
    <section className="py-20 bg-[#fdfaf6] section-container" id="staff">
      <h2 className="text-3xl font-bold text-center text-[#1a2e44]">STAFF</h2>
      <p className="text-center text-gray-500 mb-12">スタッフ紹介</p>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <Image
          src="/photo/staff_group.png"
          alt="スタッフ"
          width={600}
          height={400}
          className="rounded-md shadow-md"
        />
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-bold text-[#1a2e44] mb-4">
            プロフェッショナルが対応します
          </h3>
          <p className="text-gray-600">
            知識と経験豊富なスタッフが、一人ひとりに最適な施術をご提案します。
          </p>
          <Link
            href="/staff"
            className="mt-6 inline-block px-6 py-2 border border-[#1a2e44] text-[#1a2e44] font-bold hover:bg-[#1a2e44] hover:text-white transition-all"
          >
            スタッフ一覧へ
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Staff;
