"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sun,
  Moon,
  Search,
  Bell,
  ChevronRight,
  Sparkles,
  Clock,
  Users,
  Inbox,
  Coins,
  Newspaper,
  Megaphone,
  Home as HomeIcon,
  User,
  MessageCircle,
  Settings,
  Cake,
  Building2,
  Shield,
  FileText,
  Video,
  Eye,
  EyeOff,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// 状态栏组件
function StatusBar() {
  const SignalIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C12.5523 2 13 2.44772 13 3V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V3C11 2.44772 11.4477 2 12 2ZM17 7C17.5523 7 18 7.44772 18 8V21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21V8C16 7.44772 16.4477 7 17 7ZM7 12C7.55228 12 8 12.4477 8 13V21C8 21.5523 7.55228 22 7 22C6.44772 22 6 21.5523 6 21V13C6 12.4477 6.44772 12 7 12ZM22 2C22.5523 2 23 2.44772 23 3V21C23 21.5523 22.5523 22 22 22C21.4477 22 21 21.5523 21 21V3C21 2.44772 21.4477 2 22 2ZM2 16C2.55228 16 3 16.4477 3 17V21C3 21.5523 2.55228 22 2 22C1.44772 22 1 21.5523 1 21V17C1 16.4477 1.44772 16 2 16Z"/>
    </svg>
  );

  const BatteryIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M17 6C17.5523 6 18 6.44772 18 7V9H19C20.1046 9 21 9.89543 21 11V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V11C3 9.89543 3.89543 9 5 9H6V7C6 6.44772 6.44772 6 7 6H17ZM17 8H7V9H17V8ZM19 11H5V17H19V11Z"/>
      <rect x="9" y="12" width="2" height="4" rx="0.5"/>
      <rect x="13" y="12" width="2" height="4" rx="0.5"/>
    </svg>
  );

  return (
    <div className="flex justify-between items-center px-1 py-2 text-xs font-medium text-muted-foreground">
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <span>5G</span>
        <SignalIcon />
        <BatteryIcon />
      </div>
    </div>
  );
}

