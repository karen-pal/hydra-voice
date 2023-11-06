const parser = peggy.generate("start = ('a' / 'b')+");

console.log(parser.parse("aaa"))
