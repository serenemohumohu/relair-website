const steps = [
  {
    number: "01",
    title: "ご予約",
    description: "当ページの予約ボタンからご希望の日時をお選びください。",
  },
  {
    number: "02",
    title: "カウンセリング",
    description:
      "専門スタッフが肌の状態や毛の悩みをお伺いし、最適なプランをご提案します。",
  },
  {
    number: "03",
    title: "施術",
    description:
      "プライバシーに配慮した個室で、丁寧に施術します。痛みを最小限に抑えた快適な施術です。",
  },
  {
    number: "04",
    title: "アフターケア",
    description:
      "施術後のデリケートな肌を鎮静・保湿。ご自宅でのケア方法もアドバイスします。",
  },
];

const Flow = () => {
  return (
    <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 hidden lg:block" />
      {steps.map((step, index) => (
        <div key={index} className="relative text-center">
          <div className="relative z-10 flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl font-bold rounded-full bg-secondary text-primary-dark font-montserrat">
            {step.number}
          </div>
          <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Flow;
