"use client";

import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  X,
  Send,
  Briefcase,
  Code2,
  FolderKanban,
  GraduationCap,
  Award,
  Mail,
  Sparkles,
} from "lucide-react";

type ChatMessage = {
  role: "bot" | "user";
  text: string;
};

const quickQuestions = [
  {
    label: "Her Experience",
    icon: Briefcase,
    question: "What experience does Anakha have?",
  },
  {
    label: "Her Skills",
    icon: Code2,
    question: "What are Anakha's skills?",
  },
  {
    label: "Her Projects",
    icon: FolderKanban,
    question: "Tell me about Anakha's projects",
  },
  {
    label: "Education",
    icon: GraduationCap,
    question: "Tell me about Anakha's education",
  },
  {
    label: "Certifications",
    icon: Award,
    question: "What certifications does Anakha have?",
  },
  {
    label: "Contact Info",
    icon: Mail,
    question: "How can I contact Anakha?",
  },
];

export default function AnakhaAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      text: `Hi there! I'm Anakha AI.

Ask me anything about Anakha's skills, projects, experience, education, or certifications! ✨`,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const getAnswer = (question: string) => {
    const text = question.toLowerCase();

    if (
      text.includes("skill") ||
      text.includes("python") ||
      text.includes("sql") ||
      text.includes("power bi") ||
      text.includes("technology")
    ) {
      return `💻 Anakha's key skills include:

• Python
• SQL
• Power BI
• Excel
• Data Analysis
• Data Engineering
• Machine Learning
• Artificial Intelligence
• OpenCV
• YOLO
• React and Next.js

She enjoys working with data and building practical AI projects! ✨`;
    }

    if (
      text.includes("project") ||
      text.includes("built") ||
      text.includes("portfolio")
    ) {
      return `🚀 Anakha has worked on projects including:

🚦 Urban Traffic Optimization
Uses YOLO and OpenCV for vehicle detection and traffic analysis.

💧 Smart Water Management
An AI and IoT-based solution for smarter water resource management.

📊 Retail Sales Dashboard
Analyzes sales, revenue, KPIs, products, and regions.

👥 Customer Churn Prediction
Uses machine learning to predict customers who may leave.

❤️ Heart Disease Prediction
A machine learning model for heart disease risk prediction.

🎬 Netflix User Behavior Analysis
Explores content trends, genres, ratings, and release years.`;
    }

    if (
      text.includes("experience") ||
      text.includes("job") ||
      text.includes("career") ||
      text.includes("work")
    ) {
      return `💼 Anakha has experience as a:

• Data Engineer
• AI Teacher
• Research Assistant

Her experience combines Data Engineering, Artificial Intelligence, teaching, research, and technology projects. 🚀`;
    }

    if (
      text.includes("education") ||
      text.includes("study") ||
      text.includes("degree") ||
      text.includes("college")
    ) {
      return `🎓 Anakha has a Bachelor of Technology (B.Tech) background in Information Technology.

Her areas of interest include:

• Artificial Intelligence
• Machine Learning
• Data Engineering
• Data Analytics
• Data Science`;
    }

    if (
      text.includes("certificate") ||
      text.includes("certification")
    ) {
      return `🏆 Anakha has participated in workshops and learning experiences related to:

• Artificial Intelligence
• R Programming
• Computer Vision
• AI in Education
• Data and Technology

You can explore more in the Certifications section of this portfolio! ✨`;
    }

    if (
      text.includes("contact") ||
      text.includes("email") ||
      text.includes("reach") ||
      text.includes("hire")
    ) {
      return `📬 You can contact Anakha through the Contact section of this portfolio.

Feel free to connect for opportunities, collaborations, or project discussions! ✨`;
    }

    if (
      text.includes("hello") ||
      text.includes("hi")
    ) {
      return `👋 Hello! Nice to meet you!

I'm here to help you explore Anakha's portfolio.

Ask me about:

💻 Skills
🚀 Projects
💼 Experience
🎓 Education
🏆 Certifications
📬 Contact information`;
    }

    return `✨ I can help you learn about Anakha's portfolio!

Try asking:

• What are her skills?
• Tell me about her projects
• What experience does she have?
• What is her education?
• What certifications does she have?

Or click one of the buttons above! 💙`;
  };

  const sendMessage = (customMessage?: string) => {
    const text = (customMessage || message).trim();

    if (!text || isTyping) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text,
      },
    ]);

    setMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const answer = getAnswer(text);

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: answer,
        },
      ]);

      setIsTyping(false);
    }, 700);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">

      {isOpen && (
        <div
          className="
            relative
            mb-4
            w-[360px]
            max-w-[calc(100vw-24px)]
            overflow-hidden
            rounded-[28px]
            border
            border-blue-400/40
            bg-[#0c1630]/95
            shadow-[0_0_45px_rgba(59,130,246,0.35)]
            backdrop-blur-xl
          "
        >

          {/* Sparkles */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            <div className="absolute left-4 top-20 animate-pulse text-cyan-300">
              ✨
            </div>

            <div className="absolute right-5 top-28 animate-bounce text-purple-300">
              ✦
            </div>

            <div className="absolute bottom-24 left-5 animate-pulse text-blue-300">
              ✧
            </div>

            <div className="absolute bottom-40 right-5 animate-pulse text-purple-300">
              ✨
            </div>

          </div>

          {/* Header */}

          <div
            className="
              relative
              flex
              items-center
              justify-between
              border-b
              border-white/10
              bg-gradient-to-r
              from-[#172a55]
              to-[#202c58]
              p-4
            "
          >

            <div className="flex items-center gap-3">

              {/* AI Profile */}

              <div className="relative">

                <div
                  className="
                    h-12
                    w-12
                    animate-bounce
                    overflow-hidden
                    rounded-full
                    border-2
                    border-purple-400
                    shadow-[0_0_20px_rgba(168,85,247,0.7)]
                  "
                >
                  <img
                    src="/hero-character.png"
                    alt="Anakha AI"
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />
                </div>

                <span
                  className="
                    absolute
                    -left-2
                    -top-2
                    animate-pulse
                    text-sm
                    text-yellow-200
                  "
                >
                  ✨
                </span>

                <span
                  className="
                    absolute
                    -right-2
                    top-0
                    animate-ping
                    text-xs
                    text-purple-200
                  "
                >
                  ✦
                </span>

                <span
                  className="
                    absolute
                    bottom-0
                    right-0
                    flex
                    h-3
                    w-3
                  "
                >
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-green-400
                      opacity-75
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-3
                      w-3
                      rounded-full
                      border-2
                      border-[#172a55]
                      bg-green-400
                    "
                  />
                </span>

              </div>

              <div>

                <h3 className="flex items-center gap-1 font-bold text-white">

                  Anakha AI

                  <Sparkles
                    size={16}
                    className="animate-pulse text-yellow-300"
                  />

                </h3>

                <p className="text-xs text-green-400">
                  ● Online
                </p>

              </div>

            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="
                rounded-full
                p-2
                text-gray-300
                transition
                hover:rotate-90
                hover:bg-white/10
                hover:text-white
              "
            >
              <X size={20} />
            </button>

          </div>

          {/* Messages */}

          <div className="relative h-[385px] space-y-4 overflow-y-auto p-4">

            {messages.map((item, index) => (

              <div
                key={index}
                className={`flex items-start gap-2 ${
                  item.role === "user"
                    ? "flex-row-reverse"
                    : ""
                }`}
              >

                {item.role === "bot" && (

                  <div
                    className="
                      h-9
                      w-9
                      shrink-0
                      overflow-hidden
                      rounded-full
                      border
                      border-purple-400/60
                      shadow-[0_0_12px_rgba(139,92,246,0.5)]
                    "
                  >

                    <img
                      src="/hero-character.png"
                      alt="Anakha AI"
                      className="h-full w-full object-cover"
                    />

                  </div>

                )}

                <div
                  className={`max-w-[78%] whitespace-pre-line rounded-2xl p-3 text-sm leading-relaxed ${
                    item.role === "user"
                      ? "rounded-tr-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "rounded-tl-sm border border-white/5 bg-white/10 text-gray-200"
                  }`}
                >
                  {item.text}
                </div>

              </div>

            ))}

            {/* Typing animation */}

            {isTyping && (

              <div className="flex items-center gap-2">

                <div className="h-9 w-9 overflow-hidden rounded-full border border-purple-400/60">

                  <img
                    src="/hero-character.png"
                    alt="Anakha AI"
                    className="h-full w-full object-cover"
                  />

                </div>

                <div className="flex gap-1 rounded-2xl bg-white/10 px-4 py-3">

                  <span className="h-2 w-2 animate-bounce rounded-full bg-blue-300" />

                  <span className="h-2 w-2 animate-bounce rounded-full bg-purple-300 [animation-delay:150ms]" />

                  <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-300 [animation-delay:300ms]" />

                </div>

              </div>

            )}

            {/* Quick Questions */}

            {messages.length === 1 && (

              <div className="grid grid-cols-2 gap-2 pt-1">

                {quickQuestions.map((question) => {

                  const Icon = question.icon;

                  return (

                    <button
                      key={question.label}
                      type="button"
                      onClick={() => sendMessage(question.question)}
                      className="
                        group
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-blue-400/30
                        bg-blue-500/5
                        px-3
                        py-2.5
                        text-left
                        text-xs
                        text-blue-200
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-purple-400
                        hover:bg-purple-500/15
                        hover:shadow-[0_0_18px_rgba(139,92,246,0.25)]
                      "
                    >

                      <Icon
                        size={17}
                        className="
                          text-cyan-300
                          transition
                          group-hover:scale-110
                          group-hover:rotate-6
                        "
                      />

                      {question.label}

                    </button>

                  );
                })}

              </div>

            )}

            <div ref={messagesEndRef} />

          </div>

          {/* Input */}

          <div
            className="
              relative
              border-t
              border-white/10
              bg-[#101a32]/90
              p-3
            "
          >

            <div className="flex items-center gap-2">

              <input
                type="text"
                value={message}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="Ask Anakha AI..."
                className="
                  flex-1
                  rounded-xl
                  border
                  border-blue-400/20
                  bg-white/5
                  px-4
                  py-3
                  text-sm
                  text-white
                  outline-none
                  transition
                  placeholder:text-gray-500
                  focus:border-purple-400
                  focus:shadow-[0_0_15px_rgba(139,92,246,0.2)]
                "
              />

              <button
                type="button"
                onClick={() => sendMessage()}
                disabled={!message.trim() || isTyping}
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-blue-500
                  to-purple-600
                  text-white
                  shadow-[0_0_20px_rgba(59,130,246,0.3)]
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_28px_rgba(139,92,246,0.6)]
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                <Send size={19} />
              </button>

            </div>

            <p className="mt-2 text-center text-[10px] text-gray-500">
              ✨ Anakha AI • Built with passion 💙
            </p>

          </div>

        </div>
      )}

      {/* Floating Button */}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="
          group
          relative
          flex
          items-center
          gap-3
          overflow-hidden
          rounded-full
          border
          border-blue-300/40
          bg-gradient-to-r
          from-blue-600
          via-indigo-600
          to-purple-600
          px-5
          py-3
          font-semibold
          text-white
          shadow-[0_0_30px_rgba(59,130,246,0.4)]
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-[0_0_45px_rgba(139,92,246,0.7)]
        "
      >

        <div
          className="
            absolute
            inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
            transition-transform
            duration-700
            group-hover:translate-x-full
          "
        />

        <div
          className="
            relative
            h-8
            w-8
            overflow-hidden
            rounded-full
            border
            border-white/50
          "
        >

          <img
            src="/hero-character.png"
            alt="Anakha AI"
            className="
              h-full
              w-full
              object-cover
              transition
              duration-300
              group-hover:scale-110
            "
          />

          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border border-blue-700 bg-green-400" />

        </div>

        <span className="relative hidden sm:block">
          Ask Anakha AI
        </span>

        <MessageCircle
          size={19}
          className="relative transition-transform group-hover:rotate-12"
        />

        <Sparkles
          size={14}
          className="absolute right-1 top-1 animate-pulse text-yellow-200"
        />

      </button>

    </div>
  );
}