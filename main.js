// 假名数据分组
const kanaGroups = [
  {
    name: '清音',
    list: [
      { roma: 'a', hira: 'あ', kata: 'ア', origin: '安' },
      { roma: 'i', hira: 'い', kata: 'イ', origin: '以' },
      { roma: 'u', hira: 'う', kata: 'ウ', origin: '宇' },
      { roma: 'e', hira: 'え', kata: 'エ', origin: '衣' },
      { roma: 'o', hira: 'お', kata: 'オ', origin: '於' },
      { roma: 'ka', hira: 'か', kata: 'カ', origin: '加' },
      { roma: 'ki', hira: 'き', kata: 'キ', origin: '幾' },
      { roma: 'ku', hira: 'く', kata: 'ク', origin: '久' },
      { roma: 'ke', hira: 'け', kata: 'ケ', origin: '计' },
      { roma: 'ko', hira: 'こ', kata: 'コ', origin: '己' },
      { roma: 'sa', hira: 'さ', kata: 'サ', origin: '左' },
      { roma: 'shi', hira: 'し', kata: 'シ', origin: '之' },
      { roma: 'su', hira: 'す', kata: 'ス', origin: '寸' },
      { roma: 'se', hira: 'せ', kata: 'セ', origin: '世' },
      { roma: 'so', hira: 'そ', kata: 'ソ', origin: '曽' },
      { roma: 'ta', hira: 'た', kata: 'タ', origin: '太' },
      { roma: 'chi', hira: 'ち', kata: 'チ', origin: '知' },
      { roma: 'tsu', hira: 'つ', kata: 'ツ', origin: '川' },
      { roma: 'te', hira: 'て', kata: 'テ', origin: '天' },
      { roma: 'to', hira: 'と', kata: 'ト', origin: '止' },
      { roma: 'na', hira: 'な', kata: 'ナ', origin: '奈' },
      { roma: 'ni', hira: 'に', kata: 'ニ', origin: '仁' },
      { roma: 'nu', hira: 'ぬ', kata: 'ヌ', origin: '奴' },
      { roma: 'ne', hira: 'ね', kata: 'ネ', origin: '祢' },
      { roma: 'no', hira: 'の', kata: 'ノ', origin: '乃' },
      { roma: 'ha', hira: 'は', kata: 'ハ', origin: '波' },
      { roma: 'hi', hira: 'ひ', kata: 'ヒ', origin: '比' },
      { roma: 'fu', hira: 'ふ', kata: 'フ', origin: '不' },
      { roma: 'he', hira: 'へ', kata: 'ヘ', origin: '部' },
      { roma: 'ho', hira: 'ほ', kata: 'ホ', origin: '保' },
      { roma: 'ma', hira: 'ま', kata: 'マ', origin: '末' },
      { roma: 'mi', hira: 'み', kata: 'ミ', origin: '美' },
      { roma: 'mu', hira: 'む', kata: 'ム', origin: '武' },
      { roma: 'me', hira: 'め', kata: 'メ', origin: '女' },
      { roma: 'mo', hira: 'も', kata: 'モ', origin: '毛' },
      { roma: 'ya', hira: 'や', kata: 'ヤ', origin: '也' },
      { roma: 'yu', hira: 'ゆ', kata: 'ユ', origin: '由' },
      { roma: 'yo', hira: 'よ', kata: 'ヨ', origin: '与' },
      { roma: 'ra', hira: 'ら', kata: 'ラ', origin: '良' },
      { roma: 'ri', hira: 'り', kata: 'リ', origin: '利' },
      { roma: 'ru', hira: 'る', kata: 'ル', origin: '留' },
      { roma: 're', hira: 'れ', kata: 'レ', origin: '礼' },
      { roma: 'ro', hira: 'ろ', kata: 'ロ', origin: '吕' },
      { roma: 'wa', hira: 'わ', kata: 'ワ', origin: '和' },
      { roma: 'wo', hira: 'を', kata: 'ヲ', origin: '远' },
      { roma: 'n', hira: 'ん', kata: 'ン', origin: '' }
    ]
  },
  {
    name: '浊音',
    list: [
      { roma: 'ga', hira: 'が', kata: 'ガ' }, { roma: 'gi', hira: 'ぎ', kata: 'ギ' }, { roma: 'gu', hira: 'ぐ', kata: 'グ' }, { roma: 'ge', hira: 'げ', kata: 'ゲ' }, { roma: 'go', hira: 'ご', kata: 'ゴ' },
      { roma: 'za', hira: 'ざ', kata: 'ザ' }, { roma: 'ji', hira: 'じ', kata: 'ジ' }, { roma: 'zu', hira: 'ず', kata: 'ズ' }, { roma: 'ze', hira: 'ぜ', kata: 'ゼ' }, { roma: 'zo', hira: 'ぞ', kata: 'ゾ' },
      { roma: 'da', hira: 'だ', kata: 'ダ' }, { roma: 'ji', hira: 'ぢ', kata: 'ヂ' }, { roma: 'zu', hira: 'づ', kata: 'ヅ' }, { roma: 'de', hira: 'で', kata: 'デ' }, { roma: 'do', hira: 'ど', kata: 'ド' },
      { roma: 'ba', hira: 'ば', kata: 'バ' }, { roma: 'bi', hira: 'び', kata: 'ビ' }, { roma: 'bu', hira: 'ぶ', kata: 'ブ' }, { roma: 'be', hira: 'べ', kata: 'ベ' }, { roma: 'bo', hira: 'ぼ', kata: 'ボ' }
    ]
  },
  {
    name: '半浊音',
    list: [
      { roma: 'pa', hira: 'ぱ', kata: 'パ' }, { roma: 'pi', hira: 'ぴ', kata: 'ピ' }, { roma: 'pu', hira: 'ぷ', kata: 'プ' }, { roma: 'pe', hira: 'ぺ', kata: 'ペ' }, { roma: 'po', hira: 'ぽ', kata: 'ポ' }
    ]
  },
  {
    name: '拗音',
    list: [
      { roma: 'kya', hira: 'きゃ', kata: 'キャ' }, { roma: 'kyu', hira: 'きゅ', kata: 'キュ' }, { roma: 'kyo', hira: 'きょ', kata: 'キョ' },
      { roma: 'sha', hira: 'しゃ', kata: 'シャ' }, { roma: 'shu', hira: 'しゅ', kata: 'シュ' }, { roma: 'sho', hira: 'しょ', kata: 'ショ' },
      { roma: 'cha', hira: 'ちゃ', kata: 'チャ' }, { roma: 'chu', hira: 'ちゅ', kata: 'チュ' }, { roma: 'cho', hira: 'ちょ', kata: 'チョ' },
      { roma: 'nya', hira: 'にゃ', kata: 'ニャ' }, { roma: 'nyu', hira: 'にゅ', kata: 'ニュ' }, { roma: 'nyo', hira: 'にょ', kata: 'ニョ' },
      { roma: 'hya', hira: 'ひゃ', kata: 'ヒャ' }, { roma: 'hyu', hira: 'ひゅ', kata: 'ヒュ' }, { roma: 'hyo', hira: 'ひょ', kata: 'ヒョ' },
      { roma: 'mya', hira: 'みゃ', kata: 'ミャ' }, { roma: 'myu', hira: 'みゅ', kata: 'ミュ' }, { roma: 'myo', hira: 'みょ', kata: 'ミョ' },
      { roma: 'rya', hira: 'りゃ', kata: 'リャ' }, { roma: 'ryu', hira: 'りゅ', kata: 'リュ' }, { roma: 'ryo', hira: 'りょ', kata: 'リョ' },
      { roma: 'gya', hira: 'ぎゃ', kata: 'ギャ' }, { roma: 'gyu', hira: 'ぎゅ', kata: 'ギュ' }, { roma: 'gyo', hira: 'ぎょ', kata: 'ギョ' },
      { roma: 'ja', hira: 'じゃ', kata: 'ジャ' }, { roma: 'ju', hira: 'じゅ', kata: 'ジュ' }, { roma: 'jo', hira: 'じょ', kata: 'ジョ' },
      { roma: 'bya', hira: 'びゃ', kata: 'ビャ' }, { roma: 'byu', hira: 'びゅ', kata: 'ビュ' }, { roma: 'byo', hira: 'びょ', kata: 'ビョ' },
      { roma: 'pya', hira: 'ぴゃ', kata: 'ピャ' }, { roma: 'pyu', hira: 'ぴゅ', kata: 'ピュ' }, { roma: 'pyo', hira: 'ぴょ', kata: 'ピョ' }
    ]
  }
];

