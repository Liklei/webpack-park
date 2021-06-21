// babel转换步骤：ES6代码输入 ==》 @babel/parser进行解析 ==》 得到AST==》 plugin用babel-traverse对AST树进行遍历转译 ==》 得到新的AST树==》 用babel-generator通过AST树生成ES5代码


// SpiderMonkey：https://developer.mozilla.org/zh-CN/docs/Mozilla/Projects/SpiderMonkey/Parser_API
// 工具：recast、Acorn