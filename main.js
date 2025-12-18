// 小狗MBTI测试主要逻辑

// 题目数据
const questions = [
    {
        id: 1,
        dimension: 'E/I',
        question: '遇到陌生狗/陌生人时，它通常：',
        optionA: { text: '先冲上去闻/想打招呼', value: 'E' },
        optionB: { text: '先退后观察，确定安全再靠近', value: 'I' }
    },
    {
        id: 2,
        dimension: 'E/I',
        question: '去新地方（公园、宠物店）它更像：',
        optionA: { text: '兴奋探索、到处跑', value: 'E' },
        optionB: { text: '更黏人、频繁回头确认你在不在', value: 'I' }
    },
    {
        id: 3,
        dimension: 'E/I',
        question: '遇到热闹场景（很多狗、人声大）它通常：',
        optionA: { text: '越热闹越来劲', value: 'E' },
        optionB: { text: '一会儿就想离开或躲到你身后', value: 'I' }
    },
    {
        id: 4,
        dimension: 'E/I',
        question: '在狗群里它更常：',
        optionA: { text: '主动发起追逐/玩耍', value: 'E' },
        optionB: { text: '主要跟熟狗玩，陌生狗多保持距离', value: 'I' }
    },
    {
        id: 5,
        dimension: 'S/N',
        question: '学新指令时，它更吃：',
        optionA: { text: '明确动作+重复练习', value: 'S' },
        optionB: { text: '用游戏/变化方式学得更快', value: 'N' }
    },
    {
        id: 6,
        dimension: 'S/N',
        question: '散步路线它更偏好：',
        optionA: { text: '固定路线更安心', value: 'S' },
        optionB: { text: '喜欢换路、看到新东西更兴奋', value: 'N' }
    },
    {
        id: 7,
        dimension: 'S/N',
        question: '玩玩具时它更像：',
        optionA: { text: '更爱"咬、撕、叼、磨牙"等具体玩法', value: 'S' },
        optionB: { text: '更爱"解谜、找东西、拆机关"等', value: 'N' }
    },
    {
        id: 8,
        dimension: 'S/N',
        question: '遇到新物体（雨伞、机器人、气球）它通常：',
        optionA: { text: '先闻、先确认触感/声音再决定', value: 'S' },
        optionB: { text: '很快做出反应：要么立刻上头要么立刻害怕', value: 'N' }
    },
    {
        id: 9,
        dimension: 'T/F',
        question: '你制止它（不许捡地上东西）时，它更常：',
        optionA: { text: '试探边界：看你到底多认真', value: 'T' },
        optionB: { text: '看你情绪：你严肃它就立刻怂', value: 'F' }
    },
    {
        id: 10,
        dimension: 'T/F',
        question: '当你情绪低落/哭泣时，它更像：',
        optionA: { text: '有点懵，但仍按自己的节奏玩/睡', value: 'T' },
        optionB: { text: '会靠近安抚、黏你、舔你', value: 'F' }
    },
    {
        id: 11,
        dimension: 'T/F',
        question: '在训练中它更在乎：',
        optionA: { text: '"奖励是否到位、规则是否一致"', value: 'T' },
        optionB: { text: '"你开不开心、语气温不温柔"', value: 'F' }
    },
    {
        id: 12,
        dimension: 'T/F',
        question: '与其他狗发生小冲突时，它更常：',
        optionA: { text: '讲"实力/策略"：顶回去或迅速撤退', value: 'T' },
        optionB: { text: '讲"氛围/关系"：更容易受对方情绪影响', value: 'F' }
    },
    {
        id: 13,
        dimension: 'J/P',
        question: '日常作息它更像：',
        optionA: { text: '到点吃饭到点睡，节奏很规律', value: 'J' },
        optionB: { text: '时紧时松，容易被新鲜事打乱', value: 'P' }
    },
    {
        id: 14,
        dimension: 'J/P',
        question: '出门前你拿牵引，它通常：',
        optionA: { text: '站好/等你安排', value: 'J' },
        optionB: { text: '嗨到不行/转圈/到处窜', value: 'P' }
    },
    {
        id: 15,
        dimension: 'J/P',
        question: '家里来客人/发生变化时，它更像：',
        optionA: { text: '先按老规矩：回窝/找熟悉位置', value: 'J' },
        optionB: { text: '立刻围观/参与/随机应变', value: 'P' }
    },
    {
        id: 16,
        dimension: 'J/P',
        question: '玩游戏时它更常：',
        optionA: { text: '更爱有规则的互动（如等你丢再捡）', value: 'J' },
        optionB: { text: '更爱即兴发挥（突然改玩法/自己加戏）', value: 'P' }
    }
];