// 展示一览表
function renderKanaTable() {
  const tablePage = document.getElementById('table-page');
  tablePage.innerHTML = '';
  const kanaTableDiv = document.createElement('div');
  kanaTableDiv.className = 'kana-table';
  kanaGroups.forEach(group => {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'kana-group';
    groupDiv.innerHTML = `<h3>${group.name}</h3>`;
    const listDiv = document.createElement('div');
    listDiv.className = 'kana-list';
    // 统一处理每行假名渲染和点击事件绑定
    let rowSize;
    let rows = [];
    if (group.name === '清音') {
      rowSize = 5;
      rows = [
        group.list.slice(0, 5),   // a i u e o
        group.list.slice(5, 10),  // ka ki ku ke ko
        group.list.slice(10, 15), // sa shi su se so
        group.list.slice(15, 20), // ta chi tsu te to
        group.list.slice(20, 25), // na ni nu ne no
        group.list.slice(25, 30), // ha hi fu he ho
        group.list.slice(30, 35), // ma mi mu me mo
        // ya行，补空白
        [
          group.list[35], // ya
          {roma:'',hira:'',kata:''}, // (i)
          group.list[36], // yu
          {roma:'',hira:'',kata:''}, // (e)
          group.list[37]  // yo
        ],
        group.list.slice(38, 43), // ra ri ru re ro
        // wa行，补空白
        [
          group.list[43], // wa
          {roma:'',hira:'',kata:''},
          {roma:'',hira:'',kata:''},
          {roma:'',hira:'',kata:''},
          group.list[44] // wo
        ],
        // n行，补空白
        [
          group.list[45], // n
          {roma:'',hira:'',kata:''},
          {roma:'',hira:'',kata:''},
          {roma:'',hira:'',kata:''},
          {roma:'',hira:'',kata:''}
        ]
      ];
    } else if (group.name === '拗音') {
      rowSize = 3;
      for (let i = 0; i < group.list.length; i += rowSize) {
        let row = [];
        for (let j = i; j < i + rowSize; j++) {
          let item = group.list[j];
          if (!item) item = {roma:'',hira:'',kata:''};
          row.push(item);
        }
        rows.push(row);
      }
    } else {
      rowSize = 5;
      for (let i = 0; i < group.list.length; i += rowSize) {
        let row = [];
        for (let j = i; j < i + rowSize; j++) {
          let item = group.list[j];
          if (!item) item = {roma:'',hira:'',kata:''};
          row.push(item);
        }
        rows.push(row);
      }
    }
    rows.forEach(row => {
      const rowDiv = document.createElement('div');
      rowDiv.className = 'kana-row';
      row.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'kana-item';
        itemDiv.innerHTML = `<span class="kana-roma">${item.roma}</span><span class="kana-hira">${item.hira}</span><span class="kana-kata">${item.kata}</span>`;
        itemDiv.addEventListener('click', function(e) {
          if (!item.roma && !item.hira && !item.kata) return;
          showKanaDetail(item);
          e.stopPropagation();
        });
        rowDiv.appendChild(itemDiv);
      });
      listDiv.appendChild(rowDiv);
    });
    groupDiv.appendChild(listDiv);
    kanaTableDiv.appendChild(groupDiv);
  });
  tablePage.appendChild(kanaTableDiv);
}

