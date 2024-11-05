import React, { useState } from "react";
import styles from "./accordion.module.css";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onClick,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{
          width: "100%",
          padding: "7px",
          fontWeight: "bold",
          backgroundColor: "purple",
        }}
      >
        {title}
      </button>
      {isOpen && (
        <div style={{ padding: "10px", borderTop: "1px solid white" }}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

interface AccordionProps {
  items: { title: string; content: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Close if already open, else open
  };

  return (
    <div className={styles.accordionContainer}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
