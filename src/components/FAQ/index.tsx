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
  const [isOpenArray, setIsOpenArray] = useState(
    Array(FAQData.length).fill(false)
  );

  const toggleDetails = (index: number) => {
    const newIsOpenArray = [...isOpenArray];
    newIsOpenArray[index] = !newIsOpenArray[index];
    setIsOpenArray(newIsOpenArray);
  };

  // Divide as perguntas em duas colunas
  const halfLength = Math.ceil(FAQData.length / 2);
  const firstHalf = FAQData.slice(0, halfLength);
  const secondHalf = FAQData.slice(halfLength);

  return (
    <FAQContainer>
      <Title>perguntas frequentes</Title>
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
