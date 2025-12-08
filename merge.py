# function parseLongtables(tex) {
#   const lines = tex.split(/\r?\n/);
#   const words = [];
#   let currentLesson = '全部';
#   for (let line of lines) {
#     const lessonMatch = line.match(/\\subsubsection\{([^}]+)\}/);
#     if (lessonMatch) {
#       currentLesson = lessonMatch[1];
#       continue;
#     }
#     // match row: data lines ending with \\ \hline or \\ \hline\hline
#     const rowMatch = line.match(/^\s*([^&]+?)\s*&\s*([^&]+?)\s*&\s*([^&]+?)\s*&\s*([^&]+?)\s*&\s*(.*?)\\ \\hline(?:\\hline)?/);
#     if (rowMatch) {
#       const kanji = rowMatch[1].trim();
#       const kana = rowMatch[2].trim();
#       const meaning = rowMatch[3].trim();
#       const pos = rowMatch[4].trim();
#       const notes = rowMatch[5].trim();
#       // 跳过表头行
#       const isHeader = /漢字表示/.test(kanji) || /假名表示/.test(kana) || /含义/.test(meaning);
#       if (isHeader) continue;
#       words.push({ lesson: currentLesson, kanji, kana, meaning, pos, notes });
#     }
#   }
#   return words;
# }
import re

with open('assets/word.tex', 'r', encoding='utf-8') as f:
    tex_content = f.read()

def parse_longtables(tex):
    lines = tex.splitlines()
    words = []
    current_lesson = '全部'
    for line in lines:
        lesson_match = re.search(r'\\subsubsection\{([^}]+)\}', line)
        if lesson_match:
            current_lesson = lesson_match.group(1)
            continue
        # match row: data lines ending with \\ \hline or \\ \hline\hline
        row_match = re.match(r'^\s*([^&]+?)\s*&\s*([^&]+?)\s*&\s*([^&]+?)\s*&\s*([^&]+?)\s*&\s*(.*?)\\ \\hline(?:\\hline)?', line)
        if row_match:
            kanji = row_match.group(1).strip()
            kana = row_match.group(2).strip()
            meaning = row_match.group(3).strip()
            pos = row_match.group(4).strip()
            notes = row_match.group(5).strip()
            # 跳过表头行
            is_header = re.search(r'漢字表示', kanji) or re.search(r'假名表示', kana) or re.search(r'含义', meaning)
            if is_header:
                continue
            words.append({
                'lesson': current_lesson,
                'kanji': kanji,
                'kana': kana,
                'meaning': meaning,
                'pos': pos,
                'notes': notes
            })
    return words

result = ""

parsed_words = parse_longtables(tex_content)
for word in parsed_words:
    if word['lesson'] == '其他常见外来词':
        continue
    if word['lesson'] == '课本内外来词':
        result += word['kana'].replace('～', '') + "\n"
        continue
    result += word['kanji'].replace('～', '') + "\n"
with open('assets/word_list.txt', 'w', encoding='utf-8') as f:
    f.write(result)
    