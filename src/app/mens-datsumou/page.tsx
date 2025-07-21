import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CtaBar from "@/components/CtaBar";
import ProblemCards from "@/components/ProblemCards";
import ReasonSection from "@/components/ReasonSection";
import BenefitSection from "@/components/BenefitSection"; // これを追加
import PriceTable from "@/components/PriceTable";
import Flow from "@/components/Flow";
import Faq from "@/components/Faq";
import Access from "@/components/Access";
import AnimatedSection from "@/components/AnimatedSection";

// セクションの共通コンポーネント
const Section = ({
  title,
  subtitle,
  children,
  isBgBeige = false,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  isBgBeige?: boolean;
}) => (
  <AnimatedSection
    className={`py-20 md:py-28 ${isBgBeige ? "bg-bg-beige" : "bg-white"}`}
  >
    <div className="container px-5 mx-auto">
      <h2 className="text-3xl font-bold text-center md:text-4xl font-montserrat text-primary-dark">
        {title}
      </h2>
      <p className="mt-4 mb-12 text-center text-gray-500 md:mb-16">
        {subtitle}
      </p>
      {children}
    </div>
  </AnimatedSection>
);

export default function MensDatsumouPage() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="MEN'S HAIR REMOVAL"
          subtitle="清潔感は、男の武器だ。"
          imageUrl="/images/beard_hair_removal_FV.png"
        />
        <CtaBar />

        <Section
          title="デキる男の、こんな「時間」の悩み"
          subtitle="一つでも当てはまったら、それは脱毛の始めどきかもしれません。"
        >
          <ProblemCards />
        </Section>

        <Section
          title="その悩み、リレアの脱毛が「時間」を生み出します"
          subtitle="脱毛は、未来の自分への賢い投資です。"
          isBgBeige={true}
        >
          <BenefitSection />
        </Section>

        <Section
          title="リレアが選ばれる理由"
          subtitle="結果重視の高性能マシンと、通いやすい都度払い制。"
        >
          <ReasonSection />
        </Section>

        <Section
          title="料金プラン"
          subtitle="コース契約やローンは一切なし。都度払いでスマートに。"
        >
          <PriceTable />
        </Section>

        <Section
          title="ご利用の流れ"
          subtitle="ご予約からアフターケアまで、簡単4ステップ。"
          isBgBeige={true}
        >
          <Flow />
        </Section>

        <Section
          title="よくあるご質問"
          subtitle="メンズ脱毛に関する、お客様からのよくある質問をまとめました。"
        >
          <Faq />
        </Section>

        {/* Accessセクションも、他のセクションと同じようにSectionコンポーネントで囲みます */}
        <Section
          title="アクセス"
          subtitle="皆様のお越しを心よりお待ちしております。"
        >
          <Access />
        </Section>
      </main>
      <Footer />
    </>
  );
}
