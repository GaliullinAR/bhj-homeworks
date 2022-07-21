const chatWidget = document.querySelector('.chat-widget');
const chatWidgetMessages = document.getElementById('chat-widget__messages'); 
const chatWidgetMessagesContainer = document.querySelector('.chat-widget__messages-container');
const input = document.getElementById('chat-widget__input');

chatWidget.style.cursor = "pointer";
chatWidget.addEventListener('click', function (e) {
  let widget = e.currentTarget.classList;

  if (!widget.contains('chat-widget_active')) {
    widget.add('chat-widget_active');
  } 

})

function msgBot() {
  let date = new Date();
  let messages = [
    "Вы не купили ни одного товара для того, чтобы с нами так разговаривать!",
    "К сожалению, все операторы сейчас заняты. Не пишите нам больше",
    "Где ваша совесть?",
    "Кто тут?",
    "Добрый день! До свидания!",
  ];

  chatWidgetMessages.innerHTML += `
  <div class="message">
    <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
    <div class="message__text">${messages[Math.floor(Math.random() * messages.length)]}</div>
  </div>
`;
  scrollMsg();
}

msgBot();

function msgClient() {
  let date = new Date();
  chatWidgetMessages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
    <div class="message__text">${input.value}</div>
  </div>
`;
}

function scrollMsg() {
  chatWidgetMessagesContainer.scrollTop = chatWidgetMessagesContainer.scrollHeight;
}


input.addEventListener('keydown', function (e) {

  if (input.value.length > 0 && e.key === 'Enter') {
    msgClient();
    input.value = '';
    setTimeout(msgBot, 2000);
    scrollMsg();
  }
  
})