// 16种狗格类型数据
const personalityTypes = {
    'ESTJ': {
        name: '纪律队长犬',
        description: '守规矩、执行力强',
        traits: ['守规矩', '执行力强', '有组织'],
        bestFriends: ['乖乖配合型 (ISTJ/ISFJ/ESFJ)', '听话搭子'],
        bestScenes: ['固定路线散步', '训练课', '排队等候也不慌'],
        tips: '遇到太会整活的"疯玩派"，你可能会忍不住当场开班上课',
        image: 'resources/estj.png'
    },
    'ESFJ': {
        name: '社交班长犬',
        description: '合群、爱照顾气氛',
        traits: ['合群', '爱照顾气氛', '社交达人'],
        bestFriends: ['氛围组 (ENFP/ESFP)', '温柔跟随派 (ISFJ)'],
        bestScenes: ['宠物友好咖啡外摆', '热闹市集', '熟人局'],
        tips: '别把"高冷观察员"硬拉进群，TA只是慢热不是不爱你',
        image: 'resources/esfj.png'
    },
    'ISTJ': {
        name: '稳重守护犬',
        description: '稳定、边界清晰',
        traits: ['稳定', '边界清晰', '可靠'],
        bestFriends: ['同款稳稳党 (ISTJ/ISFJ/INFP)', '一起慢慢熟'],
        bestScenes: ['人少的公园边边', '固定时段固定点位'],
        tips: '遇到突然冲刺的放电王，你会礼貌微笑然后想回家',
        image: 'resources/istj.png'
    },
    'ISFJ': {
        name: '贴心小棉袄犬',
        description: '温柔、黏人、护主',
        traits: ['温柔', '黏人', '护主'],
        bestFriends: ['温柔带玩犬 (ENFJ/ESFJ)', '安全感担当 (ISTJ)'],
        bestScenes: ['小型遛狗局', '晒太阳慢走', '安静嗅嗅'],
        tips: '太热闹的追逐局容易"吓到电量清零"，咱们慢慢来',
        image: 'resources/isfj.png'
    },
    'ESTP': {
        name: '运动玩家犬',
        description: '胆大、爱刺激、好胜',
        traits: ['胆大', '爱刺激', '好胜'],
        bestFriends: ['放电搭子 (ESTP/ESFP/ENTP)', '越玩越嗨'],
        bestScenes: ['大草坪', '追逐跑酷', '飞盘球球时间'],
        tips: '遇到社恐小宝贝记得"刹车"，别用热情把人家吓跑啦',
        image: 'resources/estp.png'
    },
    'ESFP': {
        name: '派对甜心犬',
        description: '人来疯、超会玩',
        traits: ['人来疯', '超会玩', '派对焦点'],
        bestFriends: ['快乐同频 (ENFP/ESFJ/ESTP)', '温柔玩伴 (ISFP)'],
        bestScenes: ['活动局', '拍照打卡', '边玩边社交'],
        tips: '如果有人要你"站好别动"，你可能会：好的！（下一秒转圈）',
        image: 'resources/esfp.png'
    },
    'ISTP': {
        name: '冷静机动犬',
        description: '独立、反应快、爱研究',
        traits: ['独立', '反应快', '爱研究'],
        bestFriends: ['互不打扰也舒服 (ISTP/INTP/ISTJ/ISFP)'],
        bestScenes: ['平行走', '分散探索', '低密度社交'],
        tips: '太黏人的热情抱抱可能会让你想：我们保持一点点优雅距离',
        image: 'resources/istp.png'
    },
    'ISFP': {
        name: '文艺敏感犬',
        description: '细腻、慢热、爱舒服',
        traits: ['细腻', '慢热', '爱舒服'],
        bestFriends: ['温柔同类 (INFP/ISFP/ISFJ)', '慢热友谊'],
        bestScenes: ['安静草地', '慢嗅闻', '晒太阳发呆局'],
        tips: '别被"疯玩派"卷进去，咱们主打一个轻轻的、软软的',
        image: 'resources/isfp.png'
    },
    'ENTJ': {
        name: '统领开荒犬',
        description: '目标感强、带队型',
        traits: ['目标感强', '带队型', '天生领袖'],
        bestFriends: ['强强联手 (ESTJ/INTJ/ENFJ)', '有组织有纪律'],
        bestScenes: ['训练课', '定点遛狗团', '可控小群局'],
        tips: '遇到同样强势还爱临时改规则的，容易"当场顶牛"',
        image: 'resources/entj.png'
    },
    'ENFJ': {
        name: '号召力社交犬',
        description: '喜欢组织、带动全场',
        traits: ['喜欢组织', '带动全场', '社交导师'],
        bestFriends: ['慢热宝宝 (INFP/ISFJ)', '氛围队友 (ENFP/ESFJ)'],
        bestScenes: ['新狗入群的带玩官', '组织小队出门社交'],
        tips: '别照顾到把自己累着——你也要留点电量给自己呀',
        image: 'resources/enfj.png'
    },
    'INTJ': {
        name: '策略观察犬',
        description: '很会判断、偏"高冷聪明"',
        traits: ['很会判断', '高冷聪明', '军师型'],
        bestFriends: ['安静有边界 (INTJ/ISTJ/INFJ)', '懂你的人不吵你'],
        bestScenes: ['小局', '路线散步', '先观察后互动'],
        tips: '太贴脸太热闹会触发"冷静退场模式"，别逼你社交',
        image: 'resources/intj.png'
    },
    'INFJ': {
        name: '灵性陪伴犬',
        description: '共情强、依恋深',
        traits: ['共情强', '依恋深', '灵魂伴侣'],
        bestFriends: ['温柔治愈系 (ENFJ/ISFJ/INFP/INTJ)', '一眼对上就很久'],
        bestScenes: ['低刺激环境', '1v1深度友谊局'],
        tips: '大场子容易"情绪过载"，你需要慢慢充电',
        image: 'resources/infj.png'
    },
    'ENTP': {
        name: '点子王整活犬',
        description: '爱试新、会"搞事"',
        traits: ['爱试新', '会搞事', '创意大师'],
        bestFriends: ['一起脑洞 (ENFP/ESTP/ESFP/INTP)', '越玩越多花样'],
        bestScenes: ['探索新路线', '嗅闻游戏', '互动玩具'],
        tips: '遇到规则超强的"队长型"，你可能会忍不住试探：那我偏要这样呢？',
        image: 'resources/entp.png'
    },
    'ENFP': {
        name: '快乐小太阳犬',
        description: '热情、好奇心爆棚',
        traits: ['热情', '好奇心爆棚', '开心果'],
        bestFriends: ['氛围最重要 (ESFP/ESFJ/ENFJ)', '温柔跟着玩 (INFP/ISFP)'],
        bestScenes: ['活动局', '轻度追逐', '频繁换玩法也不腻'],
        tips: '别被"硬核对抗局"带节奏，你是来交朋友不是来打擂台的',
        image: 'resources/enfp.png'
    },
    'INTP': {
        name: '思考宅宅犬',
        description: '安静、爱自己玩、探索型',
        traits: ['安静', '爱自己玩', '探索型'],
        bestFriends: ['安静同频 (INTP/ISTP/INTJ/ISFJ)', '各玩各的也很熟'],
        bestScenes: ['嗅闻探索', '短时社交', '同场共处最舒服'],
        tips: '被追着贴贴会压力飙升——给我一点空间，我会更喜欢你',
        image: 'resources/intp.png'
    },
    'INFP': {
        name: '温柔理想犬',
        description: '胆小谨慎但很深情',
        traits: ['胆小谨慎', '很深情', '梦想家'],
        bestFriends: ['慢慢来派 (INFJ/ISFJ/INFP)', '温柔带动 (ENFJ)'],
        bestScenes: ['固定狗友', '固定地点', '低刺激散步局'],
        tips: '追逐太猛会让你"社交冻结"，先平行走再考虑放开玩',
        image: 'resources/infp.png'
    }
};

