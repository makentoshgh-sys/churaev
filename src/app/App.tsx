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
  ArrowRight,
  MapPin,
  FileText,
  Users,
  Target,
  BarChart
} from "lucide-react";
import profileImg from "figma:asset/f414801deaccbbce699e5f348604026093dd8d3e.png";

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
  <div className="text-center p-4 bg-zinc-800/50 rounded-2xl border border-zinc-800">
    <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">{value}</div>
    <div className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-wider font-semibold">{label}</div>
  </div>
);

const ExperienceItem = ({ role, company, period, details }: { role: string, company: string, period: string, details?: string[] }) => (
  <div className="relative pl-6 border-l border-zinc-700 pb-8 last:pb-0 group">
    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-600 border border-zinc-900 group-hover:bg-yellow-400 transition-colors" />
    <h4 className="font-bold text-zinc-100 text-sm">{role}</h4>
    <div className="flex justify-between items-baseline mb-2">
      <p className="text-xs text-yellow-500 font-medium">{company}</p>
      <span className="text-[10px] text-zinc-500 font-mono">
        {period}
      </span>
    </div>
    {details && (
      <ul className="text-xs text-zinc-400 space-y-1 list-disc list-inside marker:text-zinc-600">
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
               src={profileImg} 
               alt="Чураев Евгений" 
               className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
          </div>
          
          <div className="relative z-10 flex flex-col p-6 -mt-12 h-[55%]">
            <h1 className="text-3xl font-bold text-white mb-1 text-center">
              Чураев Евгений
            </h1>
            <p className="text-yellow-500 font-medium text-sm mb-6 flex items-center gap-2 justify-center">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
              Project Manager
            </p>
            
            <div className="space-y-4 text-sm text-zinc-400 mb-6 flex-grow text-center">
              <p>
                Руководитель проектов и аналитик с опытом 6+ лет. 
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
                  <Phone className="w-4 h-4" />
                </div>
                <span className="truncate">@honky_tonc</span>
              </a>
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

        {/* 3. Stats Card */}
        <BentoCard className="flex flex-col justify-center gap-4 bg-zinc-900">
          <StatItem value="6+" label="Лет опыта" />
          <StatItem value="100%" label="Соблюдение SLA" />
          <StatItem value="4+" label="Федеральных проекта" />
        </BentoCard>

        {/* 4. Skills (Grid) */}
        <BentoCard className="md:col-span-1 lg:col-span-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-white">Компетенции</h3>
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
        </BentoCard>

        {/* 5. Education */}
        <BentoCard className="md:col-span-1 lg:col-span-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-white">Образование</h3>
            <GraduationCap className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="space-y-4">
            <div className="pb-3 border-b border-zinc-800">
              <div className="text-sm font-semibold text-zinc-200">Инженерно-технологический</div>
              <div className="text-xs text-zinc-500 mt-1">Елабужский институт КФУ</div>
              <div className="text-[10px] text-zinc-600 mt-0.5">Неоконченное высшее • 2019</div>
            </div>
             <div>
              <div className="text-sm font-semibold text-zinc-200">Ключевой навык</div>
              <div className="text-xs text-zinc-500 mt-1">Стратегическое мышление и аналитика</div>
            </div>
          </div>
        </BentoCard>

        {/* 6. Experience Summary (Scrollable) */}
        <BentoCard className="md:col-span-1 lg:col-span-1 lg:row-span-2 overflow-hidden flex flex-col">
          <div className="flex items-center justify-between mb-6 sticky top-0 bg-zinc-900 z-10 pb-2 border-b border-zinc-800">
            <h3 className="font-bold text-white text-lg">Опыт работы</h3>
            <Briefcase className="w-5 h-5 text-yellow-500" />
          </div>
          
          <div className="overflow-y-auto pr-2 custom-scrollbar-dark flex-grow space-y-1">
            <ExperienceItem 
              role="Руководитель проекта" 
              company="АО «БАРС груп»" 
              period="2022 — Наст. время"
              details={[
                "Руководство полным циклом ИТ-проектов.",
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
          
          <button className="w-full mt-4 py-3 border border-zinc-700 rounded-xl text-xs font-bold text-zinc-400 hover:text-white hover:bg-zinc-800 transition flex items-center justify-center gap-2 group uppercase tracking-wider">
            Скачать резюме
            <Download className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </BentoCard>

        {/* 7. Key Competencies / Services */}
        <BentoCard className="md:col-span-1 lg:col-span-1 bg-zinc-900 border-zinc-800 text-zinc-300 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
          
          <h3 className="font-bold text-xl text-white mb-4 relative z-10 border-b border-zinc-800 pb-2">Ключевое</h3>
          <ul className="space-y-3 relative z-10">
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
        </BentoCard>

        {/* 8. Call to Action */}
        <BentoCard className="md:col-span-3 lg:col-span-2 flex flex-col justify-between group cursor-pointer hover:bg-zinc-800 transition-colors border-zinc-700">
          <div>
             <div className="flex items-center justify-between mb-4">
               <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors text-yellow-500">
                  <BarChart className="w-5 h-5" />
               </div>
               <span className="text-xs font-mono text-zinc-500 bg-zinc-800 px-2 py-1 rounded">Open for opportunities</span>
             </div>
            <h3 className="text-2xl font-bold text-white mb-2">Готов к новым вызовам</h3>
            <p className="text-sm text-zinc-400 max-w-md">
              Ищу позицию Project Manager с возможностью влиять на результат и оптимизировать процессы.
              Есть разрешение на работу и готовность к командировкам.
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-zinc-800 pt-4">
            <div>
              <div className="font-bold text-white text-sm">+7 (986) 713-68-40</div>
              <div className="text-xs text-zinc-500">Telegram, Phone, WhatsApp</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold group-hover:scale-110 transition-transform">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </BentoCard>

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