// 练习数据
let practiceType = 'hira';
let score = 0;
let total = 0;
let currentIndex = 0;
let currentList = [];
// 在 hk 模式下记录当前题目显示的是哪种脚本：'hira' 或 'kata'
let currentShownScript = null;

// 单词练习数据（中文意思、假名、日语写法多种可能）
const wordList = [
  { meaning: '机场', kana: 'くうこう', forms: ['空港', 'クウコウ'] },
  { meaning: '问询处', kana: 'あんないじょ', forms: ['案内所', 'インフォメーション'] },
  { meaning: '（货币）兑换', kana: 'りょうがえ', forms: ['両替'] },
  { meaning: '订单，点单', kana: 'ちゅうもん', forms: ['注文'] },
  { meaning: '结账', kana: 'かいけい', forms: ['会計'] },
  { meaning: '支付', kana: 'けっさい', forms: ['決済'] },
  { meaning: '寄存柜', kana: 'コインロッカー', forms: ['コインロッカー'] },
  { meaning: '（办理）入住', kana: 'チェックイン', forms: ['チェックイン'] },
  { meaning: '~天~晚', kana: 'ぱく にち', forms: ['~泊~日', '泊 日', '泊日'] },
  { meaning: '盖饭', kana: 'どん', forms: ['~丼', '丼'] },
  { meaning: '猪排', kana: 'とんかつ', forms: ['豚カツ'] },
  { meaning: '烤串', kana: 'やきとり', forms: ['焼き鳥'] },
  { meaning: '检票口', kana: 'かいさつぐち', forms: ['改札口'] },
  { meaning: '补票机', kana: 'せいさんき', forms: ['精算機'] },
  { meaning: '售票处', kana: 'きっぷうりば', forms: ['切符売り場'] },
];

let wordIndex = 0;
let wordScore = 0;
let wordTotal = 0;

// 弹窗：显示假名详情
let __kanaDetailEscHandler = null;
function showKanaDetail(item) {
  // 移除已有弹窗
  closeKanaDetail();

  const mask = document.createElement('div');
  mask.className = 'kana-detail-mask';
  const popup = document.createElement('div');
  popup.className = 'kana-detail-popup';

  // 关闭按钮
  const closeBtn = document.createElement('div');
  closeBtn.className = 'kana-detail-close';
  closeBtn.textContent = '×';
  closeBtn.addEventListener('click', closeKanaDetail);

  // 内容
  const title = document.createElement('h3');
  title.textContent = '假名详情';

  const mainWrap = document.createElement('div');
  mainWrap.className = 'kana-detail-main';
  const big = document.createElement('div');
  big.className = 'kana-detail-big';
  const hira = document.createElement('span');
  hira.className = 'kana-detail-hira';
  hira.textContent = item.hira || '';
  const kata = document.createElement('span');
  kata.className = 'kana-detail-kata';
  kata.textContent = item.kata || '';
  big.appendChild(hira);
  big.appendChild(kata);

  const roma = document.createElement('div');
  roma.className = 'kana-detail-roma';
  roma.textContent = `罗马音：${item.roma || ''}`;

  const origin = document.createElement('div');
  origin.className = 'kana-detail-origin';
  if (item.origin) {
    origin.textContent = `来源：${item.origin}`;
  } else {
    origin.textContent = '';
  }

  mainWrap.appendChild(big);
  mainWrap.appendChild(roma);
  if (origin.textContent) mainWrap.appendChild(origin);

  popup.appendChild(closeBtn);
  popup.appendChild(title);
  popup.appendChild(mainWrap);

  // 点击遮罩关闭，阻止弹窗内冒泡
  mask.addEventListener('click', closeKanaDetail);
  popup.addEventListener('click', e => e.stopPropagation());
  mask.appendChild(popup);
  document.body.appendChild(mask);
  // 禁止背景滚动
  document.body.style.overflow = 'hidden';

  // ESC 关闭
  __kanaDetailEscHandler = (e) => {
    if (e.key === 'Escape') closeKanaDetail();
  };
  window.addEventListener('keydown', __kanaDetailEscHandler);
}

function closeKanaDetail() {
  const old = document.querySelector('.kana-detail-mask');
  if (old && old.parentNode) old.parentNode.removeChild(old);
  // 恢复背景滚动
  document.body.style.overflow = '';
  if (__kanaDetailEscHandler) {
    window.removeEventListener('keydown', __kanaDetailEscHandler);
    __kanaDetailEscHandler = null;
  }
}

