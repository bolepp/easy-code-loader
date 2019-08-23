/**
 * 替换规则配置
 * @unit 为默认单位 例css样式width:100px;---可省略px写成width:100[此功能目前暂仅支持css样式，sass和less可先转成css再用这功能]
 * @rule 具体规则 例css样式width:100px;---可写成-w:100;position:absolute ---可写成-pa或p:a;
 * @mixins 混入机制规则 $pa 表示position:absolute
 */

var ruleOptions={
  unit: 'px',
  type: 'css',
  mark: ']',
  cssreplace: false,
  styleRules: [    
    {
      property: 'animation',
      abridge: 'an'
    },    
    {
      property: 'border-top',
      abridge: 'bt'
    },
    {
      property: 'border-color',
      abridge: 'bc'
    },
    {
      property: 'border-style',
      abridge: 'bs',
      value:
        [
          {
            name: 'none',
            letter: 'n'
          },
          {
            name: 'hidden',
            letter: 'h'
          },
          {
            name: 'dotted',
            letter: 'd'
          },
          {
            name: 'dashed',
            letter: 'da'
          },
          {
            name: 'solid',
            letter: 's'
          },
          {
            name: 'double',
            letter: 'do'
          },
          {
            name: 'groove',
            letter: 'g'
          },
          {
            name: 'ridge',
            letter: 'r'
          },
          {
            name: 'inset',
            letter: 'i'
          },
          {
            name: 'outset',
            letter: 'o'
          },
          {
            name: 'inherit',
            letter: 'ih'
          },
        ]
    },
    {
      property: 'border-top-color',
      abridge: 'btc'
    },
    {
      property: 'border-top-style',
      abridge: 'bts',
      value:
        [
          {
            name: 'none',
            letter: 'n'
          },
          {
            name: 'hidden',
            letter: 'h'
          },
          {
            name: 'dotted',
            letter: 'd'
          },
          {
            name: 'dashed',
            letter: 'da'
          },
          {
            name: 'solid',
            letter: 's'
          },
          {
            name: 'double',
            letter: 'do'
          },
          {
            name: 'groove',
            letter: 'g'
          },
          {
            name: 'ridge',
            letter: 'r'
          },
          {
            name: 'inset',
            letter: 'i'
          },
          {
            name: 'outset',
            letter: 'o'
          },
          {
            name: 'inherit',
            letter: 'ih'
          },
        ]
    },
    {
      property: 'border-top-width',
      abridge: 'btw'
    },
    {
      property: 'border-right',
      abridge: 'br'
    },
    {
      property: 'border-right-color',
      abridge: 'brc'
    },
    {
      property: 'border-right-style',
      abridge: 'brs',
      value:
        [
          {
            name: 'none',
            letter: 'n'
          },
          {
            name: 'hidden',
            letter: 'h'
          },
          {
            name: 'dotted',
            letter: 'd'
          },
          {
            name: 'dashed',
            letter: 'da'
          },
          {
            name: 'solid',
            letter: 's'
          },
          {
            name: 'double',
            letter: 'do'
          },
          {
            name: 'groove',
            letter: 'g'
          },
          {
            name: 'ridge',
            letter: 'r'
          },
          {
            name: 'inset',
            letter: 'i'
          },
          {
            name: 'outset',
            letter: 'o'
          },
          {
            name: 'inherit',
            letter: 'ih'
          },
        ]
    },
    {
      property: 'border-right-width',
      abridge: 'brw'
    },
    {
      property: 'border-bottom',
      abridge: 'bb'
    },
    {
      property: 'border-bottom-color',
      abridge: 'bbc'
    },
    {
      property: 'border-bottom-style',
      abridge: 'bbs',
      value:
        [
          {
            name: 'none',
            letter: 'n'
          },
          {
            name: 'hidden',
            letter: 'h'
          },
          {
            name: 'dotted',
            letter: 'd'
          },
          {
            name: 'dashed',
            letter: 'da'
          },
          {
            name: 'solid',
            letter: 's'
          },
          {
            name: 'double',
            letter: 'do'
          },
          {
            name: 'groove',
            letter: 'g'
          },
          {
            name: 'ridge',
            letter: 'r'
          },
          {
            name: 'inset',
            letter: 'i'
          },
          {
            name: 'outset',
            letter: 'o'
          },
          {
            name: 'inherit',
            letter: 'ih'
          },
        ]
    },
    {
      property: 'border-bottom-width',
      abridge: 'bbw'
    },
    {
      property: 'border-left',
      abridge: 'bl'
    },
    {
      property: 'border-left-color',
      abridge: 'blc'
    },
    {
      property: 'border-left-style',
      abridge: 'bls',
      value:
        [
          {
            name: 'none',
            letter: 'n'
          },
          {
            name: 'hidden',
            letter: 'h'
          },
          {
            name: 'dotted',
            letter: 'd'
          },
          {
            name: 'dashed',
            letter: 'da'
          },
          {
            name: 'solid',
            letter: 's'
          },
          {
            name: 'double',
            letter: 'do'
          },
          {
            name: 'groove',
            letter: 'g'
          },
          {
            name: 'ridge',
            letter: 'r'
          },
          {
            name: 'inset',
            letter: 'i'
          },
          {
            name: 'outset',
            letter: 'o'
          },
          {
            name: 'inherit',
            letter: 'ih'
          },
        ]
    },
    {
      property: 'border-left-width',
      abridge: 'blw'
    },
    {
      property: 'border-image',
      abridge: 'bi'
    },
    {
      property: 'border-image-outset',
      abridge: 'bio'
    },
    {
      property: 'border-image-repeat',
      abridge: 'bir'
    },
    {
      property: 'border-image-slice',
      abridge: 'bis'
    },
    {
      property: 'border-image-source',
      abridge: 'biso'
    },
    {
      property: 'border-image-width',
      abridge: 'biw'
    },
    {
      property: 'border-radius',
      abridge: 'bra'
    },
    {
      property: 'border-top-left-radius',
      abridge: 'btlr'
    },
    {
      property: 'border-top-right-radius',
      abridge: 'btrr'
    },
    {
      property: 'box-shadow',
      abridge: 'bsh'
    },
    {
      property: 'background',
      abridge: 'bg'
    },
    {
      property: 'background-attachment',
      abridge: 'bga',
      value:
        [
          {
            name: 'scroll',
            letter: 's'
          },
          {
            name: 'fixed',
            letter: 'f'
          },
          {
            name: 'inherit',
            letter: 'ih'
          },
        ]
    },
    {
      property: 'background-color',
      abridge: 'bgc'
    },
    {
      property: 'background-image',
      abridge: 'bgi'
    },
    {
      property: 'background-position',
      abridge: 'bgp'
    },
    {
      property: 'background-position-x',
      abridge: 'bgpx'
    },
    {
      property: 'background-position-y',
      abridge: 'bgpy'
    },
    {
      property: 'background-repeat',
      abridge: 'bgr',
      value:
        [
          {
            name: 'repeat',
            letter: 'r'
          },
          {
            name: 'repeat-x',
            letter: 'x'
          },
          {
            name: 'repeat-y',
            letter: 'y'
          },
          {
            name: 'no-repeat',
            letter: 'n'
          },
          {
            name: 'inherit',
            letter: 'ih'
          },
        ]
    },
    {
      property: 'background-clip',
      abridge: 'bgcl',
      value:
        [
          {
            name: 'border-box',
            letter: 'b'
          },
          {
            name: 'padding-box',
            letter: 'p'
          },
          {
            name: 'content-box',
            letter: 'c'
          }
        ]
    },
    {
      property: 'background-origin',
      abridge: 'bgo',
      value:
        [
          {
            name: 'border-box',
            letter: 'b'
          },
          {
            name: 'padding-box',
            letter: 'p'
          },
          {
            name: 'content-box',
            letter: 'c'
          }
        ]
    },
    {
      property: 'background-size',
      abridge: 'bgs'
    },
    {
      property: 'bottom',
      abridge: 'bo'
    },
    {
      property: 'border',
      abridge: 'b'
    },    
    {
      property: 'clear',
      abridge: 'cl',
      value:
        [
          {
            name: 'left',
            letter: 'l'
          },
          {
            name: 'right',
            letter: 'r'
          },
          {
            name: 'both',
            letter: 'b'
          },
          {
            name: 'none',
            letter: 'n'
          },
          {
            name: 'inherit',
            letter: 'ih'
          }
        ]
    },
    {
      property: 'content',
      abridge: 'ct'
    },
    {
      property: 'color',
      abridge: 'c'
    },
    {
      property: 'display',
      abridge: 'd',
      value:
        [
          {
            name: 'none',
            letter: 'n'
          },
          {
            name: 'block',
            letter: 'b'
          },
          {
            name: 'inline',
            letter: 'i'
          },
          {
            name: 'inline-block',
            letter: 'ib'
          },
          {
            name: 'list-item',
            letter: 'l'
          },
          {
            name: 'run-in',
            letter: 'r'
          },
          {
            name: 'table',
            letter: 't'
          },
          {
            name: 'flex',
            letter: 'f'
          },
          {
            name: 'contents',
            letter: 'c'
          },
          {
            name: 'flow-root',
            letter: 'fr'
          },
          {
            name: 'grid',
            letter: 'g'
          },
          {
            name: 'inherit',
            letter: 'ih'
          },
          {
            name: 'inline-flex',
            letter: 'if'
          },
          {
            name: 'inline-table',
            letter: 'it'
          },
          {
            name: 'inline-flex',
            letter: 'if'
          },
          {
            name: 'inline-grid',
            letter: 'ig'
          },
          {
            name: 'table-row-group',
            letter: 'trg'
          },
          {
            name: 'table-header-group',
            letter: 'thg'
          },
          {
            name: 'table-footer-group',
            letter: 'tfg'
          },
          {
            name: 'table-row',
            letter: 'tr'
          },
          {
            name: 'table-column-group',
            letter: 'tcg'
          },
          {
            name: 'table-column',
            letter: 'tc'
          },
          {
            name: 'table-cell',
            letter: 'tce'
          },
          {
            name: 'table-caption',
            letter: 'tca'
          },
          {
            name: 'unset',
            letter: 'u'
          }
        ]
    },
    {
      property: 'empty-cells',
      abridge: 'e',
      value:
        [
          {
            name: 'hide',
            letter: 'h'
          },
          {
            name: 'inherit',
            letter: 'ih'
          },
          {
            name: 'initial',
            letter: 'in'
          },
          {
            name: 'show',
            letter: 's'
          },
          {
            name: 'unset',
            letter: 'u'
          }
        ]
    },    
    {
      property: 'filter',
      abridge: 'fi'
    },   
    {
      property: 'flex',
      abridge: 'fl',
      value:
      [
        {
          name: 'auto',
          letter: 'a'
        },
        {
          name: 'inherit',
          letter: 'ih'
        },
        {
          name: 'none',
          letter: 'n'
        },
        {
          name: 'unset',
          letter: 'u'
        }
      ]
    },
    {
      property: 'flex-basis',
      abridge: 'flb'
    },
    {
      property: 'flex-direction',
      abridge: 'fld',
      value:
      [
        {
          name: 'column',
          letter: 'c'
        },
        {
          name: 'column-reverse',
          letter: 'cr'
        },
        {
          name: 'inherit',
          letter: 'ih'
        },        
        {
          name: 'initial',
          letter: 'in'
        },        
        {
          name: 'row',
          letter: 'r'
        },        
        {
          name: 'row-reverse',
          letter: 'rr'
        },        
        {
          name: 'unset',
          letter: 'u'
        }
      ]
    },
    {
      property: 'flex-flow',
      abridge: 'flf',
      value:
      [
        {
          name: 'column',
          letter: 'c'
        },
        {
          name: 'column-reverse',
          letter: 'cr'
        },
        {
          name: 'inherit',
          letter: 'ih'
        },        
        {
          name: 'initial',
          letter: 'in'
        },        
        {
          name: 'row',
          letter: 'r'
        },        
        {
          name: 'row-reverse',
          letter: 'rr'
        },        
        {
          name: 'unset',
          letter: 'u'
        },        
        {
          name: 'nowrap',
          letter: 'n'
        },        
        {
          name: 'wrap',
          letter: 'w'
        },        
        {
          name: 'wrap-reverse',
          letter: 'wr'
        }
      ]
    },
    {
      property: 'flex-grow',
      abridge: 'flg',
      value:
      [     
        {
          name: 'inherit',
          letter: 'ih'
        },        
        {
          name: 'initial',
          letter: 'in'
        },  
        {
          name: 'unset',
          letter: 'u'
        }
      ]
    },
    {
      property: 'flex-shrink',
      abridge: 'fls',
      value:
      [     
        {
          name: 'inherit',
          letter: 'ih'
        },        
        {
          name: 'initial',
          letter: 'in'
        },  
        {
          name: 'unset',
          letter: 'u'
        }
      ]
    },
    {
      property: 'flex-wrap',
      abridge: 'flw',
      value:
      [     
        {
          name: 'inherit',
          letter: 'ih'
        },        
        {
          name: 'initial',
          letter: 'in'
        },  
        {
          name: 'unset',
          letter: 'u'
        },
        {
          name: 'nowrap',
          letter: 'n'
        },        
        {
          name: 'wrap',
          letter: 'in'
        },  
        {
          name: 'wrap-reverse',
          letter: 'wr'
        }
      ]
    },
    {
      property: 'float',
      abridge: 'ft',
      value:
      [     
        {
          name: 'inherit',
          letter: 'ih'
        },        
        {
          name: 'initial',
          letter: 'in'
        },  
        {
          name: 'unset',
          letter: 'u'
        },
        {
          name: 'none',
          letter: 'n'
        },        
        {
          name: 'left',
          letter: 'l'
        },  
        {
          name: 'right',
          letter: 'r'
        }
      ]
    },
    {
      property: 'font-family',
      abridge: 'ffm'
    }, 
    {
      property: 'font-style',
      abridge: 'fst',
      value:
      [     
        {
          name: 'inherit',
          letter: 'ih'
        },        
        {
          name: 'initial',
          letter: 'in'
        },  
        {
          name: 'unset',
          letter: 'u'
        },
        {
          name: 'italic',
          letter: 'it'
        },        
        {
          name: 'normal',
          letter: 'n'
        },  
        {
          name: 'oblique',
          letter: 'o'
        }
      ]
    },
    {
      property: 'font-size',
      abridge: 'fs'
    },
    {
      property: 'font-weight',
      abridge: 'fw',
      value:
      [
        {
          name: 'bold',
          letter: 'b'
        },
        {
          name: 'normal',
          letter: 'n'
        }
      ]
    },
    {
      property: 'font-variant',
      abridge: 'fv'
    },
    {
      property: 'font',
      abridge: 'f'
    },
    {
      property: 'height',
      abridge: 'h'
    },   
    {
      property: 'list-style',
      abridge: 'ls',
      value:
      [
        {
          name: 'none',
          letter: 'n'
        },
        {
          name: 'circle',
          letter: 'c'
        }
      ]
    },
    {
      property: 'line-height',
      abridge: 'lh'
    },
    {
      property: 'left',
      abridge: 'l'
    },
    
    {
      property: 'margin-top',
      abridge: 'mt'
    },
    {
      property: 'margin-right',
      abridge: 'mr'
    },
    {
      property: 'margin-bottom',
      abridge: 'mb'
    },
    {
      property: 'margin-left',
      abridge: 'ml'
    },
    {
      property: 'max-width',
      abridge: 'maw'
    },
    {
      property: 'min-width',
      abridge: 'miw'
    },
    {
      property: 'max-height',
      abridge: 'mah'
    },
    {
      property: 'min-height',
      abridge: 'mih'
    },
    {
      property: 'margin',
      abridge: 'm'
    },
    {
      property: 'overflow-x',
      abridge: 'ox',
      value:
        [
          {
            name: 'hidden',
            letter: 'h'
          },
          {
            name: 'auto',
            letter: 'a'
          },
          {
            name: 'scroll',
            letter: 's'
          },
        ]
    },
    {
      property: 'overflow-y',
      abridge: 'oy',
      value:
        [
          {
            name: 'hidden',
            letter: 'h'
          },
          {
            name: 'auto',
            letter: 'a'
          },
          {
            name: 'scroll',
            letter: 's'
          },
        ]
    },
    {
      property: 'opacity',
      abridge: 'op'
    },
    {
      property: 'outline',
      abridge: 'ot'
    },
    {
      property: 'overflow',
      abridge: 'o',
      value:
        [
          {
            name: 'hidden',
            letter: 'h'
          },
          {
            name: 'auto',
            letter: 'a'
          },
          {
            name: 'scroll',
            letter: 's'
          },
        ]
    },
    
    {
      property: 'padding-top',
      abridge: 'pdt'
    },
    {
      property: 'padding-right',
      abridge: 'pdr'
    },
    {
      property: 'padding-bottom',
      abridge: 'pdb'
    },
    {
      property: 'padding-left',
      abridge: 'pdl'
    },
    {
      property: 'padding',
      abridge: 'pd'
    },
    {
      property: 'position',
      abridge: 'p',
      value:
        [
          {
            name: 'absolute',
            letter: 'a'
          },
          {
            name: 'fixed',
            letter: 'f'
          },
          {
            name: 'relative',
            letter: 'r'
          },
        ]
    },
    {
      property: 'right',
      abridge: 'r'
    },
    {
      property: 'text-decoration',
      abridge: 'td',
      value:
        [
          {
            name: 'overline',
            letter: 'o'
          },
          {
            name: 'none',
            letter: 'n'
          },
          {
            name: 'underline',
            letter: 'u'
          }
        ]
    },
    {
     property: 'text-indent',
     abridge: 'ti'
   },
    {
      property: 'text-overflow',
      abridge: 'to',
      value:
        [
          {
            name: 'clip',
            letter: 'c'
          },
          {
            name: 'ellipsis',
            letter: 'e'
          }
        ]
    },
    {
      property: 'text-shadow',
      abridge: 'ts'
    },
    {
    property: 'transform',
    abridge: 'tf'
   },
   {
   property: 'transition',
   abridge: 'tt'
   },
   {
     property: 'text-align',
     abridge: 't',
     value:
       [
         {
           name: 'center',
           letter: 'c'
         },
         {
           name: 'end',
           letter: 'e'
         },
         {
           name: 'justify',
           letter: 'j'
         },
         {
           name: 'left',
           letter: 'l'
         },
         {
           name: 'right',
           letter: 'r'
         },
         {
           name: 'start',
           letter: 's'
         },
       ]
   },   
   {
     property: 'visibility',
     abridge: 'vi',
     value:
       [
         {
           name: 'collapse',
           letter: 'c'
         },
         {
           name: 'hidden',
           letter: 'h'
         },
         {
           name: 'visible',
           letter: 'v'
         }
       ]
   },
   {
    property: 'vertical-align',
    abridge: 'v',
    value:
      [
        {
          name: 'bottom',
          letter: 'b'
        },
        {
          name: 'middle',
          letter: 'm'
        },
        {
          name: 'top',
          letter: 't'
        },
        {
          name: 'baseline',
          letter: 'bl'
        }
      ]
  },
    {
      property: 'white-space',
      abridge: 'ws',
      value:
      [
        {
          name: 'normal',
          letter: 'nm'
        },
        {
          name: 'nowrap',
          letter: 'nw'
        },
        {
          name: 'pre',
          letter: 'p'
        },
      ]
    },
    {
      property: 'word-break',
      abridge: 'wb',
      value:
      [
        {
          name: 'break-all',
          letter: 'ba'
        },
        {
          name: 'break-word',
          letter: 'bw'
        },
        {
          name: 'normal',
          letter: 'n'
        },
      ]
    },
    {
      property: 'word-spacing',
      abridge: 'ws'
    },
    {
      property: 'width',
      abridge: 'w'
    },
    {
      property: 'z-index',
      abridge: 'z'
    }
  ],
  jsRules: [],
  mixins: [
    { $bgf: "background-color:#fff" },
    { $mra: "margin:0 auto" },
    { $bse: "border:1px solid #eee" },
    { $bsd: "border:1px solid #ddd" },
  ]
}