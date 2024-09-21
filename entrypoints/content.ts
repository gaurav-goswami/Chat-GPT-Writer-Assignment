import AiReplyButton from "@/components/AiReplyButton.tsx";
import React from "react";
import { createRoot } from "react-dom/client";

export default defineContentScript({
  matches: ['*://www.linkedin.com/messaging/*'],
  main() {
    console.log("Content script is running on linkedin messaging page");

    const observer = new MutationObserver(() => {
      console.log("Observing for the input field");
      const message_input_field = document.querySelector(".msg-form__contenteditable");
      console.log("message_input_field", message_input_field);
      if(message_input_field) {
        inject_ai_reply_icon(message_input_field);
        observer.disconnect();
      }
    })
    observer.observe(document.body, {childList: true, subtree: true});
  },
});

function inject_ai_reply_icon(message_input_field: Element) {
  const iconContainer = document.createElement('div');
  iconContainer.id = 'ai-button-container';
  iconContainer.style.position = 'absolute';
  iconContainer.style.right = '10px';
  iconContainer.style.bottom = '5px';
  iconContainer.style.zIndex = '1000';
  iconContainer.style.backgroundColor = 'white';
  iconContainer.style.borderRadius = '100%';
  iconContainer.style.padding = '5px';
  iconContainer.style.width = '25px';
  iconContainer.style.height = '25px';
  iconContainer.style.display = 'flex';
  iconContainer.style.alignItems = 'center';
  iconContainer.style.justifyContent = 'center';
  iconContainer.style.display = 'none';
  message_input_field.parentElement?.appendChild(iconContainer);

  message_input_field.addEventListener('focus', (e) => {
    iconContainer.style.display = 'flex';
    e.stopPropagation();
  });

  message_input_field.addEventListener('blur', (e: Event) => {
    const target = (e as FocusEvent).relatedTarget as Node | null;
    if (!(message_input_field.contains(target) || iconContainer.contains(target))) {
      iconContainer.style.display = 'none';
    }
  });

  iconContainer.addEventListener('click', (e) => {
    e.preventDefault();
  });

  const root = createRoot(iconContainer);
  root.render(React.createElement(AiReplyButton));
}


