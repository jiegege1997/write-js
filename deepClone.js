const target = {
  field1: 1,
  field2: undefined,
  field3: {
      child: 'child',
      obj: {
        name:'hjj'
      }
  },
  field4: [2, 4, 8]
};
target.target = target;
//为什么使用WeakMap() 键必须是对象 且是弱引用的
//我们要拷贝的对象非常庞大时，使用Map会对内存造成非常大的额外消耗，
//而且我们需要手动清除Map的属性才能释放这块内存，而WeakMap会帮我们巧妙化解这个问题。
//WeakMap是弱引用类型, 垃圾回收机制会帮我们自动回收。
function deepClone(target, map = new WeakMap()) {
  if(typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {}
    if(map.has(target)) {
      return map.get(target)
    }
    map.set(target, cloneTarget)
    for(const key in target) {
      cloneTarget[key] = deepClone(target[key], map)
    }
    return cloneTarget
  } else {
    return target
  }
}

console.log('====================================');
console.log(deepClone(target));
console.log('====================================');