// 全局变量
let currentQuestionIndex = 0;
let answers = [];
let currentPage = 'welcome';
let isMusicPlaying = false;

// DOM元素
const elements = {
    // 页面容器
    welcomePage: document.getElementById('welcome-page'),
    testPage: document.getElementById('test-page'),
    loadingPage: document.getElementById('loading-page'),
    resultPage: document.getElementById('result-page'),
    
    // 音乐元素
    bgMusic: document.getElementById('bg-music'),
    musicToggle: document.getElementById('music-toggle'),

    // 欢迎页面元素
    startTestBtn: document.getElementById('start-test-btn'),
    instructionsContent: document.getElementById('instructions-content'),
    
    // 测试页面元素
    progressFill: document.getElementById('progress-fill'),
    currentQuestionSpan: document.getElementById('current-question'),
    questionNumber: document.getElementById('question-number'),
    questionDimension: document.getElementById('question-dimension'),
    questionText: document.getElementById('question-text'),
    optionA: document.getElementById('option-a'),
    optionB: document.getElementById('option-b'),
    optionAText: document.getElementById('option-a-text'),
    optionBText: document.getElementById('option-b-text'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    
    // 加载页面元素
    loadingFill: document.getElementById('loading-fill'),
    loadingText: document.getElementById('loading-text'),
    loadingSubtext: document.getElementById('loading-subtext'),
    
    // 结果页面元素
    resultType: document.getElementById('result-type'),
    resultName: document.getElementById('result-name'),
    resultDescription: document.getElementById('result-description'),
    resultPuppyImage: document.getElementById('result-puppy-image'),
    personalityTraits: document.getElementById('personality-traits'),
    bestFriends: document.getElementById('best-friends'),
    bestScenes: document.getElementById('best-scenes'),
    tipsText: document.getElementById('tips-text'),
    retakeBtn: document.getElementById('retake-btn'),
    shareBtn: document.getElementById('share-btn'),
    
    // 维度分析元素
    dimensionFills: document.querySelectorAll('.dimension-fill'),
    dimensionValues: {
        'EI': document.getElementById('value-ei'),
        'SN': document.getElementById('value-sn'),
        'TF': document.getElementById('value-tf'),
        'JP': document.getElementById('value-jp')
    }
};

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // 设置音乐
    if(elements.bgMusic) {
        elements.bgMusic.src = "resources/bgm.mp3";
        elements.bgMusic.volume = 0.5;
    }

    // 绑定事件监听器
    bindEventListeners();
    
    // 初始化页面状态
    showPage('welcome');
    
    // 重置测试数据
    resetTest();
}

