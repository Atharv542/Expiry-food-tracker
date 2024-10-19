import React from 'react';
import './FAQs.css'; 

const FAQs = () => {
  const faqs = [
    {
      question: 'What is a food expiry tracker?',
      answer:
        'A food expiry tracker is a tool or app that helps you monitor the shelf life of your food items, alerting you when they are nearing their expiration dates.',
    },
    {
      question: 'How does the food expiry tracker work?',
      answer:
        'Users input their food items along with purchase dates and expiry dates. The tracker then sends notifications or reminders when items are approaching their expiration dates.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Most reputable food expiry trackers prioritize user privacy and data security, using encryption and secure storage methods.',
    },
    {
      question: 'What types of food can I track?',
      answer:
        'You can track various food categories, including perishable items (fruits, vegetables, dairy) and non-perishables (canned goods, dry foods).',
    },
    {
      question: 'What should I do if I miss an expiration date?',
      answer:
        "If you miss an expiration date, assess the item for any signs of spoilage. If it looks or smells off, it's best to discard it.",
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question">{faq.question}</div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;



