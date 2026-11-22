import type MarkdownIt from 'markdown-it'

// In tables with a column named "IPA" (or "Pronunciation"), wraps every cell of
// that column in the <Lat> component, which keeps the text covered until clicked.
const colunasCobertas = ['ipa', 'pronunciation']
export function latinizadoNasTabelas(md: MarkdownIt) {
  // The IPA stress mark (ˈ) allows a line break before it, which splits words
  // like [ʒuˈɐ̃w̃] across lines. A word joiner (U+2060) before it prevents that.
  md.core.ruler.push('ipa-sem-quebra', (state) => {
    for (const bloco of state.tokens) {
      for (const tok of bloco.children ?? []) {
        if (tok.type === 'text') tok.content = tok.content.replace(/(?<=\S)ˈ/g, '⁠ˈ')
      }
    }
  })
  md.core.ruler.push('latinizado-nas-tabelas', (state) => {
    const tokens = state.tokens
    let coluna = -1
    let celula = -1
    let noCorpo = false

    for (let i = 0; i < tokens.length; i++) {
      const tok = tokens[i]
      switch (tok.type) {
        case 'table_open':
          coluna = -1
          noCorpo = false
          break
        case 'tbody_open':
          noCorpo = true
          break
        case 'tr_open':
          celula = -1
          break
        case 'th_open':
          celula++
          if (colunasCobertas.includes(tokens[i + 1]?.content.trim().toLowerCase() ?? '')) coluna = celula
          break
        case 'td_open': {
          celula++
          const conteudo = tokens[i + 1]
          if (noCorpo && celula === coluna && conteudo?.type === 'inline' && conteudo.children) {
            const abre = new state.Token('html_inline', '', 0)
            abre.content = '<Lat>'
            const fecha = new state.Token('html_inline', '', 0)
            fecha.content = '</Lat>'
            conteudo.children.unshift(abre)
            conteudo.children.push(fecha)
          }
          break
        }
      }
    }
  })
}
