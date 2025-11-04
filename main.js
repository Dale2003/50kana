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
  { meaning: '烤串', kana: 'やきとり', forms: ['焼き鳥'] }
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
  // 延时下一题以便用户看提示
  setTimeout(() => {
    document.getElementById('word-result').textContent = '';
    nextWord();
  }, 1200);
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
window.onload = function() {
  renderKanaTable();
  showPage('table');
  setPracticeType('hira');
};
