"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MagnifyingGlass,
  Bell,
  CaretRight,
  Sparkle,
  Clock,
  Users,
  EnvelopeSimple,
  CoinVertical,
  CalendarBlank,
  ClipboardText,
  Eye,
  Heart,
  GraduationCap,
  MapPin,
  Star,
  Cake,
  Building,
  Shield,
  House,
  Person,
  ChatsCircle,
  Gear,
  MagicWand,
} from "@phosphor-icons/react";
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
    <div className="flex justify-between items-center px-1 py-2 text-xs font-medium text-[#94a3b8]">
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
function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="py-4"
    >
      <div className="flex items-center justify-between">
        {/* 头像 + 问候语 */}
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00BC71] to-[#4ADE80] flex items-center justify-center shadow-[0_6px_24px_rgba(0,188,113,0.3)]">
              <Person className="w-6 h-6 text-white" weight="fill" />
            </div>
            <motion.div
              className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-md border-2 border-white flex items-center justify-center shadow-[0_4px_16px_rgba(255,200,92,0.4)]"
              style={{ background: "linear-gradient(135deg, #FFC85C 0%, #FFE082 100%)" }}
              whileHover={{ scale: 1.2, rotate: 15 }}
            >
              <Sparkle className="w-3 h-3 text-white" weight="fill" />
            </motion.div>
          </motion.div>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-[#64748b] font-medium"
            >
              早安，
            </motion.p>
            <div className="flex items-center gap-1.5">
              <span className="text-base font-semibold text-[#0F172A]">张经理</span>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold text-white" style={{ background: "linear-gradient(135deg, #00BC71 0%, #4ADE80 100%)", boxShadow: "0 2px 8px rgba(0,188,113,0.3)" }}>
                高级顾问
              </span>
            </div>
          </div>
        </div>

        {/* 右侧操作区 */}
        <div className="flex items-center gap-1.5">
          {/* 搜索 */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
          >
            <MagnifyingGlass className="w-5 h-5 text-[#0F172A]" weight="bold" />
          </motion.button>

          {/* 消息 */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
          >
            <Bell className="w-5 h-5 text-[#0F172A]" weight="fill" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full border-2 border-white"
              style={{ background: "linear-gradient(135deg, #FF8F6B 0%, #FFB09A 100%)", boxShadow: "0 2px 8px rgba(255,143,107,0.4)" }}
            />
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
        { icon: Building, label: "互联网" },
        { icon: Shield, label: "终身寿" },
        { icon: CoinVertical, label: "50W+" },
      ],
    },
    {
      title: "李** 分享了 1 条新线索",
      tags: [
        { icon: Cake, label: "28 岁" },
        { icon: Building, label: "金融" },
        { icon: Shield, label: "重疾险" },
        { icon: CoinVertical, label: "30W+" },
      ],
    },
    {
      title: "王** 分享了 1 条新线索",
      tags: [
        { icon: Cake, label: "35 岁" },
        { icon: Building, label: "科技" },
        { icon: Shield, label: "医疗险" },
        { icon: CoinVertical, label: "80W+" },
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
      <Card className="overflow-hidden bg-gradient-to-br from-[#00BC71] via-[#00A862] to-[#008F56] shadow-[0_8px_32px_rgba(0,188,113,0.25)]">
        <CardContent className="p-5 text-white">
          {/* 标题栏 */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-1 h-5 rounded-full bg-white/90" style={{ boxShadow: "0 0 12px rgba(255,255,255,0.6)" }} />
              <span className="text-base font-semibold text-white/95">核心线索</span>
            </div>
            <motion.button
              whileHover={{ x: 4 }}
              className="text-xs font-medium text-white/85 flex items-center gap-1"
            >
              去看看 <CaretRight className="w-4 h-4" weight="bold" />
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
              <p className="text-sm font-medium mb-4 text-white/80">
                {leads[currentIndex].title}
              </p>

              {/* 标签 Grid */}
              <div className="grid grid-cols-4 gap-2">
                {leads[currentIndex].tags.map((tag, index) => {
                  const TagIcon = tag.icon;
                  return (
                    <motion.div
                      key={tag.label}
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="rounded-lg p-2.5 text-center bg-white/20 backdrop-blur-md"
                    >
                      <TagIcon className="w-5 h-5 mx-auto mb-1 text-white" weight="fill" />
                      <span className="text-[10px] font-semibold text-white">
                        {tag.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 轮播指示器 */}
          <div className="flex justify-center gap-1.5 mt-4">
            {leads.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 h-1.5 bg-white"
                    : "w-1.5 h-1.5 bg-white/40"
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
    { icon: Users, value: "28", label: "客户" },
    { icon: EnvelopeSimple, value: "15", label: "线索" },
    { icon: CoinVertical, value: "2,888", label: "金币", sensitive: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
        <CardContent className="p-5">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const isSensitive = stat.sensitive;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
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
                            className="text-3xl font-bold text-[#0F172A]"
                          >
                            {stat.value}
                          </motion.span>
                        ) : (
                          <motion.div
                            key="hidden"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="text-3xl font-bold text-[#94a3b8]"
                          >
                            ***
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  ) : (
                    <motion.span
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="text-3xl font-bold text-[#0F172A]"
                    >
                      {stat.value}
                    </motion.span>
                  )}
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Icon className="w-5 h-5 text-[#94a3b8]" weight="fill" />
                    <p className="text-xs font-medium text-[#94a3b8]">
                      {stat.label}
                    </p>
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

// 资讯与活动中心组件
function ContentHub() {
  const [activeTab, setActiveTab] = useState("热点");
  const tabs = ["热点", "活动", "评测"];

  // 热点资讯数据
  const hotTopics = [
    {
      title: "2026 年全球资产配置白皮书深度发布，保险配置策略全解析",
      time: "10 分钟前",
      views: "1.2k",
      category: "投资理财",
      gradient: "linear-gradient(135deg, #FF8F6B 0%, #FFB09A 100%)",
    },
    {
      title: "医疗健康产业趋势报告：商业保险迎来新机遇",
      time: "30 分钟前",
      views: "856",
      category: "医疗健康",
      gradient: "linear-gradient(135deg, #00BC71 0%, #4ADE80 100%)",
    },
    {
      title: "养老金制度改革解读：第三支柱如何规划",
      time: "1 小时前",
      views: "623",
      category: "养老规划",
      gradient: "linear-gradient(135deg, #5AB0FF 0%, #8AC9FF 100%)",
    },
    {
      title: "子女教育金规划指南：保险配置的最佳时机",
      time: "2 小时前",
      views: "445",
      category: "子女教育",
      gradient: "linear-gradient(135deg, #FFC85C 0%, #FFE082 100%)",
    },
  ];

  // 活动数据
  const events = [
    {
      title: "高净值客户沙龙：家族信托与财富传承",
      date: "2026-04-15",
      location: "上海·陆家嘴",
      gradient: "linear-gradient(135deg, #00BC71 0%, #4ADE80 100%)",
    },
    {
      title: "线上直播：重疾险产品对比分析会",
      date: "2026-04-18",
      location: "直播间",
      gradient: "linear-gradient(135deg, #FF8F6B 0%, #FFB09A 100%)",
    },
    {
      title: "客户答谢会：2026 保险趋势分享",
      date: "2026-04-22",
      location: "北京·国贸",
      gradient: "linear-gradient(135deg, #5AB0FF 0%, #8AC9FF 100%)",
    },
  ];

  // 评测数据
  const reviews = [
    {
      title: "5 款热门重疾险横向对比测评",
      rating: 4.8,
      products: 5,
      gradient: "linear-gradient(135deg, #FF8F6B 0%, #FFB09A 100%)",
    },
    {
      title: "增额终身寿险收益排行榜 TOP10",
      rating: 4.6,
      products: 10,
      gradient: "linear-gradient(135deg, #00BC71 0%, #4ADE80 100%)",
    },
    {
      title: "百万医疗险性价比之王，竟然是它？",
      rating: 4.9,
      products: 8,
      gradient: "linear-gradient(135deg, #FFC85C 0%, #FFE082 100%)",
    },
  ];

  const renderContent = () => {
    if (activeTab === "热点") {
      return (
        <div className="space-y-3">
          {hotTopics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.08 }}
              whileHover={{ x: 3 }}
              className="flex gap-3 cursor-pointer group"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] px-2 py-0.5 rounded-md font-semibold text-white" style={{ background: topic.gradient, boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
                    {topic.category}
                  </span>
                </div>
                <h3 className="text-base font-medium text-[#0F172A] line-clamp-2 group-hover:text-[#00BC71] transition-colors">
                  {topic.title}
                </h3>
                <div className="flex items-center gap-3 mt-2 text-[10px] text-[#94a3b8]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" weight="fill" />
                    {topic.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" weight="fill" />
                    {topic.views}
                  </span>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="w-20 h-20 rounded-lg flex items-center justify-center"
                style={{
                  background: topic.gradient,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                }}
              >
                {topic.category === "投资理财" && <CoinVertical className="w-8 h-8 text-white" weight="fill" />}
                {topic.category === "医疗健康" && <Heart className="w-8 h-8 text-white" weight="fill" />}
                {topic.category === "养老规划" && <Users className="w-8 h-8 text-white" weight="fill" />}
                {topic.category === "子女教育" && <GraduationCap className="w-8 h-8 text-white" weight="fill" />}
              </motion.div>
            </motion.div>
          ))}
        </div>
      );
    }

    if (activeTab === "活动") {
      return (
        <div className="grid grid-cols-1 gap-3">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.08 }}
              whileHover={{ y: -2, scale: 1.01 }}
              className="relative overflow-hidden rounded-xl p-4"
              style={{
                background: `linear-gradient(135deg, rgba(0,188,113,0.05) 0%, rgba(74,222,128,0.02) 100%)`,
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              <div className="flex gap-4">
                <motion.div
                  className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: event.gradient,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                  }}
                >
                  <CalendarBlank className="w-8 h-8 text-white" weight="fill" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-medium text-[#0F172A] line-clamp-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-[10px] text-[#94a3b8]">
                    <span className="flex items-center gap-1">
                      <CalendarBlank className="w-3.5 h-3.5" weight="fill" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" weight="fill" />
                      {event.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      );
    }

    if (activeTab === "评测") {
      return (
        <div className="grid grid-cols-1 gap-3">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.08 }}
              whileHover={{ y: -2, scale: 1.01 }}
              className="relative overflow-hidden rounded-xl p-4"
              style={{
                background: `linear-gradient(135deg, rgba(0,188,113,0.05) 0%, rgba(74,222,128,0.02) 100%)`,
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              <div className="flex gap-4">
                <motion.div
                  className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: review.gradient,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                  }}
                >
                  <ClipboardText className="w-8 h-8 text-white" weight="fill" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-medium text-[#0F172A] line-clamp-2">
                    {review.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.floor(review.rating)
                              ? "text-[#FFC85C]"
                              : "text-[#E2E8F0]"
                          }`}
                          weight="fill"
                        />
                      ))}
                      <span className="text-[10px] font-medium text-[#0F172A] ml-1">
                        {review.rating}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#94a3b8]">
                      对比 {review.products} 款产品
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card className="bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
        <CardContent className="p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-base font-semibold text-[#0F172A]">资讯中心</span>
            <motion.button
              whileHover={{ x: 4 }}
              className="text-xs font-medium text-[#00BC71] flex items-center gap-1"
            >
              查看全部 <CaretRight className="w-4 h-4" weight="bold" />
            </motion.button>
          </div>

          {/* Tab 切换 */}
          <div className="flex gap-1 mb-4 p-1 bg-[#F1F5F9] rounded-xl">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${
                  activeTab === tab
                    ? "bg-white text-[#0F172A] shadow-sm"
                    : "text-[#94a3b8] hover:text-[#0F172A]"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          {/* 内容区 */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// 底部导航组件
function BottomNav() {
  const navItems = [
    { icon: House, label: "首页", active: true },
    { icon: Person, label: "客户", active: false },
    { icon: null, label: "AI 助手", active: false, special: true },
    { icon: ChatsCircle, label: "产品", active: false },
    { icon: Gear, label: "我的", active: false },
  ];

  return (
    <>
      {/* 背景遮罩 */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#F6F9F8] to-transparent pointer-events-none" />

      {/* 导航栏 */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl shadow-[0_-4px_24px_rgba(0,0,0,0.08)] px-2 py-2.5 z-50"
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
                  className="relative -top-5"
                >
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,188,113,0.4)] border-4 border-white"
                    style={{ background: "linear-gradient(135deg, #00BC71 0%, #4ADE80 100%)" }}
                  >
                    {/* 轻柔呼吸光晕 */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.3, 0.5],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 rounded-full -z-10"
                      style={{ background: "linear-gradient(135deg, #00BC71 0%, #4ADE80 100%)", filter: "blur(12px)" }}
                    />

                    <MagicWand className="w-7 h-7 text-white" weight="fill" />
                  </motion.button>
                  <span className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-[#00BC71] whitespace-nowrap">
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
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center gap-1.5 p-2 rounded-lg transition-all duration-300 relative ${
                  item.active
                    ? "text-[#00BC71]"
                    : "text-[#94a3b8] hover:text-[#0F172A]"
                }`}
              >
                {Icon && (
                  <Icon
                    className={`w-6 h-6 transition-transform duration-300 ${
                      item.active ? "scale-110" : ""
                    }`}
                    weight={item.active ? "fill" : "regular"}
                  />
                )}
                <span className="text-[10px] font-medium">{item.label}</span>
                {item.active && (
                  <motion.div
                    initial={{ scale: 0, width: 0 }}
                    animate={{ scale: 1, width: 12 }}
                    className="absolute -bottom-1 h-1 rounded-sm"
                    style={{ background: "linear-gradient(90deg, #00BC71 0%, #4ADE80 100%)" }}
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
function BackgroundDecorations() {
  return (
    <>
      {/* 左上角轻柔光晕 - 品牌绿 */}
      <div
        className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none bg-gradient-radial from-[#00BC71]/10 to-transparent animate-[float_10s_ease-in-out_infinite]"
      />

      {/* 右下角轻柔光晕 - 暖橙色 */}
      <div
        className="absolute -bottom-[20%] -left-[10%] w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none bg-gradient-radial from-[#FF8F6B]/8 to-transparent animate-[float_12s_ease-in-out_infinite_reverse]"
      />
    </>
  );
}

// 主页面组件
export default function Home() {
  return (
    <div className="min-h-screen bg-[#E5E5E5] flex items-center justify-center py-8">
      <main className="w-[430px] min-h-[932px] bg-gradient-to-b from-[#F6F9F8] via-[#F6F9F8] to-[#FFFFFF] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden relative">
        <BackgroundDecorations />

        <div className="px-4 pb-28 pt-2">
          <StatusBar />
          <Header />

          <div className="space-y-4">
            <LeadsCarousel />
            <Dashboard />
            <ContentHub />
          </div>
        </div>

        <BottomNav />
      </main>
    </div>
  );
}
