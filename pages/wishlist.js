import Container from '@/components/Container'
import { useConfig } from '@/lib/config'

export default function Wishlist() {
  const BLOG = useConfig()
  
  return (
    <Container
      title="愿望清单"
      description="我的愿望清单"
      fullWidth={true}
    >
      <article className="flex flex-col items-start justify-center w-full mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white text-center w-full">
          我的愿望清单
        </h1>
        <div className="wishlist-container flex flex-wrap justify-around p-5">
          <section className="status-column in-progress bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-5 m-2.5 flex-1 min-w-[280px] shadow-md">
            <h2 className="text-center mt-0 pb-2.5 border-b border-gray-200 dark:border-gray-700">进行中 💪</h2>
            <ul className="list-none p-0">
              <li className="py-2.5 border-b border-gray-200 dark:border-gray-700">每天冥想10分钟</li>
              <li className="py-2.5 border-b border-gray-200 dark:border-gray-700">每天在博客上发一张照片</li>
              <li className="py-2.5 border-b border-gray-200 dark:border-gray-700">每天记录想法</li>
              <li className="py-2.5 border-b border-gray-200 dark:border-gray-700">体重低于130斤,并有记录</li>
            </ul>
            <button className="w-full p-2.5 bg-gray-800 text-white border-none rounded cursor-pointer mt-5 text-base hover:bg-gray-700">加油!</button>
          </section>

          <section className="status-column not-achieved bg-yellow-100 dark:bg-yellow-800/20 rounded-lg p-5 m-2.5 flex-1 min-w-[280px] shadow-md">
            <h2 className="text-center mt-0 pb-2.5 border-b border-gray-200 dark:border-gray-700">未实现 😔</h2>
            <ul className="list-none p-0">
              <li className="py-2.5 border-b border-gray-200 dark:border-gray-700">完成一次半程马拉松</li>
              <li className="py-2.5 border-b border-gray-200 dark:border-gray-700">写一首好听的歌</li>
              <li className="py-2.5 border-b border-gray-200 dark:border-gray-700">学会画画,给自己一张素描</li>
              <li className="py-2.5 border-b border-gray-200 dark:border-gray-700">学习摄影📹</li>
              <li className="py-2.5 border-b border-gray-200 dark:border-gray-700">存满1000万现金</li>
              <li className="py-2.5 border-b border-gray-200 dark:border-gray-700">学会日语</li>
              <li className="py-2.5 border-b border-gray-200 dark:border-gray-700">学会吉它,能弹一些曲子</li>
              <li className="py-2.5 border-b border-gray-200 dark:border-gray-700">写一份遗嘱</li>
              <li className="py-2.5 border-b border-gray-200 dark:border-gray-700">体验实弹射击</li>
              <li className="py-2.5 border-b border-gray-200 dark:border-gray-700">换工作，做自己想做的事</li>
            </ul>
            <button className="w-full p-2.5 bg-yellow-400 text-gray-900 border-none rounded cursor-pointer mt-5 text-base hover:bg-yellow-500">努力中</button>
          </section>

          <section className="status-column achieved bg-green-50 dark:bg-green-900/20 rounded-lg p-5 m-2.5 flex-1 min-w-[280px] shadow-md">
            <h2 className="text-center mt-0 pb-2.5 border-b border-gray-200 dark:border-gray-700">已实现 🎉</h2>
            <ul className="list-none p-0">
              <li className="py-2.5 border-b border-gray-200 dark:border-gray-700 line-through decoration-2 decoration-gray-500 dark:decoration-gray-400">完成毕业，并找到一份工作</li>
              <li className="py-2.5 border-b border-gray-200 dark:border-gray-700 line-through decoration-2 decoration-gray-500 dark:decoration-gray-400">完成一个项目并上线</li>
              <li className="py-2.5 border-b border-gray-200 dark:border-gray-700 line-through decoration-2 decoration-gray-500 dark:decoration-gray-400">完成一次出国旅行</li>
              <li className="py-2.5 border-b border-gray-200 dark:border-gray-700 line-through decoration-2 decoration-gray-500 dark:decoration-gray-400">参加一个开源项目</li>
            </ul>
            <button className="w-full p-2.5 bg-blue-500 text-white border-none rounded cursor-pointer mt-5 text-base hover:bg-blue-600">酷！不是吗？</button>
          </section>
        </div>
      </article>
    </Container>
  )
} 