function bindEventListeners() {
    // 音乐开关
    if(elements.musicToggle) {
        elements.musicToggle.addEventListener('click', toggleMusic);
    }

    // 尝试自动播放音乐（首次交互）
    document.body.addEventListener('click', function() {
        if (elements.bgMusic && elements.bgMusic.paused && !isMusicPlaying) {
             // 只有在用户没有手动关闭过的情况下才自动播放
             // 这里简化逻辑，只要是暂停状态就尝试播放，但要配合toggle状态
             // 如果用户手动关闭了，我们不应该自动播放
             // 这里简单处理：首次点击播放
             toggleMusic(); 
        }
    }, { once: true });

    // 欢迎页面事件
    elements.startTestBtn.addEventListener('click', startTest);
    
    // 测试页面事件
    elements.optionA.addEventListener('click', () => selectOption('A'));
    elements.optionB.addEventListener('click', () => selectOption('B'));
    elements.prevBtn.addEventListener('click', previousQuestion);
    elements.nextBtn.addEventListener('click', nextQuestion);
    
    // 结果页面事件
    // 修复重新测试按钮：改为调用startTest重新开始
    elements.retakeBtn.addEventListener('click', startTest);
    elements.shareBtn.addEventListener('click', shareResult);
    
    // 弹窗关闭
    const closeModalBtn = document.getElementById('close-modal-btn');
    if(closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            document.getElementById('share-modal').style.display = 'none';
        });
    }
    
    // 点击遮罩层也可以关闭
    const shareModal = document.getElementById('share-modal');
    if(shareModal) {
        shareModal.addEventListener('click', (e) => {
            if (e.target === shareModal) {
                shareModal.style.display = 'none';
            }
        });
    }
}

function toggleMusic() {
    if (!elements.bgMusic) return;
    
    if (isMusicPlaying) {
        elements.bgMusic.pause();
        elements.musicToggle.classList.add('off');
        isMusicPlaying = false;
    } else {
        elements.bgMusic.play().then(() => {
            elements.musicToggle.classList.remove('off');
            isMusicPlaying = true;
        }).catch(e => {
            console.log('Music playback failed:', e);
        });
    }
}

