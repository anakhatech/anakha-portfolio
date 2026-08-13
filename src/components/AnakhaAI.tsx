"use client";

import { useState, KeyboardEvent } from "react";
import {
  MessageCircle,
  X,
  Send,
  Loader2,
} from "lucide-react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function AnakhaAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "👋 Hi! I'm Anakha AI! I can help you learn about Anakha's skills, experience, projects, education, certifications, and professional background. What would you like to know? ✨",
    },
  ]);

  const getResponse = (question: string): string => {
    const q = question.toLowerCase().trim();

    // GREETINGS
    if (
      /^(hi|hello|hey|hii|hiii|hello there|hey there)[!., ]*$/.test(q)
    ) {
      return "👋 Hi! Nice to meet you! I'm Anakha AI. You can ask me anything about Anakha's professional background, skills, projects, work experience, education, or certifications. ✨";
    }

    if (
      q.includes("how are you") ||
      q.includes("how r u")
    ) {
      return "😊 I'm doing great and ready to help! What would you like to know about Anakha?";
    }

    // WHO ARE YOU
    if (
      q.includes("who are you") ||
      q.includes("what are you")
    ) {
      return "🤖 I'm Anakha AI, a portfolio assistant designed to help visitors learn more about Anakha's professional background, skills, experience, and projects.";
    }

    // WHO IS ANAKHA
    if (
      q.includes("who is anakha") ||
      q.includes("tell me about anakha") ||
      q.includes("who's anakha")
    ) {
      return "👩‍💻 Anakha Vijay is a Data and AI professional with experience in Data Engineering, AI education, and research. Her skills include Python, SQL, Power BI, machine learning, data analysis, computer vision, and dashboard development.";
    }

    // THANK YOU
    if (
      q.includes("thank you") ||
      q.includes("thanks") ||
      q === "thank" ||
      q.includes("thx")
    ) {
      return "You're very welcome! 😊 Feel free to ask me anything else about Anakha's background or projects.";
    }

    // GOODBYE
    if (
      q.includes("bye") ||
      q.includes("goodbye") ||
      q.includes("see you")
    ) {
      return "👋 Goodbye! Thanks for visiting Anakha's portfolio. Have a wonderful day! ✨";
    }

    // CONTACT / HIRE
    if (
      q.includes("contact") ||
      q.includes("email") ||
      q.includes("reach her") ||
      q.includes("hire") ||
      q.includes("connect with her") ||
      q.includes("linkedin")
    ) {
      return "📩 You can contact Anakha through the Contact section of this portfolio. You can also connect with her through her LinkedIn and GitHub profiles.";
    }

    // PYTHON
    if (
      q.includes("python") ||
      q.includes("coding language")
    ) {
      return "🐍 Yes! Anakha has hands-on experience with Python. She has used it for data analysis, machine learning, predictive modeling, computer vision, automation, and multiple portfolio projects.";
    }

    // SQL
    if (
      q.includes("sql") ||
      q.includes("database") ||
      q.includes("databases")
    ) {
      return "🗄️ Yes! Anakha has experience with SQL and database-related work, including data extraction, querying, analysis, data processing, and reporting workflows.";
    }

    // POWER BI
    if (
      q.includes("power bi") ||
      q.includes("business intelligence") ||
      q.includes("dashboard") ||
      q.includes("dashboards")
    ) {
      return "📊 Anakha has experience creating interactive dashboards and data visualizations using Power BI. Her portfolio includes projects such as the Retail Sales Dashboard, Customer Churn Prediction, and Netflix User Behavior Analysis.";
    }

    // EXCEL
    if (
      q.includes("excel") ||
      q.includes("spreadsheet")
    ) {
      return "📈 Yes! Anakha has experience using Excel for data analysis, reporting, structured data handling, and KPI-related analysis.";
    }

    // TABLEAU
    if (q.includes("tableau")) {
      return "📊 Anakha is familiar with Tableau as part of her data visualization and business intelligence skill set.";
    }

    // GIT / GITHUB
    if (
      q.includes("github") ||
      q.includes("git") ||
      q.includes("repository") ||
      q.includes("repositories")
    ) {
      return "💻 You can explore Anakha's project repositories through her GitHub profile: github.com/anakhatech";
    }

    // DATA ANALYST
    if (
      q.includes("data analyst") ||
      q.includes("data analytics") ||
      q.includes("data analysis") ||
      q.includes("analyst") ||
      q.includes("data related")
    ) {
      return "📊 Anakha's profile is strongly aligned with Data Analytics. Her skills include Python, SQL, Power BI, Excel, data cleaning, data transformation, exploratory data analysis, KPI development, dashboard creation, and data visualization.";
    }

    // DATA ENGINEERING
    if (
      q.includes("data engineer") ||
      q.includes("data engineering") ||
      q.includes("data pipeline") ||
      q.includes("pipelines") ||
      q.includes("etl")
    ) {
      return "⚙️ Anakha has professional experience as a Data Engineer. Her work involved data pipelines, workflow automation, SQL, Python, data processing, data quality, and reporting.";
    }

    // AI / ML
    if (
      q.includes("machine learning") ||
      q.includes("artificial intelligence") ||
      q.includes(" ai") ||
      q.startsWith("ai ") ||
      q.includes("ml project") ||
      q.includes("does she know ml")
    ) {
      return "🤖 Anakha has hands-on experience with AI and Machine Learning. Her work includes Customer Churn Prediction, Heart Disease Prediction, Smart Water Management, and Urban Traffic Optimization using technologies such as Python, Scikit-learn, YOLO, and OpenCV.";
    }

    // YOLO / OPENCV / COMPUTER VISION
    if (
      q.includes("yolo") ||
      q.includes("opencv") ||
      q.includes("computer vision")
    ) {
      return "👁️ Anakha has worked with YOLO and OpenCV for computer vision. These technologies were used in her Urban Traffic Optimization project to detect and analyze vehicles.";
    }

    // URBAN TRAFFIC
    if (
      q.includes("urban traffic") ||
      q.includes("traffic optimization") ||
      q.includes("traffic project")
    ) {
      return "🚦 Urban Traffic Optimization uses Python, YOLO, and OpenCV. It is an AI-powered traffic monitoring project that detects vehicles and analyzes traffic flow to support traffic optimization.";
    }

    // RETAIL SALES
    if (
      q.includes("retail sales") ||
      q.includes("sales dashboard") ||
      q.includes("sales project")
    ) {
      return "📈 The Retail Sales Dashboard was developed using Power BI, Python, SQL, and Excel. It analyzes sales trends, KPIs, revenue, profitability, customer segments, regions, and product performance.";
    }

    // CHURN
    if (
      q.includes("churn") ||
      q.includes("customer retention") ||
      q.includes("customer churn")
    ) {
      return "👥 The Customer Churn Prediction project uses Python, Scikit-learn, Pandas, and Power BI. It uses machine learning classification techniques to predict potential customer churn and identify patterns in customer behavior.";
    }

    // HEART DISEASE
    if (
      q.includes("heart disease") ||
      q.includes("heart project") ||
      q.includes("healthcare project")
    ) {
      return "🫀 The Heart Disease Prediction project uses Python, Machine Learning, and Scikit-learn. It analyzes patient health features and uses classification algorithms to predict the potential risk of heart disease.";
    }

    // SMART WATER
    if (
      q.includes("smart water") ||
      q.includes("water management") ||
      q.includes("water project") ||
      q.includes("water leakage") ||
      q.includes("leakage")
    ) {
      return "💧 Smart Water Management is an AI-powered project built using AI, Machine Learning, Python, and Streamlit. It is designed to monitor pipeline sensor data and predict potential water leakage.";
    }

    // NETFLIX
    if (
      q.includes("netflix") ||
      q.includes("user behavior")
    ) {
      return "🎬 Netflix User Behavior Analysis uses Python, Power BI, and Pandas. The project analyzes Netflix content trends, genres, ratings, release years, and global distribution.";
    }

    // PROJECTS GENERAL
    if (
      q.includes("projects") ||
      q.includes("project") ||
      q.includes("what has she built") ||
      q.includes("what did she build") ||
      q.includes("show me her work")
    ) {
      return "🚀 Anakha has completed 6 major portfolio projects:\n\n🚦 Urban Traffic Optimization\n📈 Retail Sales Dashboard\n👥 Customer Churn Prediction\n🫀 Heart Disease Prediction\n💧 Smart Water Management\n🎬 Netflix User Behavior Analysis\n\nYou can ask me about any of these individually!";
    }

    // SKILLS GENERAL
    if (
      q.includes("skills") ||
      q.includes("skill set") ||
      q.includes("technologies") ||
      q.includes("technology") ||
      q.includes("tools") ||
      q.includes("what can she do") ||
      q.includes("what does she know")
    ) {
      return "💻 Anakha's key technical skills include:\n\n• Python\n• SQL\n• Power BI\n• Tableau\n• Excel\n• Pandas\n• Scikit-learn\n• Machine Learning\n• YOLO\n• OpenCV\n• Data Cleaning & Transformation\n• Exploratory Data Analysis\n• Dashboard Development\n• Data Visualization\n• Git & GitHub";
    }

    // EXPERIENCE
    if (
      q.includes("experience") ||
      q.includes("work experience") ||
      q.includes("where has she worked") ||
      q.includes("where did she work") ||
      q.includes("career") ||
      q.includes("job history")
    ) {
      return "💼 Anakha has experience in three major roles:\n\n• Data Engineer at Sapaad Pvt Ltd\n• AI / Computer Science Educator at Bhavan's Newsprint Vidyalaya\n• Research Assistant at Toc H Institute of Science and Technology\n\nHer work includes data pipelines, Python, SQL, Power BI, AI education, research, data analysis, and machine learning.";
    }

    // EDUCATION
    if (
      q.includes("education") ||
      q.includes("degree") ||
      q.includes("qualification") ||
      q.includes("college") ||
      q.includes("what did she study")
    ) {
      return "🎓 Anakha completed a Bachelor of Technology (B.Tech) in Information Technology from Toc H Institute of Science and Technology.";
    }

    // CERTIFICATIONS
    if (
      q.includes("certification") ||
      q.includes("certificate") ||
      q.includes("certified")
    ) {
      return "🏆 Anakha's certifications include AI Tools & Applications and Foundation in Data Structures. She also holds an IELTS Overall Band Score of 5.5.";
    }

    // RESUME
    if (
      q.includes("resume") ||
      q.includes("cv")
    ) {
      return "📄 You can find Anakha's professional background, experience, technical skills, and projects through the resume available on this portfolio.";
    }

    // PORTFOLIO
    if (
      q.includes("portfolio") ||
      q.includes("website")
    ) {
      return "✨ You're currently exploring Anakha's portfolio! You can browse her About section, Experience, Skills, Projects, Certifications, and Contact information.";
    }

    // DEFAULT
    return "🤔 I may not have understood that completely, but I'm here to help! You can ask me about Anakha's skills, work experience, Data Engineering, AI, Machine Learning, Python, SQL, Power BI, education, certifications, or any of her 6 portfolio projects. 😊";
  };

  const sendMessage = (text?: string) => {
    const userMessage = (text || message).trim();

    if (!userMessage || isLoading) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setMessage("");
    setIsLoading(true);

    setTimeout(() => {
      const reply = getResponse(userMessage);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: reply,
        },
      ]);

      setIsLoading(false);
    }, 500);
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickQuestions = [
    "What are her skills?",
    "Tell me about her projects",
    "What experience does she have?",
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Chat Window */}
      {isOpen && (
        <div
          className="
            mb-4
            w-[350px]
            max-w-[calc(100vw-32px)]
            overflow-hidden
            rounded-3xl
            border
            border-blue-400/30
            bg-[#111827]/95
            shadow-[0_0_40px_rgba(59,130,246,0.25)]
            backdrop-blur-xl
          "
        >

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-blue-600/20 p-4">

            <div className="flex items-center gap-3">

              {/* KEEP YOUR EXISTING CUTE CHARACTER HERE */}
              <div className="
                flex
                h-11
                w-11
                items-center
                justify-center
                overflow-hidden
                rounded-full
                bg-gradient-to-br
                from-blue-400
                to-purple-500
              ">
                <img
                  src="/hero-character.png"
                  alt="Anakha AI"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h3 className="font-bold text-white">
                  Anakha AI ✨
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
                hover:bg-white/10
                hover:text-white
              "
            >
              <X size={20} />
            </button>

          </div>

          {/* Messages */}
          <div className="h-[380px] space-y-4 overflow-y-auto p-4">

            {messages.map((chat, index) => (

              <div
                key={index}
                className={`flex items-start gap-3 ${
                  chat.role === "user"
                    ? "justify-end"
                    : ""
                }`}
              >

                {chat.role === "assistant" && (
                  <div className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    bg-blue-500
                  ">
                    <img
                      src="/hero-character.png"
                      alt="Anakha AI"
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}

                <div
                  className={`
                    max-w-[80%]
                    whitespace-pre-line
                    rounded-2xl
                    p-3
                    text-sm
                    leading-relaxed
                    ${
                      chat.role === "user"
                        ? "rounded-tr-none bg-blue-600 text-white"
                        : "rounded-tl-none bg-white/10 text-gray-200"
                    }
                  `}
                >
                  {chat.content}
                </div>

              </div>

            ))}

            {isLoading && (
              <div className="flex items-center gap-3">

                <div className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  bg-blue-500
                ">
                  <img
                    src="/hero-character.png"
                    alt="Anakha AI"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="
                  flex
                  items-center
                  gap-2
                  rounded-2xl
                  rounded-tl-none
                  bg-white/10
                  p-3
                  text-sm
                  text-gray-300
                ">
                  <Loader2
                    size={16}
                    className="animate-spin"
                  />

                  Thinking...
                </div>

              </div>
            )}

            {messages.length === 1 && !isLoading && (
              <div className="space-y-2 pt-2">

                <p className="text-xs text-gray-500">
                  Try asking:
                </p>

                {quickQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => sendMessage(question)}
                    className="
                      block
                      w-full
                      rounded-xl
                      border
                      border-blue-400/20
                      bg-blue-500/10
                      px-3
                      py-2
                      text-left
                      text-sm
                      text-blue-300
                      transition
                      hover:bg-blue-500/20
                      hover:border-blue-400/50
                    "
                  >
                    {question}
                  </button>
                ))}

              </div>
            )}

          </div>

          {/* Input */}
          <div className="
            flex
            gap-2
            border-t
            border-white/10
            p-3
          ">

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask Anakha AI..."
              disabled={isLoading}
              className="
                flex-1
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-4
                py-3
                text-sm
                text-white
                outline-none
                placeholder:text-gray-500
                focus:border-blue-400
                disabled:opacity-50
              "
            />

            <button
              type="button"
              onClick={() => sendMessage()}
              disabled={!message.trim() || isLoading}
              className="
                flex
                items-center
                justify-center
                rounded-xl
                bg-blue-600
                px-4
                text-white
                transition-all
                hover:bg-blue-500
                hover:scale-105
                disabled:cursor-not-allowed
                disabled:opacity-50
                disabled:hover:scale-100
              "
            >
              {isLoading ? (
                <Loader2
                  size={19}
                  className="animate-spin"
                />
              ) : (
                <Send size={19} />
              )}
            </button>

          </div>

        </div>
      )}

      {/* Floating AI Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="
          group
          flex
          items-center
          gap-3
          rounded-full
          border
          border-blue-400/30
          bg-gradient-to-r
          from-blue-600
          to-purple-600
          px-5
          py-3
          font-semibold
          text-white
          shadow-[0_0_30px_rgba(59,130,246,0.35)]
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-[0_0_45px_rgba(139,92,246,0.5)]
        "
      >

        {/* Cute Character */}
        <div className="
          h-9
          w-9
          overflow-hidden
          rounded-full
          transition-transform
          duration-300
          group-hover:scale-110
        ">
          <img
            src="/hero-character.png"
            alt="Ask Anakha AI"
            className="h-full w-full object-cover"
          />
        </div>

        <span className="hidden sm:block">
          Ask Anakha AI
        </span>

        <MessageCircle
          size={20}
          className="transition-transform group-hover:rotate-12"
        />

      </button>

    </div>
  );
}