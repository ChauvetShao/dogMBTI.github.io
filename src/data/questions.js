export const questions = [
  // 维度1：外向E / 内向I
  {
    id: 1,
    question: "遇到陌生狗/陌生人时，它通常：",
    dimension: "EI",
    options: [
      { text: "先冲上去闻/想打招呼", value: "E" },
      { text: "先退后观察，确定安全再靠近", value: "I" }
    ]
  },
  {
    id: 2,
    question: "去新地方（公园、宠物店）它更像：",
    dimension: "EI",
    options: [
      { text: "兴奋探索、到处跑", value: "E" },
      { text: "更黏人、频繁回头确认你在不在", value: "I" }
    ]
  },
  {
    id: 3,
    question: "遇到热闹场景（很多狗、人声大）它通常：",
    dimension: "EI",
    options: [
      { text: "越热闹越来劲", value: "E" },
      { text: "一会儿就想离开或躲到你身后", value: "I" }
    ]
  },
  {
    id: 4,
    question: "在狗群里它更常：",
    dimension: "EI",
    options: [
      { text: "主动发起追逐/玩耍", value: "E" },
      { text: "主要跟熟狗玩，陌生狗多保持距离", value: "I" }
    ]
  },
  // 维度2：实感S / 直觉N
  {
    id: 5,
    question: "学新指令时，它更吃：",
    dimension: "SN",
    options: [
      { text: "明确动作+重复练习", value: "S" },
      { text: "用游戏/变化方式学得更快", value: "N" }
    ]
  },
  {
    id: 6,
    question: "散步路线它更偏好：",
    dimension: "SN",
    options: [
      { text: "固定路线更安心", value: "S" },
      { text: "喜欢换路、看到新东西更兴奋", value: "N" }
    ]
  },
  {
    id: 7,
    question: "玩玩具时它更像：",
    dimension: "SN",
    options: [
      { text: "更爱“咬、撕、叼、磨牙”等具体玩法", value: "S" },
      { text: "更爱“解谜、找东西、拆机关”等", value: "N" }
    ]
  },
  {
    id: 8,
    question: "遇到新物体（雨伞、机器人、气球）它通常：",
    dimension: "SN",
    options: [
      { text: "先闻、先确认触感/声音再决定", value: "S" },
      { text: "很快做出反应：要么立刻上头要么立刻害怕", value: "N" }
    ]
  },
  // 维度3：理性T / 感性F
  {
    id: 9,
    question: "你制止它（不许捡地上东西）时，它更常：",
    dimension: "TF",
    options: [
      { text: "试探边界：看你到底多认真", value: "T" },
      { text: "看你情绪：你严肃它就立刻怂", value: "F" }
    ]
  },
  {
    id: 10,
    question: "当你情绪低落/哭泣时，它更像：",
    dimension: "TF",
    options: [
      { text: "有点懵，但仍按自己的节奏玩/睡", value: "T" },
      { text: "会靠近安抚、黏你、舔你", value: "F" }
    ]
  },
  {
    id: 11,
    question: "在训练中它更在乎：",
    dimension: "TF",
    options: [
      { text: "“奖励是否到位、规则是否一致”", value: "T" },
      { text: "“你开不开心、语气温不温柔”", value: "F" }
    ]
  },
  {
    id: 12,
    question: "与其他狗发生小冲突时，它更常：",
    dimension: "TF",
    options: [
      { text: "讲“实力/策略”：顶回去或迅速撤退", value: "T" },
      { text: "讲“氛围/关系”：更容易受对方情绪影响", value: "F" }
    ]
  },
  // 维度4：判断J / 感知P
  {
    id: 13,
    question: "日常作息它更像：",
    dimension: "JP",
    options: [
      { text: "到点吃饭到点睡，节奏很规律", value: "J" },
      { text: "时紧时松，容易被新鲜事打乱", value: "P" }
    ]
  },
  {
    id: 14,
    question: "出门前你拿牵引，它通常：",
    dimension: "JP",
    options: [
      { text: "站好/等你安排", value: "J" },
      { text: "嗨到不行/转圈/到处窜", value: "P" }
    ]
  },
  {
    id: 15,
    question: "家里来客人/发生变化时，它更像：",
    dimension: "JP",
    options: [
      { text: "先按老规矩：回窝/找熟悉位置", value: "J" },
      { text: "立刻围观/参与/随机应变", value: "P" }
    ]
  },
  {
    id: 16,
    question: "玩游戏时它更常：",
    dimension: "JP",
    options: [
      { text: "更爱有规则的互动（如等你丢再捡）", value: "J" },
      { text: "更爱即兴发挥（突然改玩法/自己加戏）", value: "P" }
    ]
  }
];
