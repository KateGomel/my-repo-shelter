import { dataCards } from "./scripts/arrCard.js";

const criteria = [
  {
    mark: "\n1. Вёрстка страницы Main соответствует макету при ширине экрана 1280px",
    parts: [
      { description: "блок header", score: 2 },
      { description: "блок not-only", score: 2 },
      { description: "блок about", score: 2 },
      { description: "блок pets", score: 2 },
      { description: "блок help", score: 2 },
      { description: "блок donation", score: 2 },
      { description: "блок footer", score: 2 },
    ],
  },

  {
    mark: "\n2. Вёрстка страницы Main соответствует макету при ширине экрана 768px",
    parts: [
      { description: "блок header", score: 2 },
      { description: "блок not-only", score: 2 },
      { description: "блок about", score: 2 },
      { description: "блок pets", score: 2 },
      { description: "блок help", score: 2 },
      { description: "блок donation", score: 2 },
      { description: "блок footer", score: 2 },
    ],
  },

  {
    mark: "\n3. Вёрстка страницы Main соответствует макету при ширине экрана 320px",
    parts: [
      { description: "блок header", score: 2 },
      { description: "блок not-only", score: 2 },
      { description: "блок about", score: 2 },
      { description: "блок pets", score: 2 },
      { description: "блок help", score: 2 },
      { description: "блок donation", score: 2 },
      { description: "блок footer", score: 2 },
    ],
  },

  {
    mark: "\n4. Вёрстка страницы Pets соответствует макету при ширине экрана 1280px",
    parts: [
      { description: "блок header", score: 2 },
      { description: "блок pets", score: 2 },
      { description: "блок about", score: 2 },
    ],
  },

  {
    mark: "\n5. Вёрстка страницы Pets соответствует макету при ширине экрана 768px",
    parts: [
      { description: "блок header", score: 2 },
      { description: "блок pets", score: 2 },
      { description: "блок about", score: 2 },
    ],
  },

  {
    mark: "\n6. Вёрстка страницы Pets соответствует макету при ширине экрана 320px",
    parts: [
      { description: "блок header", score: 2 },
      { description: "блок pets", score: 2 },
      { description: "блок about", score: 2 },
    ],
  },

  {
    mark: "\n7. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, \nсправа от отдельных блоков не появляются белые поля. \nВесь контент страницы при этом сохраняется: не обрезается и не удаляется",
    parts: [
      {
        description:
          "нет полосы прокрутки при ширине страницы Main от 1280рх до 768рх",
        score: 5,
      },
      {
        description:
          "нет полосы прокрутки при ширине страницы Main от 768рх до 320рх",
        score: 5,
      },
      {
        description:
          "нет полосы прокрутки при ширине страницы Pets от 1280рх до 768рх",
        score: 5,
      },
      {
        description:
          "нет полосы прокрутки при ширине страницы Pets от 768рх до 320рх",
        score: 5,
      },
    ],
  },

  {
    mark: "\n8. Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается \nпод этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, \nизображения могут менять размер, но сохраняют правильные пропорции ",
    parts: [
      { description: "на странице Main", score: 4 },
      { description: "на странице Pets", score: 4 },
    ],
  },

  {
    mark: "\n9. При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню",
    score: 4,
  },

  { mark: "\n10. Верстка обеих страниц валидная", score: 8 },
];

let totalAssessment = 0;
const partsAssessment = criteria.map((item) => {
  if (item.parts) {
    const temp = item.parts.reduce((accum, part) => {
      return accum + part.score;
    }, 0);
    item.amount = temp;
    totalAssessment = totalAssessment + item.amount;
  }
  if (item.score) {
    totalAssessment = totalAssessment + item.score;
  }
});

const assessment = () => {
  console.log(`Общая оценка выполнение работы + ${totalAssessment}`);
  criteria.forEach((item) => {
    if (item.parts) {
      console.log(`${item.mark} + ${item.amount}`);

      for (let part of item.parts) {
        console.log(`- ${part.description} +${part.score}`);
      }
    } else {
      console.log(`${item.mark} +${item.score}`);
    }
  });
};
assessment(criteria);
