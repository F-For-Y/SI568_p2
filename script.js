// 获取元素
const messageInput = document.getElementById('message-input');
const submitBtn = document.getElementById('submit-btn');
const chatDisplay = document.querySelector('.chat-display');

// 添加事件监听器
submitBtn.addEventListener('click', sendMessage);
var chatCompletion = null;

// 添加Enter键事件监听器至输入框
messageInput.addEventListener('keypress', function(event) {
    // 检查是否按下了Enter键
    if (event.key === 'Enter') {
        // 阻止默认行为，如表单提交
        event.preventDefault();
        // 调用发送消息的函数
        sendMessage();
    }
});

// 定义函数：发送消息
function sendMessage() {
    // 获取输入的消息内容
    const message = messageInput.value;

    // 如果消息为空，不发送
    if (!message) {
        return;
    }
    else {
        main(message);
        console.log(chatCompletion);
    }
    
    // 创建一个新的消息元素
    const newMessage = document.createElement('div');
    newMessage.classList.add('message');
    
    // 设置消息内容和样式
    newMessage.innerHTML = message;
    newMessage.style.color = 'white';
    newMessage.style.padding = '5px 10px';
    newMessage.style.marginBottom = '10px';
    
    // 将消息添加到对话展示框中
    chatDisplay.appendChild(newMessage);
    
    // 清空输入框
    messageInput.value = '';
}

// Call GPT Function
import OpenAI from 'https://github.com/openai/openai-node';

const openai = new OpenAI({
  apiKey: 'voc-1079220371104020275310065f0c372dba0d2.53498786', // This is the default and can be omitted
});

async function main(text) {
  chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: text }],
    model: 'gpt-3.5-turbo',
  });
}