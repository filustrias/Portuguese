// Pimsleur European Portuguese I audio on Google Drive
// (files "European Portuguese I - Unit XX.mp3").
// The custom player (with ±15 s) can only read a file shared as
// "Anyone with the link". When the file is private, the player falls back
// to Google Drive's own player, which works for whoever is signed in to the
// account that owns the files.
const ids: Record<number, string> = {
  1: '1JG0zNx1sBk94UUKaKRcheYSz0sy6rjch',
  2: '1qdzB-bZPHWdTM-4cEcvvtPmTS1hJnMn-',
  3: '1ctpJ3nEWeF2y0JGI5JKkF8yDSjCiBGqA',
  4: '1i7VFSYscpQG-itvEjwR7u5bO9FLnC10Y',
  5: '1trA2aqA_ld0tRJPga2_lv5IG3ujVox2v',
  6: '15pGXyR8zc8G_twyveSab75qugzTQByxZ',
  7: '1xFRlO5O205BA-LpXg4PbGZwq2KwxkzBx',
  8: '1LdIyUUYj3yLMv4uf6T--iAtDRjPUBTvk',
  9: '12SOW64ULibRzxkYTpWo51L0O4jcOa1MX',
  10: '1s92elPaTKj4GwbyvpiT2TVhqpPEfnNAn',
  11: '1InG1AzpH4qmWpBi8P57eGtOTJqOlaDVt',
  12: '1f6yddS1ly33a6HRXA_8jN0LJV2GJYIrn',
  13: '1BTZu3dnLh_TADZM9Ks61RIdfjzlb7XVM',
  14: '1KRcO6AoLlh95Hqko_rg-SKgeX1rfysr5',
  15: '1jl1RtnF6E8iALR9LTQlfj4wMtc_wBL59',
  16: '1wX6x2av_TUR5QaV5fl_KG1ZOfEpz887h',
  17: '1yMUMJGtraQzzg4BaX34EOIRAC_v2OJo8',
  18: '1TQdlvtjeOOV585WesJtsUhvHUQVHW__U',
  19: '17Vjyed0xdaBPcoT91A_AshDPaVV_gHB5',
  20: '1AjwMFIyAS79d13lXCWvs6jN3_ujVFtdb',
  21: '1e3c54YGjU_XF2pH94zMjPcXFH3plJABx',
  22: '1SuD2KR14Q6-4HKE6d52LXniBxDLDoDm-',
  23: '1zTM0jOTWwqyXQebAIxGt7uIEjsYRKNee',
  24: '1IIUxPlNlOjj0eKPN_LSzB0VA4LW2iopf',
  25: '1s2fkH-iVVlPNDCZBRJ7FlrqI48dSv4YB',
  26: '1TpaHB8ktRaUwX6Pl5Bk4NiaUiXdhHtV2',
  27: '1O8K7q68XPEOR5PsaKVXAC9_PXULdvist',
  28: '19cOoqPn_IBZMbIqtTNxll4zExeI5ro4B',
  29: '1m75a9ShzjrakRkoIDH3efk8L7M_OwycF',
  30: '1QVlE-1IsK4azzaGPJZ02IH4VOoYb0lNk'
}

export function audioPimsleur(unidade: number) {
  const id = ids[unidade]
  if (!id) return null
  return {
    url: `https://drive.usercontent.google.com/download?id=${id}&export=download`,
    drive: `https://drive.google.com/file/d/${id}/view`,
    previa: `https://drive.google.com/file/d/${id}/preview`
  }
}
