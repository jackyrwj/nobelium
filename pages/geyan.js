import Container from '@/components/Container'
import React from 'react'

const maxims = [
  {
    category: '强调自我认识与接受',
    items: [
      { text: '"Know thyself."', source: '古希腊箴言' },
      { text: '"To thine own self be true."', source: '莎士比亚《哈姆雷特》' },
      { text: '"Be yourself; everyone else is already taken."', source: '奥斯卡·王尔德' },
      { text: '"You are the author of your own story."', source: '未知' },
      { text: '"No one can make you feel inferior without your consent."', source: '埃莉诺·罗斯福' },
    ],
  },
  {
    category: '强调独立思考与选择',
    items: [
      { text: '"Think for yourself."', source: '未知' },
      { text: '"The unexamined life is not worth living."', source: '苏格拉底' },
      { text: '"Choose your own path."', source: '未知' },
      { text: '"The mass of men lead lives of quiet desperation."', source: '梭罗《瓦尔登湖》' },
    ],
  },
  {
    category: '强调独特性与超越',
    items: [
      { text: '"Dare to be different."', source: '未知' },
      { text: '"Only dead fish go with the flow."', source: '流行语' },
      { text: '"Your life is your message to the world. Make sure it\'s inspiring."', source: '未知' },
    ],
  },
  {
    category: '强调个体力量与责任',
    items: [
      { text: '"You have within you right now, everything you need to deal with whatever the world can throw at you."', source: '未知' },
      { text: '"The greatest glory in living lies not in never falling, but in rising every time we fall."', source: '纳尔逊·曼德拉' },
    ],
  }
]

const GyanPage = () => {
  return (
    <Container
      title="格言"
      description="记录一些网上看到的有感触的话"
    >
      <div className="flex flex-col items-center justify-center w-full mx-auto mb-16">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-black dark:text-white text-center w-full">
          格言集
        </h1>

        <div className="w-full max-w-2xl">
          {maxims.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-gray-200">{category.category}</h2>
              <div className="flex flex-col gap-8">
                {category.items.map((maxim, itemIndex) => (
                  <div key={itemIndex} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 relative">
                    <p className="text-gray-700 dark:text-gray-300 text-lg italic mb-2">{maxim.text}</p>
                    <p className="text-right text-gray-500 dark:text-gray-400 text-sm">— {maxim.source}</p>
                    {/* Simple bubble tail - adjust position as needed */}
                    {/* <div className="absolute bottom-0 left-8 w-4 h-4 bg-white dark:bg-gray-800 transform rotate-45 translate-y-2"></div> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </Container>
  )
}

export default GyanPage 