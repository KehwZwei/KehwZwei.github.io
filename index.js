function choose(names) {
  const result = {}
  let chosen
  let max = 0
  for (var a = 0; a < 100; a++){
    const name = names[Math.floor(Math.random() * 8)]
    if(!result[name]){
      result[name] = 1
    }
    else{
      max = Math.max(++result[name], max)
      if (max === result[name]) {
        chosen = name
      }
    }
  }
  
  console.log(result)
  return chosen
}

document.body.innerHTML = `今日幸运观众>>> ${choose(["徐俊", "王也夫", "陈扬", "孙景", "柯和威", "罗勇", "周田涛", "吕伟彬"])} <<<`