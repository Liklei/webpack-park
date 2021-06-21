const fs = require('fs');
const recast = require('recast'); // AST 查看工具
const {variableDeclaration, variableDeclarator, functionExpression} = recast.types.builders

// 对方法语句进行查看（语法构成）
const code =
  `
  function   add(a, b)   {
    return a + b
  }
  `
  const ast = recast.parse(code);
  const add  = ast.program.body[0];

  // 创建AST JSON文佳
  fs.unlinkSync('paser.json');
  fs.writeFile('paser.json', JSON.stringify(add), 'utf8', function(err) {
    console.log('%c 操作完成', 'color: #8B008B');
  }) 

// 将准备好的组件置入模具，并组装回原来的ast对象。
ast.program.body[0] = variableDeclaration("let", [
  variableDeclarator(add.id, functionExpression(
    null, // Anonymize the function expression.
    add.params,
    add.body
  ))
]);

//将AST对象重新转回可以阅读的代码
const output = recast.print(ast).code;

console.log(output);