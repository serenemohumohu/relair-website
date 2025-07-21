import Image from "next/image";

const features = [
  {
    title: "結果重視の高性能脱毛器",
    description:
      "評判の脱毛器「DECiDE」を導入。男性特有の濃く太い毛にも高い効果を発揮し、痛みを最小限に。その効果から他店からの移籍者も後を絶ちません。",
    imageUrl: "/images/DECIDE.jpg",
  },
  {
    title: "安心の「都度払い制」",
    description:
      "高額なコース契約やローンは一切ありません。自分のペースで、必要な時に必要な分だけ。無駄な出費なく、スマートに通っていただけます。",
    imageUrl: "/images/pay-per-use-system.png",
  },
  {
    title: "プロの女性スタッフが担当",
    description:
      "脱毛は、専門の女性スタッフが担当します。男性の肌質・毛質を熟知したプロが、丁寧かつ的確な施術で、最高の結果へと導きます。",
    imageUrl: "/images/professional-female-staff.png",
  },
];

const ReasonSection = () => {
  return (
    <div className="space-y-10">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:w-1/2">
            <Image
              src={feature.imageUrl}
              alt={feature.title}
              width={500}
              height={350}
              className="object-cover w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="mb-4 text-2xl font-bold text-primary-dark">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReasonSection;
