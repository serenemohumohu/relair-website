const Access = () => {
  return (
    <section className="py-20 section-container bg-white" id="access">
      <h2 className="text-3xl font-bold text-center text-[#1a2e44]">ACCESS</h2>
      <p className="text-center text-gray-500 mb-12">店舗情報</p>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-xl font-bold text-[#1a2e44] mb-4">
            トータルビューティー リレア
          </h3>
          <p className="text-gray-600 mb-3">
            〒874-0910
            <br />
            大分県別府市石垣西3-2-21 Domus Ishigaki w02号
          </p>
          <p className="text-gray-600 mb-3">
            <strong>電話番号:</strong> 050-8887-1232
          </p>
          <p className="text-gray-600 mb-3">
            <strong>アクセス:</strong>{" "}
            別府駅から車で5分、南石垣バス停から徒歩1分
          </p>
          <p className="text-gray-600 mb-3">
            <strong>営業時間:</strong> 月〜土 10:00〜20:00
          </p>
          <p className="text-gray-600 mb-3">
            <strong>定休日:</strong> 日曜・祝日不定休
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.088301592446!2d131.4829583762579!3d33.29111897336199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3546a347a5997631%3A0x889c288965882c5!2z44OI44Kq44K%2F44Or44O744K544Kv44OG44Kj44K544O844Oa44O8IOODreODoOOCouOCog!5e0!3m2!1sja!2sjp!4v1721142647653!5m2!1sja!2sjp"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          className="rounded-md shadow-md"
        ></iframe>
      </div>
    </section>
  );
};

export default Access;
