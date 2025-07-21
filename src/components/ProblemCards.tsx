const problems = [
  {
    title: "朝の数分が惜しい",
    description:
      "毎朝のヒゲ剃りが面倒、急いで剃って肌を傷つける、シェーバーの充電や刃の交換が手間…",
  },
  {
    title: "午後の印象が気になる",
    description:
      "夕方になると青ヒゲが目立つ、大事な商談前に清潔感を確認してしまう、「疲れてる？」と聞かれる…",
  },
  {
    title: "肌のコンディションが悪い",
    description:
      "カミソリ負けで肌が荒れがち、毛穴の黒ずみやニキビが気になる、どんなケアをしても改善しない…",
  },
];

const ProblemCards = () => {
  return (
    <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-3">
      {problems.map((problem, index) => (
        <div
          key={index}
          // ★ここに border-secondary を追加！
          className="p-8 text-center bg-white border-l-8 rounded-lg shadow-lg border-secondary"
        >
          <h3 className="mb-4 text-xl font-bold text-primary-dark">
            {problem.title}
          </h3>
          <p className="text-gray-600">{problem.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProblemCards;
