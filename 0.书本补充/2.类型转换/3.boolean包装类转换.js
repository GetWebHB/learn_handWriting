// 0 '' NAN underfined null -> false 其他的都为true

// true 它返回了一个bool的包装类， 对象的bool都为true，js出于性能考虑
console.log(Boolean(new Boolean(false)));