function setPracticeType(type) {
  practiceType = type;
  score = 0;
  total = 0;
  updateScore();
  currentList = kanaGroups[0].list; // 只用清音练习，可扩展
  clearOptions();
  // 单词练习模式特殊显示
  const wordArea = document.getElementById('word-practice');
  const randomKanaEl = document.getElementById('random-kana');
  const optionsDiv = document.getElementById('options');
  const kanaScoreEl = document.getElementById('kana-score');
  const resetBtn = document.getElementById('reset-btn');
  if (type === 'word') {
    wordArea.style.display = '';
    document.getElementById('practice-area').scrollIntoView({behavior:'smooth'});
    wordScore = 0; wordTotal = 0; updateWordScore();
    nextWord();
    // 隐藏平/片假名题干和选项区
    if (randomKanaEl) randomKanaEl.style.display = 'none';
    if (optionsDiv) optionsDiv.style.display = 'none';
    if (kanaScoreEl) kanaScoreEl.style.display = 'none';
    if (resetBtn) resetBtn.style.display = 'none';
  } else {
    if (wordArea) wordArea.style.display = 'none';
    // 显示假名题干和选项区并出题
    if (randomKanaEl) randomKanaEl.style.display = '';
    if (optionsDiv) optionsDiv.style.display = '';
    nextKana();
    if (kanaScoreEl) kanaScoreEl.style.display = '';
    if (resetBtn) resetBtn.style.display = '';
  }
  document.querySelectorAll('.practice-mode button').forEach(btn => btn.classList.remove('active'));
  document.getElementById(type + '-btn').classList.add('active');
}

function nextKana() {
  currentIndex = Math.floor(Math.random() * currentList.length);
  if (practiceType === 'hk') {
    // 随机显示平或片中的一个，让用户选对应另一种
    currentShownScript = Math.random() < 0.5 ? 'hira' : 'kata';
    document.getElementById('random-kana').textContent = currentList[currentIndex][currentShownScript];
  } else {
    currentShownScript = null;
    document.getElementById('random-kana').textContent = currentList[currentIndex][practiceType];
  }
  document.getElementById('result').textContent = '';
  clearOptions();
  // 小延时后生成，避免移动端残留活跃态
  setTimeout(generateOptions, 0);
}

function generateOptions() {
  let options;
  if (practiceType === 'hk') {
    // 选项为另一种脚本（显示平则选片，显示片则选平）
    const targetScript = currentShownScript === 'hira' ? 'kata' : 'hira';
    const correct = currentList[currentIndex][targetScript];
    options = [correct];
    while (options.length < 4) {
      let idx = Math.floor(Math.random() * currentList.length);
      let cand = currentList[idx][targetScript];
      if (!options.includes(cand)) options.push(cand);
    }
    options = options.sort(() => Math.random() - 0.5);
  } else {
    const correct = currentList[currentIndex].roma;
    options = [correct];
    while (options.length < 4) {
      let idx = Math.floor(Math.random() * currentList.length);
      let roma = currentList[idx].roma;
      if (!options.includes(roma)) options.push(roma);
    }
    options = options.sort(() => Math.random() - 0.5);
  }
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.className = 'option-btn';
    btn.onclick = () => checkAnswer(btn, opt);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(btn, selected) {
  let correct;
  if (practiceType === 'hk') {
    const targetScript = currentShownScript === 'hira' ? 'kata' : 'hira';
    correct = currentList[currentIndex][targetScript];
  } else {
    correct = currentList[currentIndex].roma;
  }
  total++;
  document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
  btn.classList.add('selected');
  if (selected === correct) {
    score++;
    document.getElementById('result').textContent = '正确！';
    document.getElementById('result').style.color = 'green';
    updateScore();
    setTimeout(() => {
      clearOptions();
      nextKana();
    }, 600);
  } else {
    document.getElementById('result').textContent = `错误，正确答案是：${correct}`;
    document.getElementById('result').style.color = 'red';
    updateScore();
    setTimeout(() => {
      clearOptions();
      nextKana();
    }, 1200);
  }
}

function updateScore() {
  document.getElementById('score').textContent = score;
  document.getElementById('total').textContent = total;
}

function clearOptions() {
  const optionsDiv = document.getElementById('options');
  if (optionsDiv) optionsDiv.innerHTML = '';
}

// ---------- 单词练习相关 ----------
function normalizeKana(input) {
  // 简单标准化：去空格，转换大写片假名为平假名用于比较
  if (!input) return '';
  input = input.trim();
  // 将片假名转换为平假名（简单映射）
  const kataStart = 0x30A0;
  const hiraStart = 0x3040;
  let res = '';
  for (let ch of input) {
    const code = ch.charCodeAt(0);
    if (code >= 0x30A1 && code <= 0x30F6) {
      // katakana -> hiragana
      res += String.fromCharCode(code - 0x60);
    } else {
      res += ch;
    }
  }
  return res;
}

function nextWord() {
  // 随机选择一个单词
  wordIndex = Math.floor(Math.random() * wordList.length);
  const w = wordList[wordIndex];
  document.getElementById('word-meaning').textContent = w.meaning;
  document.getElementById('word-kana-input').value = '';
  document.getElementById('word-kanji-input').value = '';
  document.getElementById('word-result').textContent = '';
}

function updateWordScore() {
  document.getElementById('word-score').textContent = wordScore;
  document.getElementById('word-total').textContent = wordTotal;
}

function checkWordAnswer() {
  const kanaInput = document.getElementById('word-kana-input').value || '';
  const kanjiInput = document.getElementById('word-kanji-input').value || '';
  const w = wordList[wordIndex];
  wordTotal++;
  let okKana = false;
  let okKanji = false;
  // 标准化比较假名：把片假名转成平假名再比较（并忽略大小写与空格）
  const inKana = normalizeKana(kanaInput).replace(/\s+/g,'');
  const targetKana = normalizeKana(w.kana).replace(/\s+/g,'');
  if (inKana && inKana === targetKana) okKana = true;
  // 日语写法比较：直接比对 forms 中任一项（忽略空格）
  const inKanji = kanjiInput.replace(/\s+/g,'');
  for (let f of w.forms) {
    if (!f) continue;
    if (inKanji && inKanji === f) { okKanji = true; break; }
    // 也接受假名形式作为日语写法（有些 forms 是片假名）
    if (normalizeKana(inKanji) === normalizeKana(f)) { okKanji = true; break; }
  }
  const resultDiv = document.getElementById('word-result');
  if (okKana && okKanji) {
    wordScore++;
    resultDiv.textContent = '正确！假名和日语写法都正确。';
    resultDiv.style.color = 'green';
  } else if (okKana && !okKanji) {
    resultDiv.textContent = `假名正确，但日语写法不正确，参考写法：${w.forms.join(' / ')}`;
    resultDiv.style.color = 'orange';
  } else if (!okKana && okKanji) {
    resultDiv.textContent = `日语写法正确，但假名不正确，参考假名：${w.kana}`;
    resultDiv.style.color = 'orange';
  } else {
    resultDiv.textContent = `假名和日语写法均不正确，参考：${w.kana} ， ${w.forms.join(' / ')}`;
    resultDiv.style.color = 'red';
  }
  updateWordScore();
  // 不自动跳转下一题：结果保持显示，用户可点击“跳过/下一题”继续
}

// 清空重来
function resetPractice() {
  score = 0;
  total = 0;
  updateScore();
  document.getElementById('result').textContent = '';
  clearOptions();
  nextKana();
}

// 页面切换
function showPage(page) {
  document.getElementById('table-page').style.display = (page === 'table') ? '' : 'none';
  document.getElementById('practice-page').style.display = (page === 'practice') ? '' : 'none';
}

// 初始化
// --------- 单词小卡与测试（解析 word.tex） ---------
async function loadWordsFromTex() {
  try {
    const resp = await fetch('assets/word.tex');
    const tex = await resp.text();
    return parseLongtables(tex);
  } catch (e) {
    console.error('加载 word.tex 失败', e);
    return [];
  }
}

function parseLongtables(tex) {
  const lines = tex.split(/\r?\n/);
  const words = [];
  let currentLesson = '全部';
  for (let line of lines) {
    const lessonMatch = line.match(/\\subsubsection\{([^}]+)\}/);
    if (lessonMatch) {
      currentLesson = lessonMatch[1];
      continue;
    }
    // match row: data lines ending with \\ \hline or \\ \hline\hline
    const rowMatch = line.match(/^\s*([^&]+?)\s*&\s*([^&]+?)\s*&\s*([^&]+?)\s*&\s*([^&]+?)\s*&\s*(.*?)\\ \\hline(?:\\hline)?/);
    if (rowMatch) {
      const kanji = rowMatch[1].trim();
      const kana = rowMatch[2].trim();
      const meaning = rowMatch[3].trim();
      const pos = rowMatch[4].trim();
      const notes = rowMatch[5].trim();
      // 跳过表头行
      const isHeader = /漢字表示/.test(kanji) || /假名表示/.test(kana) || /含义/.test(meaning);
      if (isHeader) continue;
      words.push({ lesson: currentLesson, kanji, kana, meaning, pos, notes });
    }
  }
  return words;
}