function showPage(pageName) {
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // 显示目标页面
    const targetPage = document.getElementById(`${pageName}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageName;
        
        // 页面切换动画
        anime({
            targets: targetPage,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 500,
            easing: 'easeOutQuart'
        });
    }
}

function startTest() {
    resetTest();
    showPage('test');
    loadQuestion(0);
}

function resetTest() {
    currentQuestionIndex = 0;
    answers = new Array(16).fill(null);
    
    // 重置UI状态
    elements.nextBtn.style.display = 'none';
    elements.prevBtn.disabled = true;
    
    // 清除选项选择状态
    elements.optionA.classList.remove('selected');
    elements.optionB.classList.remove('selected');
}

function loadQuestion(index) {
    if (index < 0 || index >= questions.length) return;
    
    const question = questions[index];
    
    // 更新题目信息
    elements.currentQuestionSpan.textContent = index + 1;
    elements.questionNumber.textContent = index + 1;
    elements.questionDimension.textContent = getDimensionText(question.dimension);
    elements.questionText.textContent = question.question;
    elements.optionAText.textContent = question.optionA.text;
    elements.optionBText.textContent = question.optionB.text;
    
    // 更新进度条
    const progress = ((index + 1) / questions.length) * 100;
    elements.progressFill.style.width = `${progress}%`;
    
    // 恢复之前的选择
    const previousAnswer = answers[index];
    elements.optionA.classList.remove('selected');
    elements.optionB.classList.remove('selected');
    
    if (previousAnswer === 'A') {
        elements.optionA.classList.add('selected');
    } else if (previousAnswer === 'B') {
        elements.optionB.classList.add('selected');
    }
    
    // 更新导航按钮状态
    elements.prevBtn.disabled = index === 0;
    elements.nextBtn.style.display = 
        (previousAnswer && index < questions.length - 1) ? 'block' : 'none';
    
    // 题目切换动画
    anime({
        targets: '.question-card',
        scale: [0.95, 1],
        opacity: [0.8, 1],
        duration: 400,
        easing: 'easeOutQuart'
    });
}

function getDimensionText(dimension) {
    const dimensionMap = {
        'E/I': '外向E / 内向I',
        'S/N': '实感S / 直觉N',
        'T/F': '理性T / 感性F',
        'J/P': '判断J / 感知P'
    };
    return dimensionMap[dimension] || dimension;
}

function selectOption(option) {
    answers[currentQuestionIndex] = option;
    
    // 更新UI选择状态
    elements.optionA.classList.remove('selected');
    elements.optionB.classList.remove('selected');
    
    if (option === 'A') {
        elements.optionA.classList.add('selected');
    } else {
        elements.optionB.classList.add('selected');
    }
    
    // 选项点击动画
    const selectedBtn = option === 'A' ? elements.optionA : elements.optionB;
    anime({
        targets: selectedBtn,
        scale: [0.95, 1],
        duration: 200,
        easing: 'easeOutQuart'
    });
    
    // 如果是最后一题，延迟后显示结果
    if (currentQuestionIndex === questions.length - 1) {
        setTimeout(() => {
            showLoading();
        }, 500);
    } else {
        // 显示下一题按钮
        elements.nextBtn.style.display = 'block';
        
        // 自动跳转到下一题
        setTimeout(() => {
            nextQuestion();
        }, 800);
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }
}

function showLoading() {
    showPage('loading');
    
    // 重置进度条
    if (elements.loadingFill) {
        elements.loadingFill.style.width = '0%';
    }

    // 趣味文案列表
    const loadingTexts = [
        "正在嗅闻你的气味...",
        "正在分析摇尾巴频率...",
        "正在计算拆家潜力...",
        "正在连接汪星信号...",
        "正在解读眼神光波...",
        "正在比对骨头藏匿点..."
    ];

    // 随机更新文案
    let textIndex = 0;
    const textInterval = setInterval(() => {
        if (elements.loadingSubtext) {
            elements.loadingSubtext.textContent = loadingTexts[textIndex % loadingTexts.length];
            textIndex++;
        }
    }, 800);

    // 使用anime.js做进度条动画
    anime({
        targets: '#loading-fill',
        width: '100%',
        easing: 'easeInOutQuad',
        duration: 3000,
        update: function(anim) {
            // 可以在这里加百分比文字更新
        },
        complete: function() {
            clearInterval(textInterval);
            calculateResult();
            showResult();
        }
    });
}

function calculateResult() {
    // 计分
    const scores = {
        'E': 0, 'I': 0,
        'S': 0, 'N': 0,
        'T': 0, 'F': 0,
        'J': 0, 'P': 0
    };
    
    // 统计各维度得分
    questions.forEach((question, index) => {
        const answer = answers[index];
        if (answer === 'A') {
            scores[question.optionA.value]++;
        } else if (answer === 'B') {
            scores[question.optionB.value]++;
        }
    });
    
    // 确定各维度偏好
    const type = [
        scores['E'] >= scores['I'] ? 'E' : 'I',
        scores['S'] >= scores['N'] ? 'S' : 'N',
        scores['T'] >= scores['F'] ? 'T' : 'F',
        scores['J'] >= scores['P'] ? 'J' : 'P'
    ].join('');
    
    // 计算百分比（用于展示维度条）
    const percentages = {
        'EI': Math.round(scores[type[0]] / (scores['E'] + scores['I']) * 100),
        'SN': Math.round(scores[type[1]] / (scores['S'] + scores['N']) * 100),
        'TF': Math.round(scores[type[2]] / (scores['T'] + scores['F']) * 100),
        'JP': Math.round(scores[type[3]] / (scores['J'] + scores['P']) * 100)
    };
    
    return { type, percentages };
}

function showResult() {
    const { type, percentages } = calculateResult();
    const personality = personalityTypes[type];
    
    // 更新结果页面内容
    elements.resultType.textContent = type;
    elements.resultName.textContent = personality.name;
    elements.resultDescription.textContent = personality.description;
    elements.resultPuppyImage.src = personality.image;
    
    // 更新性格标签
    elements.personalityTraits.innerHTML = personality.traits
        .map(trait => `<span class="trait-tag">${trait}</span>`)
        .join('');
        
    // 更新推荐内容
    elements.bestFriends.textContent = personality.bestFriends.join('、');
    elements.bestScenes.textContent = personality.bestScenes.join('、');
    elements.tipsText.textContent = personality.tips;
    
    // 更新维度分析条
    updateDimensionBar('EI', type[0], percentages['EI']);
    updateDimensionBar('SN', type[1], percentages['SN']);
    updateDimensionBar('TF', type[2], percentages['TF']);
    updateDimensionBar('JP', type[3], percentages['JP']);
    
    showPage('result');
    
    // 结果页入场动画
    anime({
        targets: '.result-poster',
        scale: [0.9, 1],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutElastic(1, .8)'
    });
}

function updateDimensionBar(dimension, type, percentage) {
    const fillElement = document.querySelector(`.dimension-fill[data-dimension="${dimension}"]`);
    const valueElement = elements.dimensionValues[dimension];
    
    if (fillElement && valueElement) {
        // 设置文字
        const labelMap = {
            'E': '外向', 'I': '内向',
            'S': '实感', 'N': '直觉',
            'T': '理性', 'F': '感性',
            'J': '判断', 'P': '感知'
        };
        
        // 找到对应的行
        const container = fillElement.closest('.dimension-mini');
        const labelSpan = container.querySelector('.dim-label-row span:first-child');
        
        labelSpan.textContent = `${type} ${labelMap[type]}`;
        valueElement.textContent = `${percentage}%`;
        
        // 设置进度条宽度
        // 延迟一点执行以展示动画
        setTimeout(() => {
            fillElement.style.width = `${percentage}%`;
        }, 500);
    }
}

function shareResult() {
    const poster = document.getElementById('result-poster');
    const originalBtnText = elements.shareBtn.textContent;
    
    elements.shareBtn.textContent = '生成中...';
    elements.shareBtn.disabled = true;

    // 使用html2canvas生成图片
    html2canvas(poster, {
        useCORS: true,
        scale: 2, // 提高清晰度
        backgroundColor: '#ffffff', // 确保背景不透明
        logging: false
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const generatedImg = document.getElementById('generated-poster');
        generatedImg.src = imgData;
        
        document.getElementById('share-modal').style.display = 'flex';
        
        elements.shareBtn.textContent = originalBtnText;
        elements.shareBtn.disabled = false;
    }).catch(err => {
        console.error('Share generation failed:', err);
        elements.shareBtn.textContent = '生成失败';
        elements.shareBtn.disabled = false;
        setTimeout(() => {
            elements.shareBtn.textContent = originalBtnText;
        }, 2000);
    });
}
