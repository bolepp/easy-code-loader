function warning (num) {
    var arr = [
      '[easy-code-loader: Error] The configuration rule of webpack is not allowed! -> https://github.com/bolepp/easy-code-loader',
      '[easy-code-loader: Error] 设置的options中的unit不在允许范围',
         
    ];
    throw new Error(arr[num]);
  }

  module.exports = warning;