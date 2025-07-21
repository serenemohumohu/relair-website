// SVGアイコンをコンポーネントとして定義
const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="80"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#c0a173"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);
const BriefcaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="80"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#c0a173"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);
const SparklesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="80"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#c0a173"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3L9.5 8.5 4 11l5.5 2.5L12 19l2.5-5.5L20 11l-5.5-2.5z"></path>
  </svg>
);

const benefits = [
  {
    icon: <ClockIcon />,
    title: "朝の時間を創出",
    description:
      "毎日のヒゲ剃り時間（年間約30時間）がゼロに。有意義な時間に使えます。",
  },
  {
    icon: <BriefcaseIcon />,
    title: "ビジネスで好印象",
    description:
      "清潔感が格段にアップし、対面での信頼性向上に。自信に満ちた印象を与えます。",
  },
  {
    icon: <SparklesIcon />,
    title: "美肌効果",
    description:
      "自己処理による肌負担が激減。毛穴が引き締まり、キメの整った健やかな肌へ導きます。",
  },
];

const BenefitSection = () => {
  return (
    <div className="grid max-w-5xl gap-10 mx-auto md:grid-cols-3">
      {benefits.map((benefit, index) => (
        <div key={index} className="text-center">
          <div className="flex items-center justify-center mx-auto mb-4">
            {benefit.icon}
          </div>
          <h3 className="mb-2 text-xl font-bold text-primary-dark">
            {benefit.title}
          </h3>
          <p className="text-gray-600">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BenefitSection;
