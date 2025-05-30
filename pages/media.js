import Container from '@/components/Container'
import { useConfig } from '@/lib/config'
import fs from 'fs'
import path from 'path'
import csv from 'csv-parser'
import { useState } from 'react'

const MediaCard = ({ type, title, description, creator, status, rating, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 ease-in-out h-full flex flex-col">
        {/* Image conditional render */}
        {/* Assuming there's an 'imageUrl' property in the data for cards that need images */}
        {/* {item.imageUrl && <img src={item.imageUrl} alt={title} className="w-24 h-36 object-cover rounded-lg flex-shrink-0" />} */}

        <h3 className="text-lg font-bold text-black dark:text-white mb-1 leading-tight">{title}</h3>
        {description && <p className="text-gray-700 dark:text-gray-400 text-sm mb-2 line-clamp-3">{description}</p>}
        {creator && <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{creator}</p>}
        <div className="flex flex-wrap items-center mt-auto pt-2">
          {status && <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200 dark:bg-blue-700 dark:text-blue-200 last:mr-0 mr-1 mb-1">{status}</span>}
          {rating && rating !== '' && <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-yellow-600 bg-yellow-200 dark:bg-yellow-700 dark:text-yellow-200 mb-1">评分: {rating}</span>}
        </div>
      </div>
    </a>
  )
}

export default function Media({
  recentMediaItems,
  allMediaItems,
  recentMusicItems,
  allMusicItems,
  recentGameItems,
  allGameItems,
}) {
  const BLOG = useConfig()
  const [showAllMovies, setShowAllMovies] = useState(false)
  const [showAllMusic, setShowAllMusic] = useState(false)
  const [showAllGames, setShowAllGames] = useState(false)
  const [expandedMovieText, setExpandedMovieText] = useState(false)
  const [expandedMusicText, setExpandedMusicText] = useState(false)
  const [expandedGameText, setExpandedGameText] = useState(false)

  const displayedMovies = showAllMovies ? allMediaItems : recentMediaItems
  const displayedMusic = showAllMusic ? allMusicItems : recentMusicItems
  const displayedGames = showAllGames ? allGameItems : recentGameItems

  const recentMoviesIntro = `最近两个月，我观看了一些令人印象深刻的电影。\n\n《星际牛仔》：这部经典的日本动画电影以其独特的爵士乐配乐、深邃的故事情节和迷人的角色塑造让我沉迷其中。它不仅仅是一部太空西部片，更是一部关于孤独、失落和寻找归属感的深刻探讨。每一集都像一个独立的短篇故事，但又串联起主角们的命运。\n\n《夏日大作战》：细田守导演的这部动画电影充满了夏日的活力和日本乡村的温情。故事将现实世界的家族联系与虚拟世界的危机巧妙结合，展现了家人之间团结协作的力量。画面色彩鲜艳，角色生动有趣，是一部非常治愈和励志的作品。\n\n《大地惊雷》：科恩兄弟执导的这部西部片充满了他们独特的黑色幽默和写实风格。海莉·斯坦菲尔德饰演的少女马蒂坚韧聪明，与杰夫·布里吉斯饰演的"烂狗"警长共同踏上复仇之旅。影片对白精彩，表演到位，是一部充满魅力的西部片。\n
回顾这些电影，它们不仅带给我视觉和听觉的享受，更引发了我对生活、人性和情感的思考。`;

  const recentMusicIntro = `最近听了一些很棒的音乐。`; // Mock music intro text
  const recentGameIntro = `最近玩了几款有趣的游戏。`; // Mock game intro text

  const displayMovieIntro = expandedMovieText ? recentMoviesIntro : recentMoviesIntro.split('\n').slice(0, 4).join('\n') + '...';
  const displayMusicIntro = expandedMusicText ? recentMusicIntro : recentMusicIntro.split('\n').slice(0, 4).join('\n') + '...';
  const displayGameIntro = expandedGameText ? recentGameIntro : recentGameIntro.split('\n').slice(0, 4).join('\n') + '...';

  return (
    <Container
      title="我的媒体库"
      description="我读过的书、看过的电影、玩过的游戏"
      fullWidth={false}
    >
      <article className="flex flex-col items-start justify-center w-full mx-auto mb-16">
        {/* Movie Module Card */}
        <div className="w-full rounded-lg shadow-md p-6 mb-12 bg-gray-200 dark:bg-gray-800">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white text-center w-full">
            电影
          </h1>

          {/* Introductory Text and Image Section - Movie */}
          <div className="flex w-full gap-8 mb-8 items-start">
            {/* Introductory Text on the left */}
            <div className="w-3/4 flex flex-col">
              <blockquote className="text-gray-700 dark:text-gray-400 text-lg italic border-l-4 border-gray-300 dark:border-gray-600 pl-4 mb-4">
                {displayMovieIntro}
              </blockquote>
              {recentMoviesIntro.split('\n').length > 4 && (
                <button
                  onClick={() => setExpandedMovieText(!expandedMovieText)}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  {expandedMovieText ? '收起' : '展开全部'}
                </button>
              )}
            </div>

            {/* Image on the right - Movie */}
            <div className="w-1/4 flex-shrink-0">
              <img src="/dkek.png" alt="Media related image" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Media Lists - Movie: Added bottom margin */}
          <div className="w-full">
            {!showAllMovies && recentMediaItems.length > 0 && (
              <div className="w-full mb-8">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">看过</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                  {displayedMovies.map((item, index) => (
                    <MediaCard key={index} {...item} />
                  ))}
                </div>
              </div>
            )}

            {(showAllMovies || recentMediaItems.length === 0) && allMediaItems.length > 0 && (
              <div className="w-full">
                {(showAllMovies || recentMediaItems.length === 0) && recentMediaItems.length > 0 && (
                   <h2 className="text-2xl font-bold text-black dark:text-white mb-4">所有电影</h2>
                )}
                 {showAllMovies && recentMediaItems.length === 0 && (
                   <h2 className="text-2xl font-bold text-black dark:text-white mb-4">所有电影</h2>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                  {displayedMovies.map((item, index) => (
                    <MediaCard key={index} {...item} />
                  ))}
                </div>
              </div>
            )}

            {allMediaItems.length > recentMediaItems.length && (
              <button
                onClick={() => setShowAllMovies(!showAllMovies)}
                className="px-4 py-2 mx-auto text-white bg-blue-500 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-800"
              >
                {showAllMovies ? '收起其他电影' : `展开所有电影 (${allMediaItems.length} 条)`}
              </button>
            )}

            {allMediaItems.length === 0 && <p className="text-center w-full text-gray-600 dark:text-gray-400">暂无媒体记录。</p>}
          </div>
        </div>

        {/* Separator is now less critical with card design, but keeping for subtle visual break if needed */}
        {/* <hr className="w-full border-gray-300 dark:border-gray-700 my-12" /> */}

        {/* Music Module Card */}
        <div className="w-full rounded-lg shadow-md p-6 mb-12 bg-green-100 dark:bg-green-700">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white text-center w-full">
            音乐
          </h1>

          {/* Introductory Text and Image Section - Music */}
          <div className="flex w-full gap-8 mb-8 items-start">
            <div className="w-3/4 flex flex-col">
              <blockquote className="text-gray-700 dark:text-gray-400 text-lg italic border-l-4 border-gray-300 dark:border-gray-600 pl-4 mb-4">
                {displayMusicIntro}
              </blockquote>
               {recentMusicIntro.split('\n').length > 4 && (
                <button
                  onClick={() => setExpandedMusicText(!expandedMusicText)}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  {expandedMusicText ? '收起' : '展开全部'}
                </button>
              )}
            </div>
            <div className="w-1/4 flex-shrink-0">
              <img src="/dkek.png" alt="Music related image" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Media Lists - Music */}
          <div className="w-full">
             {!showAllMusic && recentMusicItems.length > 0 && (
              <div className="w-full mb-8">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">听过的</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                  {displayedMusic.map((item, index) => (
                    <MediaCard key={index} {...item} />
                  ))}
                </div>
              </div>
            )}

            {(showAllMusic || recentMusicItems.length === 0) && allMusicItems.length > 0 && (
              <div className="w-full">
                 {(showAllMusic || recentMusicItems.length === 0) && recentMusicItems.length > 0 && (
                   <h2 className="text-2xl font-bold text-black dark:text-white mb-4">所有音乐</h2>
                )}
                 {showAllMusic && recentMusicItems.length === 0 && (
                   <h2 className="text-2xl font-bold text-black dark:text-white mb-4">所有音乐</h2>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                  {displayedMusic.map((item, index) => (
                    <MediaCard key={index} {...item} />
                  ))}
                </div>
              </div>
            )}
             {allMusicItems.length > recentMusicItems.length && (
              <button
                onClick={() => setShowAllMusic(!showAllMusic)}
                className="px-4 py-2 mx-auto text-white bg-blue-500 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-800"
              >
                {showAllMusic ? '收起其他音乐' : `展开所有音乐 (${allMusicItems.length} 条)`}
              </button>
            )}
             {allMusicItems.length === 0 && <p className="text-center w-full text-gray-600 dark:text-gray-400">暂无媒体记录。</p>}
          </div>
        </div>

        {/* Separator is now less critical with card design, but keeping for subtle visual break if needed */}
        {/* <hr className="w-full border-gray-300 dark:border-gray-700 my-12" /> */}

        {/* Game Module Card */}
        <div className="w-full rounded-lg shadow-md p-6 mb-12 bg-red-100 dark:bg-red-700">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white text-center w-full">
            游戏
          </h1>

          {/* Introductory Text and Image Section - Game */}
          <div className="flex w-full gap-8 mb-8 items-start">
            <div className="w-3/4 flex flex-col">
              <blockquote className="text-gray-700 dark:text-gray-400 text-lg italic border-l-4 border-gray-300 dark:border-gray-600 pl-4 mb-4">
                {displayGameIntro}
              </blockquote>
               {recentGameIntro.split('\n').length > 4 && (
                <button
                  onClick={() => setExpandedGameText(!expandedGameText)}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  {expandedGameText ? '收起' : '展开全部'}
                </button>
              )}
            </div>
            <div className="w-1/4 flex-shrink-0">
              <img src="/dkek.png" alt="Game related image" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Media Lists - Game */}
          <div className="w-full">
            {!showAllGames && recentGameItems.length > 0 && (
              <div className="w-full mb-8">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">玩过的</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                  {displayedGames.map((item, index) => (
                    <MediaCard key={index} {...item} />
                  ))}
                </div>
              </div>
            )}

            {(showAllGames || recentGameItems.length === 0) && allGameItems.length > 0 && (
              <div className="w-full">
                 {(showAllGames || recentGameItems.length === 0) && recentGameItems.length > 0 && (
                   <h2 className="text-2xl font-bold text-black dark:text-white mb-4">所有游戏</h2>
                )}
                 {showAllGames && recentGameItems.length === 0 && (
                   <h2 className="text-2xl font-bold text-black dark:text-white mb-4">所有游戏</h2>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                  {displayedGames.map((item, index) => (
                    <MediaCard key={index} {...item} />
                  ))}
                </div>
              </div>
            )}
            {allGameItems.length > recentGameItems.length && (
              <button
                onClick={() => setShowAllGames(!showAllGames)}
                className="px-4 py-2 mx-auto text-white bg-blue-500 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-800"
              >
                {showAllGames ? '收起其他游戏' : `展开所有游戏 (${allGameItems.length} 条)`}
              </button>
            )}
            {allGameItems.length === 0 && <p className="text-center w-full text-gray-600 dark:text-gray-400">暂无媒体记录。</p>}
          </div>
        </div>

      </article>
    </Container>
  )
}