function setupTabs() {
  const buttons = document.querySelectorAll('[data-tab]');
  const views = {
    table: document.getElementById('table-page'),
    practice: document.getElementById('practice-page'),
    cards: document.getElementById('cards-view'),
    quiz: document.getElementById('quiz-view'),
    grammar: document.getElementById('grammar-view')
  };
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      Object.values(views).forEach(v => v.classList.add('hidden'));
      const tab = btn.dataset.tab;
      if (views[tab]) views[tab].classList.remove('hidden');
      if (tab === 'grammar') {
        loadGrammar();
      }
    });
  });
  // 默认激活 一览表
  const def = document.querySelector('[data-tab="table"]');
  if (def) def.click();
}

// 懒加载语法：直接把 grammar.tex 原文读入 <pre>
async function loadGrammar() {
  const loading = document.getElementById('grammar-loading');
  const pre = document.getElementById('grammar-content');
  const cont = document.getElementById('grammar-rendered');
  if (!cont) return;
  // 若已经加载过则不再重复请求
  if (cont.dataset.loaded === '1') return;
  try {
    if (loading) loading.style.display = '';
    const resp = await fetch('assets/grammar.tex');
    const tex = await resp.text();
    // 解析 + 渲染为 HTML，同时保留原文在隐藏的 <pre>
    if (pre) pre.textContent = tex;
    const html = parseGrammarTexToHtml(tex);
    cont.innerHTML = html;
    cont.dataset.loaded = '1';
  } catch (e) {
    console.error('加载 grammar.tex 失败', e);
    if (cont) cont.innerHTML = '<div style="color:#c00">加载失败，请稍后重试。</div>';
  } finally {
    if (loading) loading.style.display = 'none';
  }
}

