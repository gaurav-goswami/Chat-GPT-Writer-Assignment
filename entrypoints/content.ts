import { inject_ai_reply_icon } from "@/utils/methods";

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


chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.from === "insert-btn") {
    const messageInputField = document.querySelector(".msg-form__contenteditable");
    if (messageInputField) {
      (messageInputField as HTMLElement).focus();
      document.execCommand('insertText', false, message.text);
      sendResponse({ status: "success" });
    } else {
      sendResponse({ status: "failed", reason: "Message input field not found" });
    }
  }
});


function injectTailwindCSS() {
  const tailwindLink = document.createElement('link');
  tailwindLink.rel = 'stylesheet';
  tailwindLink.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
  document.head.appendChild(tailwindLink);
}

injectTailwindCSS();