export async function getStaticProps() {
  const readCsv = async (filePath, type) => {
    const items = [];
    const fullPath = path.join(process.cwd(), 'public', filePath);
    let isFirstRow = true;

    if (!fs.existsSync(fullPath)) {
        console.warn(`File not found: ${filePath}`);
        return [];
    }

    await new Promise((resolve, reject) => {
        fs.createReadStream(fullPath)
            .pipe(csv({ headers: false }))
            .on('data', (data) => {
                if (isFirstRow) {
                    isFirstRow = false;
                    return;
                }

                const rawTitle = data[0];
                const cleanedTitle = (rawTitle && String(rawTitle).trim()) ? String(rawTitle).trim() : '无标题';
                const rawDescription = data[1];
                const rawDoubanRating = data[2]; // Assuming this column is still relevant for a generic rating
                const rawLink = data[3];
                const rawCreationTime = data[4];
                const rawMyRating = data[5]; // Assuming this column is still relevant for a generic rating

                const rating = (rawMyRating && String(rawMyRating).trim() !== '') ? String(rawMyRating).trim() : (rawDoubanRating && String(rawDoubanRating).trim() !== '') ? String(rawDoubanRating).trim() : '';
                const status = (rawMyRating && String(rawMyRating).trim() !== '') ? (type === 'movie' ? '已看' : type === 'music' ? '已听' : type === 'game' ? '已玩' : '') : '';
                const creatorInfo = (rawDescription && String(rawDescription).split(' / ').length > 2) ? String(rawDescription).split(' / ')[2] : ''; // Adjusting creator logic as it might not apply to all media types

                items.push({
                    type: type,
                    title: cleanedTitle,
                    description: rawDescription ? String(rawDescription) : '',
                    creator: creatorInfo,
                    status: status,
                    rating: rating,
                    link: rawLink ? String(rawLink) : '#',
                    creationTime: rawCreationTime
                });
            })
            .on('end', () => {
                resolve();
            })
            .on('error', (error) => {
                console.error(`Error reading ${filePath}:`, error);
                reject(error);
            });
    });
    return items;
  };

  const allMediaItems = await readCsv('douban.csv', 'movie');
  const allMusicItems = await readCsv('music.csv', 'music');
  const allGameItems = await readCsv('games.csv', 'game');

  const twoMonthsAgo = new Date();
  twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);

  const filterRecent = (items) => {
    return items.filter(item => {
      if (!item.creationTime) return false;
      const [datePart] = item.creationTime.split(' ');
      const [year, month, day] = datePart.split('-').map(Number);
      if (isNaN(year) || isNaN(month) || isNaN(day)) return false;
      const itemDate = new Date(year, month - 1, day);
      if (isNaN(itemDate.getTime())) return false;
      return itemDate >= twoMonthsAgo;
    }).sort((a, b) => new Date(b.creationTime) - new Date(a.creationTime));
  };

  const recentMediaItems = filterRecent(allMediaItems);
  const recentMusicItems = filterRecent(allMusicItems);
  const recentGameItems = filterRecent(allGameItems);

  // Sort all items by creation time as well
  allMediaItems.sort((a, b) => new Date(b.creationTime) - new Date(a.creationTime));
  allMusicItems.sort((a, b) => new Date(b.creationTime) - new Date(a.creationTime));
  allGameItems.sort((a, b) => new Date(b.creationTime) - new Date(a.creationTime));

  return {
    props: {
      recentMediaItems,
      allMediaItems,
      recentMusicItems,
      allMusicItems,
      recentGameItems,
      allGameItems,
    },
  }
} 