"use client";
import { useState } from "react";

const faqData = [
  {
    question: "痛みはどのくらいありますか？",
    answer:
      "最新の冷却機能付き脱毛器を使用するため、痛みは大幅に軽減されています。多くの方が「輪ゴムで軽く弾かれる程度」と感じられます。ご不安な方には、テスト照射も可能ですのでご安心ください。",
  },
  {
    question: "何回くらいで効果が出ますか？",
    answer:
      "毛量や毛質により個人差はありますが、多くの方が5〜6回程度で自己処理が楽になり、10回前後で満足のいく結果を実感されています。カウンセリング時に詳しくご説明します。",
  },
  {
    question: "無理な勧誘はありませんか？",
    answer:
      "はい、一切ございません。当店は安心の都度払い制です。お客様に必要なプランのみをご提案し、ご納得いただいた上で施術に入りますので、ご安心ください。",
  },
];

const FaqItem = ({ item, isOpen, onClick }: any) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full py-5 text-lg font-bold text-left"
      >
        <span>{item.question}</span>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="pb-5 pr-8 text-gray-600">{item.answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {faqData.map((item, index) => (
        <FaqItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Faq;