// 将 grammar.tex 的常用结构转换为 HTML（标题、列表、粗体、分隔线、表格）
function parseGrammarTexToHtml(tex) {
  let s = tex || '';
  // 去掉文档结束标记
  s = s.replace(/\n?\\end\{document\}\s*$/,'');
  // 表格：tabularx -> HTML table（使用手动匹配，避免列格式的嵌套花括号破坏正则）
  s = replaceTabularxBlocks(s);
  // itemize 列表
  s = s.replace(/\\begin\{itemize\}([\s\S]*?)\\end\{itemize\}/g, (m, body) => {
    // 将 \item 分割成条目
    const items = body.split(/\\item\s*/).map(t => t.trim()).filter(t => t);
    if (!items.length) return '';
    const lis = items.map(it => `<li>${inlineTexToHtml(it)}</li>`).join('');
    return `<ul>${lis}</ul>`;
  });
  // 标题：section -> h2, subsection -> h3, subsubsection -> h4, paragraph -> h5, subparagraph -> h6
  s = s.replace(/\\section\{([^}]*)\}/g, '<h2>$1</h2>');
  s = s.replace(/\\subsection\{([^}]*)\}/g, '<h3>$1</h3>');
  s = s.replace(/\\subsubsection\{([^}]*)\}/g, '<h4>$1</h4>');
  s = s.replace(/\\paragraph\{([^}]*)\}/g, '<h5>$1</h5>');
  s = s.replace(/\\subparagraph\{([^}]*)\}/g, '<h6>$1</h6>');
  // 横线 "---" 独立一行
  s = s.replace(/^\s*---\s*$/gm, '<hr>');
  // 行内：粗体、\quad 换为空格
  s = inlineTexToHtml(s);
  // 将 LaTeX 行末的 \\ 视为换行
  s = s.replace(/\\\\/g, '<br>');
  // 不对普通换行进行全局替换，避免干扰已生成的 HTML 结构
  return s;
}

function inlineTexToHtml(s) {
  if (!s) return '';
  let t = s;
  // 	extbf{...}
  t = t.replace(/\\textbf\{([^}]*)\}/g, '<strong>$1</strong>');
  // \quad -> 空格
  t = t.replace(/\\quad/g, '&emsp;');
  // 多余的花括号（仅去掉成对的包裹符，不影响文本中的花括号）
  t = t.replace(/\{\}/g, '');
  return t;
}

function texTabularToHtml(body) {
  if (!body) return '';
  let b = body;
  // 移除行色、横线提示
  b = b.replace(/\r?\n?\\rowcolor\{[^}]*\}.*\n?/g, '');
  b = b.replace(/\\hline(?:\\hline)?/g, '');
  // 处理单元格中的内嵌 tabular
    // 嵌套安全：去掉所有 \begin{tabular}{...} ... \end{tabular} 外壳，仅保留内部内容，并将 \\\\ 渲染为 <br>
    b = stripTabularEnvs(b);
  // 去除（并展开）任意嵌套层级的 tabular 环境，保留内容并把 \\\\ 转为 <br>
  function stripTabularEnvs(s) {
    const begin = '\\begin{tabular}';
    const end = '\\end{tabular}';
    let out = '';
    let i = 0;
    while (i < s.length) {
      const start = s.indexOf(begin, i);
      if (start === -1) { out += s.slice(i); break; }
      // 追加 begin 之前的文本
      out += s.slice(i, start);
      // 跳过环境名后的列格式：形如 `}{...}` 的下一对花括号
      let specStart = s.indexOf('{', start + begin.length);
      if (specStart === -1) { out += s.slice(start); break; }
      const specEnd = findMatchingBrace(s, specStart);
      if (specEnd === -1) { out += s.slice(start); break; }
      // 从列格式后面开始寻找配对的 \end{tabular}
      let scan = specEnd + 1;
      let depth = 1;
      while (scan < s.length && depth > 0) {
        const nextBegin = s.indexOf(begin, scan);
        const nextEnd = s.indexOf(end, scan);
        if (nextEnd === -1) break; // 不完整，终止
        if (nextBegin !== -1 && nextBegin < nextEnd) {
          // 新的嵌套 begin，深度 +1
          // 跳过其列格式
          let spec2 = s.indexOf('{', nextBegin + begin.length);
          if (spec2 === -1) { scan = nextBegin + begin.length; depth++; continue; }
          const spec2End = findMatchingBrace(s, spec2);
          if (spec2End === -1) { scan = nextBegin + begin.length; depth++; continue; }
          depth++;
          scan = spec2End + 1;
        } else {
          // 遇到一个 end，深度 -1
          depth--;
          if (depth === 0) {
              // 提取内部内容（列格式后到 end 之前），并处理内层 tabular
              const inner = s.slice(specEnd + 1, nextEnd);
              const innerProcessed = stripTabularEnvs(inner);
              out += innerProcessed.replace(/\\\\/g, '<br>');
            i = nextEnd + end.length;
            break;
          }
          scan = nextEnd + end.length;
        }
      }
      if (depth > 0) { // 未能找到匹配 end，输出剩余并结束
        out += s.slice(start);
        break;
      }
    }
    return out;
  }
  // 按行分割：以 "\\" 作为行结束（可能后跟空白）
  const rows = b.split(/\\\\\s*/).map(r => r.trim()).filter(r => r);
  if (!rows.length) return '';
  const parsed = rows.map(r => r.split(/\s*&\s*/).map(c => inlineTexToHtml(c.trim())));
  const colCount = Math.max(...parsed.map(r => r.length));
  // 判断首行是否表头：包含常见表头关键词时才作为表头
  const headerKeywords = /(词典形|简体|敬体|过去|非过去|词尾|词干|例句|动词|動詞|漢字表示|假名表示|含义|品词|词性|形容词|动 词|动\s*词)/;
  let thead = '';
  let dataRows = parsed.slice();
  if (parsed.length && parsed[0].some(c => headerKeywords.test(c))) {
    const head = dataRows.shift();
    while (head.length < colCount) head.push('');
    thead = '<thead><tr>' + head.map(h => `<th>${h}</th>`).join('') + '</tr></thead>';
  }
  // 生成主体
  const tbodyRows = dataRows.map(r => {
    const cells = r.slice();
    while (cells.length < colCount) cells.push('');
    return '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
  }).join('');
  const tbody = `<tbody>${tbodyRows}</tbody>`;
  return `<table class="grammar-table">${thead}${tbody}</table>`;
}