// 顶部 Header 组件
function Header({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="py-3"
    >
      <div className="flex items-center justify-between">
        {/* 头像 + 问候语 */}
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/30 border border-white/20">
              <User className="w-5 h-5 text-white" />
            </div>
            <motion.div
              className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full border-2 border-white flex items-center justify-center shadow-md"
              whileHover={{ scale: 1.2, rotate: 15 }}
            >
              <Sparkles className="w-2.5 h-2.5 text-white" />
            </motion.div>
          </motion.div>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-muted-foreground font-medium"
            >
              早安，
            </motion.p>
            <div className="flex items-center gap-1.5">
              <span className="text-base font-bold text-foreground">张经理</span>
              <span className="px-1.5 py-0.5 bg-gradient-to-r from-brand-100 to-brand-50 text-[10px] font-bold text-brand-600 rounded-md border border-brand-200/50">
                高级顾问
              </span>
            </div>
          </div>
        </div>

        {/* 右侧操作区 */}
        <div className="flex items-center gap-1">
          {/* 模式切换 */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className="w-9 h-9 rounded-lg bg-secondary/50 hover:bg-secondary flex items-center justify-center transition-colors"
          >
            <AnimatePresence mode="wait">
              {isDarkMode ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-4 h-4 text-foreground" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-4 h-4 text-amber-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* 搜索 */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-lg bg-secondary/50 hover:bg-secondary flex items-center justify-center transition-colors"
          >
            <Search className="w-4 h-4 text-foreground" />
          </motion.button>

          {/* 消息 */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-9 h-9 rounded-lg bg-secondary/50 hover:bg-secondary flex items-center justify-center transition-colors"
          >
            <Bell className="w-4 h-4 text-foreground" />
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-[9px] font-bold text-white flex items-center justify-center border-2 border-background"
            >
              5
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

// 线索轮播组件
function LeadsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const leads = [
    {
      title: "张** 分享了 1 条新线索",
      tags: [
        { icon: Cake, label: "32 岁" },
        { icon: Building2, label: "互联网" },
        { icon: Shield, label: "终身寿" },
        { icon: Coins, label: "50W+" },
      ],
    },
    {
      title: "李** 分享了 1 条新线索",
      tags: [
        { icon: Cake, label: "28 岁" },
        { icon: Building2, label: "金融" },
        { icon: Shield, label: "重疾险" },
        { icon: Coins, label: "30W+" },
      ],
    },
    {
      title: "王** 分享了 1 条新线索",
      tags: [
        { icon: Cake, label: "35 岁" },
        { icon: Building2, label: "科技" },
        { icon: Shield, label: "医疗险" },
        { icon: Coins, label: "80W+" },
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % leads.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [leads.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card className="overflow-hidden bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 border-brand-400/30 shadow-xl shadow-brand-500/25">
        <CardContent className="p-4 text-white">
          {/* 标题栏 */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold">核心线索</span>
            <motion.button
              whileHover={{ x: 4 }}
              className="text-xs font-medium text-white/80 flex items-center gap-1"
            >
              去看看 <ChevronRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          {/* 线索内容 */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm font-medium mb-3 text-white/90">
                {leads[currentIndex].title}
              </p>

              {/* 标签 Grid */}
              <div className="grid grid-cols-4 gap-2">
                {leads[currentIndex].tags.map((tag, index) => {
                  const TagIcon = tag.icon;
                  return (
                    <motion.div
                      key={tag.label}
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/20 backdrop-blur-lg rounded-lg p-2 text-center border border-white/10"
                    >
                      <TagIcon className="w-5 h-5 mx-auto mb-0.5 text-white/90" />
                      <span className="text-[10px] font-medium text-white/85">
                        {tag.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 轮播指示器 */}
          <div className="flex justify-center gap-1.5 mt-3">
            {leads.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// 数据看板组件
function Dashboard() {
  const [showGold, setShowGold] = useState(false);

  const stats = [
    { icon: Users, value: "28", label: "客户", sensitive: false },
    { icon: Inbox, value: "15", label: "线索", sensitive: false },
    { icon: Coins, value: "2,888", label: "金币", sensitive: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="backdrop-blur-2xl bg-white/90 dark:bg-card/90 border-white/60 dark:border-white/10 shadow-lg">
        <CardContent className="p-4">
          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const isSensitive = stat.sensitive;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="text-center"
                >
                  {isSensitive ? (
                    <motion.button
                      onClick={() => setShowGold(!showGold)}
                      className="flex flex-col items-center justify-center cursor-pointer w-full"
                    >
                      <AnimatePresence mode="wait">
                        {showGold ? (
                          <motion.span
                            key="visible"
                            initial={{ opacity: 0, filter: "blur(4px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, filter: "blur(4px)" }}
                            className="text-3xl font-black bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"
                          >
                            {stat.value}
                          </motion.span>
                        ) : (
                          <motion.div
                            key="hidden"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="text-3xl font-black text-muted-foreground"
                          >
                            ***
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  ) : (
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="text-3xl font-black text-foreground"
                    >
                      {stat.value}
                    </motion.span>
                  )}
                  <p className="text-xs text-muted-foreground font-medium mt-1 flex items-center justify-center gap-1">
                    <Icon className="w-3 h-3" />
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// 展业工具组件
function ToolsGrid() {
  const tools = [
    { icon: Newspaper, label: "资讯", color: "brand" },
    { icon: Megaphone, label: "活动", color: "teal" },
    { icon: FileText, label: "评测", color: "cyan" },
    { icon: Video, label: "视频", color: "brand" },
  ];

  const colorClasses = {
    brand: {
      bg: "from-brand-50 to-brand-100/80",
      text: "text-brand-600",
      iconBg: "from-brand-500 to-brand-600",
      shadow: "shadow-brand-500/25",
    },
    teal: {
      bg: "from-teal-50 to-teal-100/80",
      text: "text-teal-600",
      iconBg: "from-teal-500 to-teal-600",
      shadow: "shadow-teal-500/25",
    },
    cyan: {
      bg: "from-cyan-50 to-cyan-100/80",
      text: "text-cyan-600",
      iconBg: "from-cyan-500 to-cyan-600",
      shadow: "shadow-cyan-500/25",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card className="backdrop-blur-2xl bg-white/90 dark:bg-card/90 border-white/60 dark:border-white/10 shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold text-foreground">展业工具</span>
            <motion.button
              whileHover={{ x: 4 }}
              className="text-xs font-medium text-brand-600 dark:text-brand-400 flex items-center gap-1"
            >
              查看全部 <ChevronRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {tools.map((tool, index) => {
              const colors = colorClasses[tool.color as keyof typeof colorClasses];
              const Icon = tool.icon;

              return (
                <motion.div
                  key={tool.label}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.08 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer"
                >
                  <div
                    className={`relative p-4 rounded-2xl bg-gradient-to-br ${colors.bg} border border-white/50 dark:border-white/5 shadow-md ${colors.shadow} overflow-hidden group transition-all duration-300 hover:shadow-lg`}
                  >
                    {/* 光泽扫过效果 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-700" />

                    <div className="text-center">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        className={`w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br ${colors.iconBg} flex items-center justify-center shadow-lg ${colors.shadow} border border-white/20`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <p className={`text-xs font-bold ${colors.text}`}>
                        {tool.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// 今日热点组件
function HotTopics() {
  const [activeTab, setActiveTab] = useState("资讯");
  const tabs = ["资讯", "活动", "评测", "视频"];

  const topics = [
    {
      title: "2026 年全球资产配置白皮书深度发布，保险配置策略全解析",
      time: "10 分钟前",
      views: "1.2k",
      icon: Eye,
      tag: "热门",
    },
    {
      title: "聚流精英代理人：邀好友体验，赢大礼，最高可得 888 金币",
      time: "1 小时前",
      views: "856",
      icon: Megaphone,
      tag: "活动",
    },
    {
      title: "终身寿险 vs 重疾险：如何为客户选择最适合的保障方案？",
      time: "2 小时前",
      views: "623",
      icon: FileText,
      tag: "干货",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="backdrop-blur-2xl bg-white/90 dark:bg-card/90 border-white/60 dark:border-white/10 shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold text-foreground">今日热点</span>
          </div>

          {/* Tab 切换 */}
          <div className="flex gap-1 mb-3 p-1 bg-secondary/50 rounded-lg">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeTab === tab
                    ? "bg-white dark:bg-card text-brand-600 shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          {/* 内容列表 */}
          <div className="space-y-2.5">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex gap-3 cursor-pointer group"
              >
                {/* 内容区 */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] px-1.5 py-0.5 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded font-medium">
                      {topic.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {topic.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-1.5 text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {topic.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {topic.views}
                    </span>
                  </div>
                </div>

                {/* 图片区 */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="w-20 h-20 rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 dark:from-brand-900/30 dark:to-brand-800/20 flex items-center justify-center border border-brand-200/50 dark:border-brand-700/30"
                >
                  <topic.icon className="w-8 h-8 text-brand-600 dark:text-brand-400" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// 底部导航组件
function BottomNav() {
  const navItems = [
    { icon: HomeIcon, label: "首页", active: true },
    { icon: User, label: "客户", active: false },
    { icon: null, label: "AI 助手", active: false, special: true },
    { icon: MessageCircle, label: "产品", active: false },
    { icon: Settings, label: "我的", active: false },
  ];

  return (
    <>
      {/* 背景遮罩 */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[428px] h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* 导航栏 */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[428px] bg-white/95 dark:bg-card/95 backdrop-blur-2xl border-t border-black/5 dark:border-white/10 shadow-[0_-8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_-8px_32px_rgba(0,0,0,0.3)] px-2 py-2 z-50"
      >
        <div className="flex justify-around items-end">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isSpecial = item.special;

            if (isSpecial) {
              return (
                <motion.div
                  key={item.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="relative -top-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-14 h-14 rounded-full bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 flex items-center justify-center shadow-xl shadow-brand-500/40 border-4 border-background dark:border-card"
                  >
                    {/* 呼吸光晕 */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.3, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-brand-400 rounded-full blur-xl -z-10"
                    />

                    <Sparkles className="w-6 h-6 text-white" />
                  </motion.button>
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-brand-600 dark:text-brand-400 whitespace-nowrap">
                    AI 助手
                  </span>
                </motion.div>
              );
            }

            return (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.08 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 relative ${
                  item.active
                    ? "text-brand-600 dark:text-brand-400"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {Icon && (
                  <Icon
                    className={`w-6 h-6 transition-transform duration-300 ${
                      item.active ? "scale-110" : ""
                    }`}
                  />
                )}
                <span className="text-[10px] font-bold">{item.label}</span>
                {item.active && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -bottom-1 w-1 h-1 bg-brand-500 rounded-full"
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}

// 背景装饰组件
function BackgroundDecorations({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <>
      {/* 左上角光晕 */}
      <div
        className={`fixed -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${
          isDarkMode
            ? "bg-gradient-radial from-brand-900/20 to-transparent opacity-50"
            : "bg-gradient-radial from-brand-200/30 to-transparent"
        } animate-[float_8s_ease-in-out_infinite]`}
      />

      {/* 右下角光晕 */}
      <div
        className={`fixed -bottom-[30%] -left-[10%] w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${
          isDarkMode
            ? "bg-gradient-radial from-lavender-900/20 to-transparent opacity-50"
            : "bg-gradient-radial from-lavender-200/20 to-transparent"
        } animate-[float_10s_ease-in-out_infinite_reverse]`}
      />
    </>
  );
}

// 主页面组件
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        isDarkMode
          ? "dark bg-gradient-to-b from-brand-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-b from-brand-50 via-white to-slate-50"
      }`}
    >
      <BackgroundDecorations isDarkMode={isDarkMode} />

      <div className="max-w-[428px] mx-auto px-4 pb-28 pt-2">
        <StatusBar />
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        <div className="space-y-4">
          <LeadsCarousel />
          <Dashboard />
          <ToolsGrid />
          <HotTopics />
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
