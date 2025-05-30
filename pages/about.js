import Container from '@/components/Container'
import React from 'react'

const AboutPage = () => {
  const buildDate = new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'numeric', day: 'numeric' });
  const buildTime = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
  const latestBuild = `${buildDate} ${buildTime}`;

  // Using a simplified version of the user's provided text as content
  const thoughtsAndQuestions = [
    {
      heading: '在思考的问题',
      items: [
        '密钥管理如何兼顾方便和安全？',
      ]
    },
    {
      heading: '在思考一些问题',
      items: [
        '如何最大化的与用户利益保持一致？',
        '开发者应该过僧侣般的生活，然后低价售卖服务，还是开发者首先高价出售，先过上体面的生活，然后再开始低价售卖服务？',
        '一个良好的激励机制应该是啥样的？',
        {
          text: '才是对大多数人都有利的？',
          subItems: [
            '低价卖东西，自己能接受，但是如何对待员工？',
            '成本最小化？',
          ]
        },
        '开源+云托管',
        '思维有点乱，如果您对此有任何想法，可以找我一起聊聊~', // You can add a link here if needed
        {
          text: '这里有几个相关的讨论:',
          subItems: [
            'https://gavinhoward.com/2023/12/is-source-available-really-that-bad/',
            'https://drewdevault.com/2023/12/26/2023-12-26-Prusa-is-floundering.html',
            'https://news.ycombinator.com/item?id=38331173',
          ]
        },
        '我意识到我不想剥削别人。',
        '我不喜欢小红书那种氛围',
        '我喜欢 hn 那种非商业化氛围',
      ]
    }
  ];

  const renderListItems = (items) => {
    return (
      <ul className="list-disc list-inside ml-4">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            {typeof item === 'string' ? item : (
              <>
                {item.text}
                {item.subItems && renderListItems(item.subItems)}
              </>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Container
      title="关于"
      description="了解更多关于我"
    >
      <div className="w-full mx-auto mb-16">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-black dark:text-white">
          关于
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-8">
          Latest build at: {latestBuild}
        </p>

        {/* Introductory text block */}
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 mb-12">
          <p className="text-gray-700 dark:text-gray-300 italic">
            这是一个关于页面，在这里你可以了解更多关于我，以及我正在思考的一些问题和想法。
          </p>
        </div>

        {/* Content sections */}
        {thoughtsAndQuestions.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">{section.heading}</h2>
            {renderListItems(section.items)}
          </div>
        ))}

      </div>
    </Container>
  );
};

export default AboutPage; 