// 工具：在字符串中找到从 openIndex 开始的匹配右花括号位置，支持嵌套
function findMatchingBrace(str, openIndex) {
  let depth = 0;
  for (let i = openIndex; i < str.length; i++) {
    const ch = str[i];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

// 用安全的方式替换所有 tabularx 环境为 HTML 表格
function replaceTabularxBlocks(s) {
  const beginTag = '\\begin{tabularx}';
  const endTag = '\\end{tabularx}';
  let out = '';
  let i = 0;
  while (i < s.length) {
    const start = s.indexOf(beginTag, i);
    if (start === -1) { out += s.slice(i); break; }
    out += s.slice(i, start);
    // 定位第一个 {（宽度参数）
    let j = s.indexOf('{', start + beginTag.length);
    if (j === -1) { out += s.slice(start); break; }
    const jEnd = findMatchingBrace(s, j);
    if (jEnd === -1) { out += s.slice(start); break; }
    // 第二个 {（列格式参数）
    let k = s.indexOf('{', jEnd + 1);
    if (k === -1) { out += s.slice(start); break; }
    const kEnd = findMatchingBrace(s, k);
    if (kEnd === -1) { out += s.slice(start); break; }
    // 表体从 kEnd+1 开始，直到 endTag
    const bodyStart = kEnd + 1;
    const end = s.indexOf(endTag, bodyStart);
    if (end === -1) { out += s.slice(start); break; }
    const body = s.slice(bodyStart, end);
    out += texTabularToHtml(body);
    i = end + endTag.length;
  }
  return out;
}

function populateLessonFilters(words) {
  const lessons = Array.from(new Set(words.map(w => w.lesson)));
  const filter = document.getElementById('lesson-filter');
  const quizLesson = document.getElementById('quiz-lesson');
  if (filter) {
    filter.innerHTML = '<option value="全部">全部</option>' + lessons.map(l => `<option value="${l}">${l}</option>`).join('');
    filter.addEventListener('change', () => renderCards(words));
  }
  if (quizLesson) {
    quizLesson.innerHTML = '<option value="全部">全部</option>' + lessons.map(l => `<option value="${l}">${l}</option>`).join('');
  }
}

function renderCards(words) {
  const container = document.getElementById('cards');
  if (!container) return;
  // 数据加载占位处理
  const loadingEl = document.getElementById('cards-loading');
  if (loadingEl) loadingEl.style.display = 'none';
  const lessonSel = document.getElementById('lesson-filter');
  const q = (document.getElementById('search')?.value || '').trim();
  let list = words;
  const lesson = lessonSel?.value || '全部';
  if (lesson && lesson !== '全部') list = list.filter(w => w.lesson === lesson);
  if (q) {
    const qlower = q.toLowerCase();
    list = list.filter(w => (w.kanji + w.kana + w.meaning).toLowerCase().includes(qlower));
  }
  container.innerHTML = '';
  list.forEach(w => {
    const card = document.createElement('div');
    card.className = 'card';
    // 初始：显示 kanji、kana、pos（不显示中文释义、不显示notes）
    const titleText = w.kanji || w.kana || '';
    const kanaText = w.kana || '';
    const posText = w.pos || '';
    card.innerHTML = `
      <div class="title">${titleText}</div>
      <div class="subtitle">${kanaText}</div>
      <div class="meaning">${posText}</div>
    `;
    // 点击后：显示 kanji、kana、meaning（中文释义）
    let flipped = false;
    card.addEventListener('click', () => {
      flipped = !flipped;
      const meaningEl = card.querySelector('.meaning');
      meaningEl.textContent = flipped ? (w.meaning || '') : (posText);
    });
    container.appendChild(card);
  });
}

function setupSearch(words) {
  const input = document.getElementById('search');
  if (input) input.addEventListener('input', () => renderCards(words));
}

// Quiz
function setupQuiz(words) {
  const startBtn = document.getElementById('start-quiz');
  if (!startBtn) return;
  startBtn.addEventListener('click', () => startQuiz(words));
}

let quizState = { list: [], idx: 0, score: 0, total: 0, type: 'meaning' };

function startQuiz(words) {
  let type = document.getElementById('quiz-type')?.value || 'meaning';
  const lesson = document.getElementById('quiz-lesson')?.value || '全部';
  let list = words;
  if (lesson && lesson !== '全部') list = list.filter(w => w.lesson === lesson);
  // 过滤空项
  list = list.filter(w => w.kana && w.meaning);
  // 打乱
  list = list.sort(() => Math.random() - 0.5).slice(0, 20);
  // 随机模式：每题随机一种类型
  if (type === 'random') type = ['meaning', 'kana', 'kanji', 'spelling'];
  quizState = { list, idx: 0, score: 0, total: 0, type };
  document.getElementById('quiz-area').classList.remove('hidden');
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const qEl = document.getElementById('quiz-question');
  const optsEl = document.getElementById('quiz-options');
  const inputWrap = document.getElementById('quiz-input');
  const spellInput = document.getElementById('spell-input');
  const submitSpell = document.getElementById('submit-spell');
  const feedbackEl = document.getElementById('quiz-feedback');
  let { list, idx, type } = quizState;
  if (!list[idx]) return;
  // 若为随机模式，当前题型随机选择
  if (Array.isArray(type)) {
    const types = type;
    type = types[Math.floor(Math.random() * types.length)];
    quizState.type = types; // 保留数组以便下一题继续随机
  }
  const w = list[idx];
  document.getElementById('quiz-progress').textContent = `${idx + 1}/${list.length}`;
  document.getElementById('quiz-score').textContent = `得分：${quizState.score}/${quizState.total}`;
  optsEl.innerHTML = '';
  inputWrap.classList.add('hidden');
  if (feedbackEl) { feedbackEl.textContent = ''; feedbackEl.style.color = ''; }
  if (type === 'meaning') {
    qEl.textContent = `日语：${w.kanji}`;
    const options = sampleOptions(list, w.meaning, x => x.meaning);
    options.forEach(opt => appendOption(optsEl, opt, w.meaning));
  } else if (type === 'kana') {
    qEl.textContent = `日语汉字：${w.kanji || w.meaning}`;
    const options = sampleOptions(list, w.kana, x => x.kana);
    options.forEach(opt => appendOption(optsEl, opt, w.kana));
  } else if (type === 'kanji') {
    qEl.textContent = `假名：${w.kana}`;
    const options = sampleOptions(list, w.kanji || w.meaning, x => x.kanji || x.meaning);
    options.forEach(opt => appendOption(optsEl, opt, w.kanji || w.meaning));
  } else {
    qEl.textContent = `请拼写假名：${w.meaning}`;
    inputWrap.classList.remove('hidden');
    spellInput.value = '';
    submitSpell.onclick = () => checkSpell(spellInput.value, w);
  }
}

function sampleOptions(list, correct, picker) {
  const options = new Set([correct]);
  while (options.size < 4) {
    const cand = picker(list[Math.floor(Math.random() * list.length)]);
    options.add(cand);
  }
  return Array.from(options).sort(() => Math.random() - 0.5);
}

function appendOption(container, text, correct) {
  const div = document.createElement('div');
  div.className = 'option';
  div.textContent = text;
  div.onclick = () => checkChoice(div, text, correct);
  container.appendChild(div);
}

function nextQuiz() {
  quizState.idx++;
  if (quizState.idx >= quizState.list.length) {
    document.getElementById('quiz-question').textContent = '测试结束！';
    document.getElementById('quiz-options').innerHTML = '';
    document.getElementById('quiz-input').classList.add('hidden');
    return;
  }
  renderQuizQuestion();
}

function checkChoice(node, selected, correct) {
  quizState.total++;
  if (selected === correct) {
    quizState.score++;
    node.classList.add('correct');
  } else {
    node.classList.add('wrong');
  }
  document.getElementById('quiz-score').textContent = `得分：${quizState.score}/${quizState.total}`;
  // 禁用所有选项
  document.querySelectorAll('.option').forEach(o => o.style.pointerEvents = 'none');
  setTimeout(nextQuiz, 700);
}

function checkSpell(input, w) {
  quizState.total++;
  const inText = (input || '').trim();
  const kanaOk = normalizeKana(inText) === normalizeKana((w.kana || '').trim());
  // 汉字/书写正确：直接匹配 kanji（或若缺失则中文提示不作为匹配）；兼容与 forms 中可能存在的片假名写法
  const kanjiTarget = (w.kanji || '').trim();
  let kanjiOk = false;
  if (kanjiTarget && inText.replace(/\s+/g,'') === kanjiTarget.replace(/\s+/g,'')) kanjiOk = true;
  if (Array.isArray(w.forms)) {
    for (const f of w.forms) {
      if (!f) continue;
      const fClean = (f || '').trim();
      if (inText.replace(/\s+/g,'') === fClean.replace(/\s+/g,'')) { kanjiOk = true; break; }
      if (normalizeKana(inText) === normalizeKana(fClean)) { kanjiOk = true; break; }
    }
  }
  if (kanaOk || kanjiOk) {
    quizState.score++;
    document.getElementById('quiz-input').classList.add('correct');
    const fb = document.getElementById('quiz-feedback');
    if (fb) { fb.textContent = '正确！'; fb.style.color = 'green'; }
  } else {
    document.getElementById('quiz-input').classList.add('wrong');
    const fb = document.getElementById('quiz-feedback');
    if (fb) {
      const ref = `${w.kana}${w.kanji ? ' / ' + w.kanji : ''}`;
      fb.textContent = `错误，参考：${ref}`;
      fb.style.color = 'red';
    }
  }
  document.getElementById('quiz-score').textContent = `得分：${quizState.score}/${quizState.total}`;
  setTimeout(() => {
    document.getElementById('quiz-input').classList.remove('correct', 'wrong');
    const fb = document.getElementById('quiz-feedback');
    if (fb) { fb.textContent = ''; fb.style.color = ''; }
    nextQuiz();
  }, 600);
}

window.onload = async function() {
  // 初始化四个视图
  setupTabs();
  // 渲染五十音一览表与假名练习初始
  renderKanaTable();
  setPracticeType('hira');
  // 加载并渲染单词相关视图
  const loadingEl = document.getElementById('cards-loading');
  const cardsEl = document.getElementById('cards');
  if (loadingEl) loadingEl.style.display = '';
  if (cardsEl) cardsEl.style.display = 'none';
  const words = await loadWordsFromTex();
  populateLessonFilters(words);
  setupSearch(words);
  renderCards(words);
  setupQuiz(words);
  // 加载完成后显示卡片容器
  if (cardsEl) cardsEl.style.display = '';
};
