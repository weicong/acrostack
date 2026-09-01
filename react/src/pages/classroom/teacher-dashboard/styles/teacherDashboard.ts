/**
 * 教师课堂面板（TeacherDashboardPage）共享样式。
 *
 * 布局：深色科技感 Hero 顶条（深靛渐变 + 光斑 + 网格纹理 + 课堂码 + 状态 + 大倒计时进度条）
 * + 双栏（左：当前题/学员，右：统计）。
 * 动效：Card fade-in（stagger）、倒计时 <10s 脉冲、Hero 光斑漂移、正确答案弹出、
 * 选项分布条 width transition（keyframes 见 globals.css）。
 *
 * 说明：Hero 为固定深色（不随明暗主题翻转），文字一律用白色系保证对比度；
 * 卡片区仍使用 Fluent token，跟随明暗主题。
 */
import { makeStyles, tokens } from "@fluentui/react-components";

/** Hero 深色渐变（品牌靛紫色阶，取自 ThemeProvider classroomBrand 的 20/40/70）。 */
const heroGradient = "linear-gradient(130deg, #150b33 0%, #241452 45%, #43289d 100%)";

export const useTeacherDashboardStyles = makeStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalL,
    padding: tokens.spacingVerticalM + " " + tokens.spacingHorizontalM,
    maxWidth: "1440px",
    margin: "0 auto",
    width: "100%",
    minHeight: "100vh",
    paddingBottom: tokens.spacingVerticalXXL,
    overflowX: "hidden",
    // fullscreen 布局直接渲染 Outlet，页面自带底色：顶部一抹品牌光晕 + 中性底
    background: `radial-gradient(900px 320px at 50% -120px, ${tokens.colorBrandBackground2}, transparent), ${tokens.colorNeutralBackground2}`,
  },

  // ── Hero 顶条（固定深色） ──────────────────────────────────────
  heroBar: {
    position: "relative",
    borderRadius: tokens.borderRadiusXLarge,
    overflow: "hidden",
    isolation: "isolate",
    background: heroGradient,
    boxShadow: "0 18px 44px -18px rgba(36, 20, 82, 0.6)",
    padding: tokens.spacingVerticalXL + " " + tokens.spacingHorizontalXL,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    animationName: "tdFadeIn",
    animationDuration: "320ms",
    animationFillMode: "both",
  },
  // 装饰光斑：模糊径向渐变，缓慢漂移
  heroBlob: {
    position: "absolute",
    borderRadius: tokens.borderRadiusCircular,
    filter: "blur(64px)",
    pointerEvents: "none",
    zIndex: 0,
  },
  heroBlobA: {
    width: "340px",
    height: "340px",
    top: "-140px",
    right: "-80px",
    background: "radial-gradient(circle, rgba(122, 82, 236, 0.85), transparent 70%)",
    animationName: "tdDrift",
    animationDuration: "10s",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
  },
  heroBlobB: {
    width: "300px",
    height: "300px",
    bottom: "-160px",
    left: "-70px",
    background: "radial-gradient(circle, rgba(232, 182, 255, 0.45), transparent 70%)",
    animationName: "tdDrift",
    animationDuration: "13s",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
    animationDirection: "reverse",
  },
  // 细网格纹理：顶部清晰、向下淡出
  heroGrid: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
    zIndex: 0,
    backgroundImage:
      "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
    backgroundSize: "36px 36px",
    maskImage: "radial-gradient(ellipse at 50% 0%, black 25%, transparent 72%)",
    WebkitMaskImage: "radial-gradient(ellipse at 50% 0%, black 25%, transparent 72%)",
  },
  heroStripe: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "3px",
    zIndex: 1,
    background:
      "linear-gradient(90deg, transparent, #d2a2fb 30%, #ffffff 50%, #d2a2fb 70%, transparent)",
    backgroundSize: "200% 100%",
    animationName: "tdShimmer",
    animationDuration: "6s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
  heroContent: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalL,
    flexWrap: "wrap",
  },
  heroLeft: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
  },
  heroCodeLabel: {
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightSemibold,
    letterSpacing: "0.32em",
    color: "rgba(255, 255, 255, 0.62)",
  },
  heroLeftTop: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
    flexWrap: "wrap",
  },
  heroCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: tokens.spacingVerticalXS,
  },
  // 倒计时/题号大字：两种形态等高（题号形态不含进度条，
  // 以透明占位轨道填充同一槽位，避免状态切换时 Hero 高度跳动）
  heroCountdown: {
    fontSize: tokens.fontSizeHero900,
    fontWeight: tokens.fontWeightBold,
    fontVariantNumeric: "tabular-nums",
    lineHeight: 1,
    color: "#ffffff",
    textShadow: "0 0 26px rgba(122, 82, 236, 0.7)",
  },
  countdownTrack: {
    width: "240px",
    maxWidth: "60vw",
    height: "6px",
    borderRadius: tokens.borderRadiusCircular,
    background: "rgba(255, 255, 255, 0.18)",
    overflow: "hidden",
  },
  // 题号形态的隐形轨道占位（与 countdownTrack 同尺寸，仅不可见）
  countdownTrackGhost: {
    width: "240px",
    maxWidth: "60vw",
    height: "6px",
    visibility: "hidden",
  },
  heroRight: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    flexWrap: "wrap",
  },
  classroomCode: {
    fontFamily: tokens.fontFamilyMonospace,
    fontSize: tokens.fontSizeHero800,
    fontWeight: tokens.fontWeightBold,
    letterSpacing: "0.14em",
    lineHeight: 1,
    color: "#ffffff",
    textShadow: "0 2px 28px rgba(122, 82, 236, 0.85)",
  },
  heroMeta: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    flexWrap: "wrap",
    color: "rgba(255, 255, 255, 0.78)",
    fontSize: tokens.fontSizeBase200,
    // 地址等长文本不在字符内断行
    "& span": { whiteSpace: "nowrap" },
  },
  heroMetaDivider: {
    width: "1px",
    height: "12px",
    background: "rgba(255, 255, 255, 0.5)",
  },
  // 题目进度步骤点
  progressDots: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: tokens.spacingVerticalXXS,
  },
  progressDot: {
    width: "9px",
    height: "9px",
    borderRadius: tokens.borderRadiusCircular,
    background: "rgba(255, 255, 255, 0.28)",
    transitionProperty: "background, box-shadow, transform",
    transitionDuration: "250ms",
  },
  progressDotDone: {
    background: "rgba(255, 255, 255, 0.72)",
  },
  progressDotActive: {
    background: "#ffffff",
    transform: "scale(1.25)",
    boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.22)",
  },
  heroCountdownDanger: {
    color: "#ffb3b3",
    textShadow: "0 0 20px rgba(255, 99, 99, 0.8)",
    animationName: "tdPulse",
    animationDuration: "1s",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
  },
  countdownFill: {
    height: "100%",
    borderRadius: tokens.borderRadiusCircular,
    background: "linear-gradient(90deg, #d2a2fb, #ffffff)",
    transitionProperty: "width",
    transitionDuration: "900ms",
    transitionTimingFunction: "linear",
  },
  countdownFillDanger: {
    background: "linear-gradient(90deg, #ff8f8f, #ffb3b3)",
  },
  heroCountdownLabel: {
    color: "rgba(255, 255, 255, 0.72)",
    fontSize: tokens.fontSizeBase200,
  },

  // ── 双栏主区 ──────────────────────────────────────────────
  mainGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))",
    gap: tokens.spacingVerticalL,
    alignItems: "start",
  },
  mainCol: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalL,
    minWidth: 0,
  },

  // ── Card 通用 ──────────────────────────────────────────────
  card: {
    padding: tokens.spacingVerticalL + " " + tokens.spacingHorizontalXL,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    borderRadius: tokens.borderRadiusXLarge,
    boxShadow: tokens.shadow8,
    animationName: "tdFadeIn",
    animationDuration: "300ms",
    animationFillMode: "both",
  },
  // 入场 stagger：与 hero 错开
  cardDelay1: { animationDelay: "70ms" },
  cardDelay2: { animationDelay: "140ms" },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalM,
    flexWrap: "wrap",
  },
  cardTitleRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },

  // ── 控制台（Fluent Toolbar，窄屏溢出折叠进"更多操作"菜单） ──────────────
  // 独立操作行：与下方卡片同族的 token 化白卡（自动适配明暗主题），不再嵌入深色 Hero
  controls: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: tokens.spacingHorizontalS,
    background: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusXLarge,
    padding: tokens.spacingVerticalS + " " + tokens.spacingHorizontalM,
    boxShadow: tokens.shadow8,
  },
  controlsToolbar: {
    padding: 0,
    flex: 1,
    minWidth: 0,
  },
  finishToolbar: {
    padding: 0,
    flexShrink: 0,
  },
  // Overflow 的测量容器（Toolbar 要求单一子元素，溢出管理挂在这一层）。
  // 子项禁止收缩/换行：放不下交给溢出管理器折叠，而不是把按钮文字挤成两行
  controlsInner: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    minWidth: 0,
    "& > *": { flexShrink: 0 },
    "& button": { whiteSpace: "nowrap" },
  },
  // 时长输入 + 下一题捆绑组：同一 OverflowItem，放不下时一起收进菜单
  nextGroup: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
  },
  // 时长输入框：加宽避免“时长/秒”前后缀换行
  durationInput: {
    width: "150px",
    "& .fui-Input__contentBefore, & .fui-Input__contentAfter": {
      whiteSpace: "nowrap",
    },
  },
  // busy 标签：文字隐形占位 + Spinner 绝对居中覆盖，
  // 按钮 busy 切换时宽度保持不变（防控制条抖动）
  busyLabel: {
    position: "relative",
    display: "inline-flex",
    justifyContent: "center",
  },
  busyLabelGhost: {
    visibility: "hidden",
  },
  busyLabelSpinner: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  // 危险操作（结束课堂）：secondary 外观 + 红色前景
  dangerButton: {
    color: tokens.colorPaletteRedForeground1,
    ":hover": { color: tokens.colorPaletteRedForeground2 },
    ":active": { color: tokens.colorPaletteRedForeground2 },
    // 禁用时清除悬停/按下反馈：disabled 伪类优先级高于 :hover/:active
    ":disabled": {
      color: tokens.colorNeutralForegroundDisabled,
      ":hover": { color: tokens.colorNeutralForegroundDisabled },
      ":active": { color: tokens.colorNeutralForegroundDisabled },
    },
  },

  // ── 实时统计 ──────────────────────────────────────────────
  // 主指标行：与 Hero 同族的深色块，白字高对比
  statHeroRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalL,
    padding: tokens.spacingVerticalM + " " + tokens.spacingHorizontalL,
    borderRadius: tokens.borderRadiusLarge,
    background: "linear-gradient(130deg, #241452, #43289d)",
    boxShadow: "0 10px 24px -14px rgba(67, 40, 157, 0.65)",
  },
  statHeroLeft: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXS,
  },
  statHeroValue: {
    fontSize: tokens.fontSizeHero800,
    fontWeight: tokens.fontWeightBold,
    lineHeight: 1,
    color: "#ffffff",
    fontVariantNumeric: "tabular-nums",
  },
  statHeroLabel: {
    color: "rgba(255, 255, 255, 0.75)",
    fontSize: tokens.fontSizeBase200,
  },
  statRing: {
    flexShrink: 0,
  },
  statSecondaryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    gap: tokens.spacingHorizontalS,
  },
  statItem: {
    background: tokens.colorNeutralBackground3,
    borderRadius: tokens.borderRadiusMedium,
    padding: tokens.spacingVerticalS + " " + tokens.spacingHorizontalM,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
    transitionProperty: "background",
    transitionDuration: "200ms",
    ":hover": { background: tokens.colorNeutralBackground4 },
  },
  statValue: {
    fontSize: tokens.fontSizeHero700,
    fontWeight: tokens.fontWeightBold,
    lineHeight: 1.1,
    fontVariantNumeric: "tabular-nums",
  },
  statValueBrand: {
    color: tokens.colorBrandForeground1,
  },
  statValueSuccess: {
    color: tokens.colorPaletteGreenForeground1,
  },
  statValueDanger: {
    color: tokens.colorPaletteRedForeground1,
  },
  statLabel: { color: tokens.colorNeutralForeground3 },

  // ── 选项分布 ──────────────────────────────────────────────
  distribution: { display: "flex", flexDirection: "column", gap: tokens.spacingVerticalS },
  distributionTitle: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },
  statRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },
  statBarLabel: {
    width: "3.5em",
    flexShrink: 0,
  },
  statBarLabelCorrect: {
    color: tokens.colorPaletteGreenForeground1,
    fontWeight: tokens.fontWeightSemibold,
  },
  statBarTrack: {
    flex: 1,
    height: "20px",
    borderRadius: tokens.borderRadiusMedium,
    background: tokens.colorNeutralBackground4,
    boxShadow: `inset 0 1px 2px rgba(0, 0, 0, 0.06)`,
    overflow: "hidden",
    minWidth: "60px",
  },
  statBar: {
    height: "100%",
    borderRadius: tokens.borderRadiusMedium,
    background: `linear-gradient(90deg, ${tokens.colorBrandBackground2}, ${tokens.colorBrandBackground})`,
    transitionProperty: "width",
    transitionDuration: "500ms",
    transitionTimingFunction: "ease-out",
    minWidth: 0,
  },
  statBarCorrect: {
    background: `linear-gradient(90deg, ${tokens.colorPaletteGreenBackground2}, ${tokens.colorPaletteGreenBackground3})`,
  },
  statBarWrong: {
    background: `linear-gradient(90deg, ${tokens.colorPaletteRedBackground2}, ${tokens.colorPaletteRedBackground3})`,
  },
  statBarCount: {
    width: "5em",
    textAlign: "right",
    flexShrink: 0,
  },

  // ── 当前题 ──────────────────────────────────────────────
  questionTypeTag: {
    display: "inline-flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXXS,
    padding: "2px " + tokens.spacingHorizontalS,
    borderRadius: tokens.borderRadiusCircular,
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightSemibold,
  },
  questionStem: {
    marginTop: tokens.spacingVerticalS,
  },
  // 题干加大：投屏可读性
  questionStemLarge: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: 1.45,
  },
  optionList: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
    marginTop: tokens.spacingVerticalM,
  },
  optionRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
    padding: tokens.spacingVerticalS + " " + tokens.spacingHorizontalM,
    borderRadius: tokens.borderRadiusLarge,
    background: tokens.colorNeutralBackground3,
    borderLeft: "4px solid transparent",
    transitionProperty: "background, border-color, transform",
    transitionDuration: "200ms",
    ":hover": { transform: "translateX(2px)" },
  },
  optionRowCorrect: {
    background: tokens.colorPaletteGreenBackground2,
    borderLeft: `4px solid ${tokens.colorPaletteGreenBorderActive}`,
  },
  optionRowWrong: {
    opacity: 0.55,
  },
  optionKey: {
    flexShrink: 0,
    width: "30px",
    height: "30px",
    borderRadius: tokens.borderRadiusLarge,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: tokens.fontWeightBold,
    fontSize: tokens.fontSizeBase300,
    background: tokens.colorBrandForeground1,
    color: tokens.colorNeutralForegroundOnBrand,
  },
  optionKeyCorrect: {
    background: tokens.colorPaletteGreenForeground1,
    color: tokens.colorNeutralForegroundOnBrand,
  },
  optionText: {
    flex: 1,
    minWidth: 0,
  },
  optionCheck: {
    flexShrink: 0,
    color: tokens.colorPaletteGreenForeground1,
    animationName: "tdPop",
    animationDuration: "320ms",
    animationFillMode: "both",
  },
  explanation: {
    marginTop: tokens.spacingVerticalM,
    padding: tokens.spacingVerticalM + " " + tokens.spacingHorizontalL,
    borderRadius: tokens.borderRadiusLarge,
    background: tokens.colorBrandBackground2,
    borderLeft: `4px solid ${tokens.colorBrandStroke1}`,
  },
  explanationLabel: {
    color: tokens.colorBrandForeground1,
    fontWeight: tokens.fontWeightSemibold,
  },

  // ── 学员列表（网格卡片） ──────────────────────────────────────────────
  participants: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
    gap: tokens.spacingHorizontalS,
    maxHeight: "480px",
    overflowY: "auto",
    overflowX: "hidden",
    paddingRight: tokens.spacingHorizontalXXS,
  },
  participantRow: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
    padding: tokens.spacingVerticalS + " " + tokens.spacingHorizontalM,
    borderRadius: tokens.borderRadiusLarge,
    background: tokens.colorNeutralBackground3,
    transitionProperty: "background, transform",
    transitionDuration: "150ms",
    ":hover": {
      background: tokens.colorNeutralBackground4,
      transform: "translateY(-1px)",
    },
  },
  participantRowOffline: {
    opacity: 0.55,
  },
  // 被随机点到的学员：品牌色描边 + 品牌底 + 弹出动效，视觉上"跳出来"
  participantRowPicked: {
    background: tokens.colorBrandBackground2,
    boxShadow: `0 0 0 2px ${tokens.colorBrandStroke1}`,
    animationName: "tdPop",
    animationDuration: "320ms",
    animationFillMode: "both",
  },
  // ── 随机点名 ──────────────────────────────────────────────
  pickActions: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    flexWrap: "wrap",
  },
  // 点名结果横幅：教师端醒目确认（投屏端有大屏版本）
  pickBanner: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
    padding: tokens.spacingVerticalS + " " + tokens.spacingHorizontalM,
    borderRadius: tokens.borderRadiusLarge,
    background: `linear-gradient(130deg, ${tokens.colorBrandBackground2}, ${tokens.colorBrandBackground})`,
    borderLeft: `4px solid ${tokens.colorBrandStroke1}`,
    animationName: "tdPop",
    animationDuration: "320ms",
    animationFillMode: "both",
  },
  pickBannerText: {
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    flex: 1,
  },
  pickBannerLabel: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorBrandForeground1,
    fontWeight: tokens.fontWeightSemibold,
    letterSpacing: "0.12em",
  },
  pickBannerName: {
    fontWeight: tokens.fontWeightSemibold,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  participantTop: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    minWidth: 0,
  },
  avatarWrap: {
    position: "relative",
    flexShrink: 0,
  },
  onlineDot: {
    position: "absolute",
    bottom: "-2px",
    right: "-2px",
    width: "10px",
    height: "10px",
    borderRadius: tokens.borderRadiusCircular,
    border: `2px solid ${tokens.colorNeutralBackground1}`,
  },
  onlineDotOn: {
    background: tokens.colorStatusSuccessForeground1,
  },
  onlineDotOff: {
    background: tokens.colorNeutralForeground4,
  },
  participantNameCol: {
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    flex: 1,
  },
  participantName: {
    fontWeight: tokens.fontWeightSemibold,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  participantBottom: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    minHeight: "24px",
  },
  correctIcon: {
    color: tokens.colorPaletteGreenForeground1,
    flexShrink: 0,
    marginLeft: "auto",
  },
  wrongIcon: {
    color: tokens.colorPaletteRedForeground1,
    flexShrink: 0,
    marginLeft: "auto",
  },

  // ── 题目记录弹窗（回看已讲过的题目） ────────────────────────
  historySurface: {
    maxWidth: "min(92vw, 860px)",
  },
  historyBody: {
    display: "flex",
    gap: tokens.spacingHorizontalL,
    minHeight: "360px",
    maxHeight: "64vh",
  },
  historyNav: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
    width: "132px",
    flexShrink: 0,
    overflowY: "auto",
    borderRight: `1px solid ${tokens.colorNeutralStroke2}`,
    paddingRight: tokens.spacingHorizontalS,
  },
  historyNavItem: {
    justifyContent: "space-between",
  },
  historyDetail: {
    flex: 1,
    minWidth: 0,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  historyLoading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "200px",
  },
  historyStatsRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    flexWrap: "wrap",
  },
  historyStatsText: {
    color: tokens.colorNeutralForeground2,
    fontVariantNumeric: "tabular-nums",
  },
  historyStem: {
    fontWeight: tokens.fontWeightSemibold,
    whiteSpace: "pre-wrap",
  },
  historyOptionCount: {
    marginLeft: "auto",
    flexShrink: 0,
    color: tokens.colorNeutralForeground2,
    fontVariantNumeric: "tabular-nums",
  },
  historyAnswerRow: {
    display: "flex",
    alignItems: "baseline",
    gap: tokens.spacingHorizontalS,
  },

  // ── 学习小组统计 ──────────────────────────────────────────────
  groupList: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
  },
  groupRow: {
    display: "grid",
    gridTemplateColumns: "104px 72px 1fr 96px 64px",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    padding: tokens.spacingVerticalXXS + " " + tokens.spacingHorizontalXXS,
    borderRadius: tokens.borderRadiusMedium,
    ":hover": { background: tokens.colorNeutralBackground3 },
  },
  groupName: { fontWeight: tokens.fontWeightSemibold },
  groupBarTrack: {
    height: "12px",
    borderRadius: tokens.borderRadiusCircular,
    background: tokens.colorNeutralBackground4,
    boxShadow: `inset 0 1px 2px rgba(0, 0, 0, 0.06)`,
    overflow: "hidden",
    minWidth: "40px",
  },
  groupBar: {
    height: "100%",
    borderRadius: tokens.borderRadiusCircular,
    background: `linear-gradient(90deg, ${tokens.colorBrandBackground2}, ${tokens.colorBrandBackground})`,
    transitionProperty: "width",
    transitionDuration: "500ms",
    transitionTimingFunction: "ease-out",
  },
  groupSubmitted: { fontVariantNumeric: "tabular-nums" },
  groupRate: { color: tokens.colorNeutralForeground3, textAlign: "right" },
  groupRateValue: {
    color: tokens.colorPaletteGreenForeground1,
    fontWeight: tokens.fontWeightSemibold,
  },

  // ── 答题排行榜 ──────────────────────────────────────────────
  lbTitleIcon: {
    color: tokens.colorBrandForeground1,
  },
  leaderboard: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXS,
    maxHeight: "420px",
    overflowY: "auto",
    overflowX: "hidden",
  },
  lbRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    padding: tokens.spacingVerticalXS + " " + tokens.spacingHorizontalS,
    borderRadius: tokens.borderRadiusMedium,
    background: tokens.colorNeutralBackground3,
    transitionProperty: "background",
    transitionDuration: "150ms",
    ":hover": { background: tokens.colorNeutralBackground4 },
  },
  lbRowOffline: {
    opacity: 0.55,
  },
  // 判对行：左侧绿色细条提示（与选项正确态呼应）
  lbRowCorrect: {
    boxShadow: `inset 3px 0 0 ${tokens.colorPaletteGreenForeground1}`,
  },
  lbRank: {
    width: "26px",
    height: "26px",
    flexShrink: 0,
    borderRadius: tokens.borderRadiusCircular,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightBold,
    fontVariantNumeric: "tabular-nums",
    color: tokens.colorNeutralForeground3,
    background: tokens.colorNeutralBackground4,
  },
  // 前三名奖牌色
  lbRankGold: {
    background: "linear-gradient(135deg, #f7c948, #e8a10c)",
    color: "#3d2c00",
  },
  lbRankSilver: {
    background: "linear-gradient(135deg, #e6e9ef, #b7bfcc)",
    color: "#333a45",
  },
  lbRankBronze: {
    background: "linear-gradient(135deg, #e8b28d, #b97444)",
    color: "#40230d",
  },
  lbNameCol: {
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    flex: 1,
  },
  lbTime: {
    display: "inline-flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXXS,
    flexShrink: 0,
    fontVariantNumeric: "tabular-nums",
    fontWeight: tokens.fontWeightSemibold,
    fontSize: tokens.fontSizeBase300,
  },

  // ── 空状态 ──────────────────────────────────────────────
  emptyState: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: tokens.spacingVerticalS,
    padding: tokens.spacingVerticalXL + " " + tokens.spacingHorizontalXL,
    color: tokens.colorNeutralForeground3,
    textAlign: "center",
  },
  emptyIconWrap: {
    width: "72px",
    height: "72px",
    borderRadius: tokens.borderRadiusCircular,
    background: tokens.colorNeutralBackground3,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: tokens.colorNeutralForeground4,
  },
  emptyIcon: {
    fontSize: "28px",
  },

  // ── 加载/错误 ──────────────────────────────────────────────
  center: { textAlign: "center", padding: tokens.spacingVerticalXXL },
});
