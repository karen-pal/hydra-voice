const parser = peggy.generate(`
  start = Articulo _ (Centro/Periferia) _ Verbo
  Articulo = ('La' / 'El' / 'el' / 'la' / 'las' / 'los' / 'Los' / 'lo')
  Centro =  ("centro"/ "hablar"/ "hegemonía")
  Periferia = ("periferia"/ "silencio"/ "vacío"/ "sudamérica"/ "latino"/ "américa del sur"/ "sur")
  Verbo = ("olvida" / "recuerda" / "construye" / "hace movimientos" )
  _ = " "
`);

console.log(parser.parse("la periferia recuerda"))
