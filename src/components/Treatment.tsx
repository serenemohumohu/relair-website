// components/Treatment.tsx
import Link from "next/link";

const treatments = [
  {
    title: "メンズ脱毛",
    image: "/images/men_datsumou.png",
    link: "/mens-datsumou",
  },
  {
    title: "痩身トリートメント",
    image: "/images/slimming.png",
    link: "/slimming",
  },
  {
    title: "骨盤・猫背矯正",
    image: "/images/pelvic_correction.jpg",
    link: "/pelvic",
  },
  {
    title: "オイルトリートメント",
    image: "/images/oil_treatment.jpg",
    link: "/oil-treatment",
  },
];

const Treatment = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-center mb-10">施術紹介</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment) => (
            <Link
              href={treatment.link}
              key={treatment.title}
              className="block group"
            >
              <div className="overflow-hidden rounded-xl shadow hover:shadow-lg transition">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-center text-lg font-semibold mt-3 group-hover:text-blue-600 transition-colors">
                {treatment.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatment;
