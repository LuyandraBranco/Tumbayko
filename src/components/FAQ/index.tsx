import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  FAQContainer,
  Title,
  ItemsFAQContainer,
  ItemFAQColumn,
  Details,
  Summary,
  Answer,
  ToggleSymbol,
} from "./styles";
import { FAQData } from "../../data/FAQData";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const { t } = useTranslation();
  const faqData = FAQData();
  const [isOpenArray, setIsOpenArray] = useState(
    Array(faqData.length).fill(false)
  );

  const toggleDetails = (index: number) => {
    const newIsOpenArray = [...isOpenArray];
    newIsOpenArray[index] = !newIsOpenArray[index];
    setIsOpenArray(newIsOpenArray);
  };

  // Divide as perguntas em duas colunas
  const halfLength = Math.ceil(faqData.length / 2);
  const firstHalf = faqData.slice(0, halfLength);
  const secondHalf = faqData.slice(halfLength);

  return (
    <FAQContainer>
      <Title>{t("faq-title")}</Title>
      <ItemsFAQContainer>
        <ItemFAQColumn>
          {firstHalf.map((data: FAQItem, index: number) => (
            <Details key={index}>
              <Summary onClick={() => toggleDetails(index)}>
                {data.question}
                <ToggleSymbol>{isOpenArray[index] ? "-" : "+"}</ToggleSymbol>
              </Summary>
              {isOpenArray[index] && <Answer>{data.answer}</Answer>}
            </Details>
          ))}
        </ItemFAQColumn>
        <ItemFAQColumn>
          {secondHalf.map((data: FAQItem, index: number) => (
            <Details key={index + halfLength}>
              <Summary onClick={() => toggleDetails(index + halfLength)}>
                {data.question}
                <ToggleSymbol>
                  {isOpenArray[index + halfLength] ? "-" : "+"}
                </ToggleSymbol>
              </Summary>
              {isOpenArray[index + halfLength] && (
                <Answer>{data.answer}</Answer>
              )}
            </Details>
          ))}
        </ItemFAQColumn>
      </ItemsFAQContainer>
    </FAQContainer>
  );
}
