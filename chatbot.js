/**
 * ASPDC - College AI Assistant ("Aura - Campus AI Guide")
 * Indian Academic Context with Namaste greeting, state admissions,
 * hostel mess, scholarships, anti-ragging, and competitive exam info.
 */

class CollegeAIChatbot {
  constructor() {
    this.history = [];
    this.isOpen = false;
    this.knowledge = window.CollegeData ? window.CollegeData.faqKnowledge : [];
    this.init();
  }

  init() {
    this.widgetEl = document.getElementById("aiChatbotWidget");
    this.toggleBtn = document.getElementById("chatbotToggleBtn");
    this.windowEl = document.getElementById("chatbotWindow");
    this.closeBtn = document.getElementById("chatCloseBtn");
    this.messagesList = document.getElementById("chatBodyHistory");
    this.inputField = document.getElementById("chatInputField");
    this.sendBtn = document.getElementById("chatSendBtn");
    this.chipsContainer = document.getElementById("chatQuickChips");

    if (!this.widgetEl || !this.toggleBtn) return;

    this.bindEvents();
    this.renderWelcome();
  }

  bindEvents() {
    this.toggleBtn.addEventListener("click", () => this.toggleChat());
    if (this.closeBtn) {
      this.closeBtn.addEventListener("click", () => this.closeChat());
    }

    if (this.sendBtn && this.inputField) {
      this.sendBtn.addEventListener("click", () => this.handleSend());
      this.inputField.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          this.handleSend();
        }
      });
    }

    if (this.chipsContainer) {
      this.chipsContainer.addEventListener("click", (e) => {
        const chip = e.target.closest(".quick-chip");
        if (chip) {
          const text = chip.getAttribute("data-query") || chip.textContent.trim();
          this.sendMessage(text);
        }
      });
    }
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.windowEl.classList.add("open");
      if (this.inputField) this.inputField.focus();
    } else {
      this.windowEl.classList.remove("open");
    }
  }

  openChat() {
    this.isOpen = true;
    this.windowEl.classList.add("open");
    if (this.inputField) this.inputField.focus();
  }

  closeChat() {
    this.isOpen = false;
    this.windowEl.classList.remove("open");
  }

  renderWelcome() {
    const welcomeMsg = `🙏 **Namaste! Welcome to ASPDC.**
I am **Aura**, your dedicated Campus AI Counselor.

I can assist you with:
• 🎓 **B.Tech, MBA & Polytechnic Admissions (DTE Code: 042)**
• 📝 **JEE Main, State CET & D2D Lateral Entry Cutoffs**
• 💼 **Campus Placements (TCS, Infosys, Google, L&T)**
• 🛏 **Vivekananda/Gargi Hostels & Pure Veg Mess**
• 🛡️ **Anti-Ragging Directives & Statutory Cells**

How may I help your academic journey today?`;
    this.appendMessage("bot", welcomeMsg);
  }

  handleSend() {
    const text = this.inputField.value.trim();
    if (!text) return;
    this.inputField.value = "";
    this.sendMessage(text);
  }

  sendMessage(text) {
    this.appendMessage("user", text);

    const typingIndicator = document.createElement("div");
    typingIndicator.className = "chat-bubble bot typing-indicator";
    typingIndicator.innerHTML = `<em>Aura is checking campus records...</em>`;
    this.messagesList.appendChild(typingIndicator);
    this.scrollToBottom();

    setTimeout(() => {
      if (typingIndicator.parentNode) {
        typingIndicator.remove();
      }
      const response = this.computeResponse(text);
      this.appendMessage("bot", response);
    }, 550);
  }

  computeResponse(query) {
    const q = query.toLowerCase();

    // Check custom knowledge base
    for (let item of this.knowledge) {
      for (let kw of item.keywords) {
        if (q.includes(kw)) {
          return item.response;
        }
      }
    }

    if (q.includes("namaste") || q.includes("hello") || q.includes("hi") || q.includes("pranam")) {
      return `Namaste! 🙏 Glad to assist you. Ask me anything about our academic programs, admissions process through State CET/JEE Main, or campus tour!`;
    }

    if (q.includes("thank") || q.includes("dhanyawad") || q.includes("shukriya")) {
      return `You are most welcome! Dhanyawad for connecting with ASPDC. Wishing you great success in your career! 🌟`;
    }

    if (q.includes("contact") || q.includes("phone") || q.includes("address") || q.includes("location") || q.includes("how to reach")) {
      return `**ASPDC Contact & Location:**
📍 **Campus:** ASPDC Knowledge Complex, Sector 12, Vidyanagar University Road, Expressway Corridor
📞 **Toll-Free Admissions Helpline:** 1800-200-2773
🚨 **National Anti-Ragging Helpline:** 1800-180-5522
📧 **Email:** admissions@aspdc.edu.in
🚌 **Transport:** Direct state transport buses and college bus routes available from all major points of the city.`;
    }

    return `Thank you for reaching out! Here are quick topics you can ask me about:
- **"What is the eligibility for B.Tech CSE and D2D Lateral Entry?"**
- **"Tell me about placement statistics and top recruiting companies"**
- **"What are the hostel and pure veg mess charges?"**
- **"How to apply for National Scholarship Portal (NSP) schemes?"**
- **"Tell me about the Anti-Ragging zero-tolerance policy"**

Or speak directly with our admissions counselor at **1800-200-2773**!`;
  }

  appendMessage(sender, markdownText) {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${sender}`;
    bubble.innerHTML = this.formatMarkdown(markdownText);
    this.messagesList.appendChild(bubble);
    this.scrollToBottom();
  }

  formatMarkdown(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br/>')
      .replace(/• (.*?)(<br\/>|$)/g, '<div style="margin-left:8px">• $1</div>');
  }

  scrollToBottom() {
    this.messagesList.scrollTop = this.messagesList.scrollHeight;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.collegeBot = new CollegeAIChatbot();
});
