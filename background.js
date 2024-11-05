chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        document.body.style.backgroundColor = 'red';
      }
    });
  });

  document.getElementById('change-color').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { message: 'change-color' });
    });
  });