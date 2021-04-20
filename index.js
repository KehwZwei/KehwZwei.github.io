function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function showLast(chosen) {
  document.body.innerHTML = `<span style="font-size: 40px;top: calc(50% - 20px);position: absolute;left: calc(50% - 20px);">你今天已经Roll过了<br />吃>>> ${chosen} <<<</span>`
}

function show(chosen) {
  document.body.innerHTML = `<span style="font-size: 40px;top: calc(50% - 20px);position: absolute;left: calc(50% - 20px);">吃>>> ${chosen} <<<</span>`
}

async function choose(names) {
  const result = {}
  let chosen
  let max = 0
  for (var a = 0; a < 100; a++){
    const name = names[Math.floor(Math.random() * names.length)]
    show(name)
    if(!result[name]){
      result[name] = 1
    }
    else{
      max = Math.max(++result[name], max)
      if (max === result[name]) {
        chosen = name
      }
    }
    await sleep(100)
  }
  
  return chosen
}

const now = new Date()
const key = now.toDateString()
const lastChosen = localStorage.getItem(key)

if (lastChosen) {
  showLast(lastChosen)
} else {
  choose(["黄焖鸡", "傲椒小面", "KFC", "麦当劳", "乐中乐", "达美乐", "牛排", "羊肉锅", "猪脚饭", "红烧牛肉面", "冒菜", "汉堡王", "烤鱼", "青花椒鱼", "周渝"]).then(chosen => {
    show(chosen)

    localStorage.setItem(key, chosen)
  })
}