import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Briefcase, 
  Mail, 
  Linkedin, 
  Download, 
  Play, 
  GraduationCap, 
  CheckCircle2, 
  Phone,
  Send,
  Settings,
  ArrowRight,
  MapPin,
  FileText,
  Users,
  Target,
  BarChart
} from "lucide-react";
// use image from `public` to preserve original quality

// --- Components ---

const BentoCard = ({ children, className = "", noPadding = false }: { children: React.ReactNode, className?: string, noPadding?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className={`bg-zinc-900 rounded-3xl shadow-sm border border-zinc-800 overflow-hidden hover:border-yellow-500/50 hover:shadow-yellow-900/10 transition-colors duration-300 flex flex-col ${noPadding ? '' : 'p-6'} ${className}`}
  >
    {children}
  </motion.div>
);

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full h-full min-h-[200px] bg-zinc-950 rounded-2xl overflow-hidden group border border-zinc-800">
      {!isPlaying ? (
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-zinc-900"
          onClick={() => setIsPlaying(true)}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950 opacity-50" />
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/20 z-10 text-black"
          >
            <Play className="w-6 h-6 ml-1" fill="currentColor" />
          </motion.div>
          <p className="mt-4 text-zinc-300 font-medium z-10 px-4 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs border border-zinc-700">
            Смотреть видео-презентацию
          </p>
        </div>
      ) : (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className="text-center text-white p-4">
            <p className="mb-4 text-zinc-400">Видео загружается...</p>
            <button 
              onClick={(e) => { e.stopPropagation(); setIsPlaying(false); }}
              className="text-sm px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition text-zinc-200"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const SkillBadge = ({ name }: { name: string }) => (
  <div className="px-3 py-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors cursor-default border border-zinc-700/50">
    <span className="text-xs font-medium text-yellow-500/90">{name}</span>
  </div>
);

const StatItem = ({ value, label }: { value: string, label: string }) => (
  <div className="text-center p-2 bg-zinc-800/50 rounded-2xl border border-zinc-800 min-w-0">
    <div className="text-lg md:text-xl font-bold text-yellow-400 mb-0.5 truncate leading-tight">{value}</div>
    <div className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-wider font-semibold break-words">{label}</div>
  </div>
);

const ExperienceItem = ({ role, company, period, details }: { role: string, company: string, period: string, details?: string[] }) => (
  <div className="relative pl-6 border-l border-zinc-700 pb-6 last:pb-0 group">
    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-600 border border-zinc-900 group-hover:bg-yellow-400 transition-colors" />
    <h4 className="font-bold text-zinc-100 text-base md:text-lg mb-1">{role}</h4>
    <div className="flex justify-between items-baseline mb-2">
      <p className="text-sm md:text-[15px] text-yellow-500 font-medium">{company}</p>
      <span className="text-xs md:text-sm text-zinc-500 font-mono">
        {period}
      </span>
    </div>
    {details && (
      <ul className="text-sm md:text-[15px] text-zinc-300 space-y-1 list-disc list-inside marker:text-zinc-600 leading-snug">
        {details.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )}
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-300 p-4 md:p-8 flex items-center justify-center font-sans selection:bg-yellow-500/30 selection:text-yellow-200 overflow-x-hidden">
      
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-min md:h-[90vh] md:max-h-[1080px]">
        
        {/* 1. Profile Card (Large) */}
        <BentoCard className="md:col-span-1 lg:col-span-1 md:row-span-2 relative group overflow-hidden bg-zinc-900 border-zinc-800" noPadding>
          {/* Image Background Area */}
          <div className="relative w-full h-[45%] min-h-[220px]">
             <img 
               src="/Screenshot_20251022-162424~7.png" 
               alt="Чураев Евгений" 
               className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
          </div>
          
          <div className="relative z-10 flex flex-col p-4 -mt-8">
            <h1 className="text-3xl font-bold text-white mb-1 text-center">
              Чураев Евгений
            </h1>
            <p className="text-yellow-500 font-medium text-sm mb-6 flex items-center gap-2 justify-center">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
              Project Manager
            </p>
            
            <div className="space-y-4 text-sm text-zinc-400 mb-6 flex-grow text-center">
              <p>
                Руководитель проектов с опытом 5+ лет. 
                Управляю рисками и довожу 100% проектов до финала.
              </p>
              <div className="flex flex-col gap-2 items-center">
                 <div className="flex items-center gap-2">
                   <MapPin className="w-4 h-4 text-zinc-600" />
                   Казань, готов к переезду
                 </div>
                 <div className="flex items-center gap-2">
                   <Users className="w-4 h-4 text-zinc-600" />
                   28 лет
                 </div>
              </div>
            </div>

            <div className="space-y-3 mt-auto">
              <a href="mailto:makentoshgh@gmail.com" className="flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors p-2 hover:bg-zinc-800/50 rounded-lg border border-zinc-800 hover:border-zinc-700">
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-yellow-500 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">makentoshgh@gmail.com</span>
              </a>
              <a href="https://t.me/honky_tonc" className="flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors p-2 hover:bg-zinc-800/50 rounded-lg border border-zinc-800 hover:border-zinc-700">
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-yellow-500 shrink-0">
                  <Send className="w-4 h-4" />
                </div>
                <span className="truncate">@honky_tonc</span>
              </a>
              <a href="tel:+79867136840" className="flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors p-2 hover:bg-zinc-800/50 rounded-lg border border-zinc-800 hover:border-zinc-700">
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-yellow-500 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="truncate">+7 (986) 713-68-40</span>
              </a>
              <div className="mt-2 flex items-center justify-center">
                <a href="/Резюме_Project_Manager_Евгений_Николаевич_Чураев_от_21_02_2026_07.pdf" download className="inline-flex items-center gap-2 px-3 py-2 bg-yellow-500 text-black rounded-lg font-bold text-sm">
                  Скачать резюме
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* 2. Video Intro Card */}
        <BentoCard className="md:col-span-2 lg:col-span-2 h-64 md:h-auto overflow-hidden relative" noPadding>
          <div className="absolute top-4 left-6 z-20 bg-black/60 backdrop-blur-md border border-zinc-700 px-3 py-1 rounded-full text-[10px] font-bold text-yellow-500 shadow-sm uppercase tracking-wider">
            Видео-визитка
          </div>
          <VideoPlayer />
        </BentoCard>

        {/* 3. Stats + Ключевое (combined) */}
        <BentoCard className="flex flex-col justify-between gap-4 bg-zinc-900">
          <div className="grid grid-cols-3 gap-2">
            <StatItem value="5+" label="Лет опыта" />
            <StatItem value="100%" label="Соблюдение SLA" />
            <StatItem value="4+" label="Федеральных проекта" />
          </div>
          <div className="pt-3 border-t border-zinc-800">
            <h4 className="font-bold text-white text-sm mb-2">Ключевое</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-3 text-sm font-medium opacity-80 hover:text-white transition-colors">
                <CheckCircle2 className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                Бюджетирование
              </li>
              <li className="flex items-center gap-3 text-sm font-medium opacity-80 hover:text-white transition-colors">
                <CheckCircle2 className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                Оптимизация процессов
              </li>
              <li className="flex items-center gap-3 text-sm font-medium opacity-80 hover:text-white transition-colors">
                <CheckCircle2 className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                Полный цикл (Pre-sale – Release)
              </li>
              <li className="flex items-center gap-3 text-sm font-medium opacity-80 hover:text-white transition-colors">
                <CheckCircle2 className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                Деловая коммуникация
              </li>
            </ul>
          </div>
        </BentoCard>

        {/* 4/5. Experience (replaces Skills + Education) — span width like video */}
        <BentoCard className="md:col-span-2 lg:col-span-2 overflow-hidden flex flex-col">
          <div className="flex items-center justify-between mb-6 sticky top-0 bg-zinc-900 z-10 pb-2 border-b border-zinc-800">
            <h3 className="font-bold text-white text-lg">Опыт работы</h3>
            <Briefcase className="w-5 h-5 text-yellow-500" />
          </div>

          <div className="overflow-y-auto pr-2 custom-scrollbar-dark flex-grow space-y-2">
            <ExperienceItem 
              role="Руководитель проекта" 
              company="АО «БАРС груп»" 
              period="2022 — Наст. время"
              details={[
                  "Руководство полным циклом ИТ-проектов.",
                  "Координация стейкхолдеров и ведение отчётности.",
                  "Повышение рентабельности через Jira.",
                  "Внедрение сервиса для 1500 пользователей.",
                  "Управление командой до 15 чел.",
                  "Устранение тех. долга."
                ]}
            />

            <ExperienceItem 
              role="Менеджер проекта" 
              company="СЭД «Практика»" 
              period="2020 — 2021"
              details={[
                 "Портфель из 4+ федеральных проектов.",
                 "Внедрение систем ЭДО.",
                 "Обновление базы знаний.",
                 "Координация кросс-функциональных команд."
              ]}
            />

            <ExperienceItem 
              role="Оператор тех. поддержки" 
              company="ICL Services" 
              period="2019 — 2020"
              details={[
                "Обработка 50+ заявок ежедневно.",
                "Root Cause Analysis.",
                "Обучение 3 новых сотрудников."
              ]}
            />
          </div>
        </BentoCard>

        {/* 6a. Education + Competencies (combined, compact) */}
        <BentoCard className="md:col-span-1 lg:col-span-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-white">Образование</h3>
            <GraduationCap className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="pb-2 border-b border-zinc-800 mb-3">
            <div className="text-sm font-semibold text-zinc-200">Инженерно-технологический факультет</div>
            <div className="text-sm text-zinc-500 mt-1">Елабужский институт КФУ</div>
            <div className="text-sm text-zinc-500 mt-1">Город: Елабуга</div>
            <div className="text-sm text-zinc-600 mt-0.5">Неоконченное высшее • 2019</div>
          </div>
          <div className="mb-3">
            <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-zinc-200">Ключевой навык</div>
                <Settings className="w-4 h-4 text-yellow-500" />
              </div>
              <div className="text-sm text-zinc-500 mt-1">Стратегическое мышление и аналитика</div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-zinc-200">Компетенции</h4>
              <Target className="w-4 h-4 text-yellow-500" />
            </div>
            <div className="flex flex-wrap gap-2">
              <SkillBadge name="Agile" />
              <SkillBadge name="Scrum" />
              <SkillBadge name="Kanban" />
              <SkillBadge name="Jira" />
              <SkillBadge name="Confluence" />
              <SkillBadge name="Risk Management" />
              <SkillBadge name="People Management" />
              <SkillBadge name="Waterfall" />
            </div>
          </div>
        </BentoCard>

        

        {/* (Removed duplicate Experience block) */}

      </div>

      <style>{`
        .custom-scrollbar-dark::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar-dark::-webkit-scrollbar-track {
          background: #18181b; 
        }
        .custom-scrollbar-dark::-webkit-scrollbar-thumb {
          background: #3f3f46; 
          border-radius: 4px;
        }
        .custom-scrollbar-dark::-webkit-scrollbar-thumb:hover {
          background: #52525b; 
        }
      `}</style>
    </div>
  );
}
