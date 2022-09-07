const map = new Map(
    [ ['a', 1] ]
)
console.log(map)                // Map(1) { 'a' => 1 }
console.log(map.get('a'))       // 1
console.log(map.set('b', 2))    // Map(2) { 'a' => 1, 'b' => 2 }
map.clear()
map.has()