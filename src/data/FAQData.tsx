import { useTranslation } from "react-i18next";

export function FAQData() {
  const { t } = useTranslation();

  const faqData = [
    {
      question: t("faq-question-1"),
      answer: t("faq-answer-1"),
    },
    {
      question: t("faq-question-2"),
      answer: t("faq-answer-2"),
    },
    {
      question: t("faq-question-3"),
      answer: t("faq-answer-3"),
    },
    {
      question: t("faq-question-4"),
      answer: t("faq-answer-4"),
    },
    {
      question: t("faq-question-5"),
      answer: t("faq-answer-5"),
    },
    {
      question: t("faq-question-6"),
      answer: t("faq-answer-6"),
    },
    {
      question: t("faq-question-7"),
      answer: t("faq-answer-7"),
    },
    {
      question: t("faq-question-8"),
      answer: t("faq-answer-8"),
    },
    {
      question: t("faq-question-9"),
      answer: t("faq-answer-9"),
    },
    {
      question: t("faq-question-10"),
      answer: t("faq-answer-10"),
    },
  ];

  return faqData;
}
