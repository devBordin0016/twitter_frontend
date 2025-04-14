/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react'
import { formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { colors, ProfileAvatar, ProfileName } from '../../styles'
import { getFirstLetterAndColor } from '../../utils'
import Button from '../Button'

import {
  useGetTweetsQuery,
  useGetFollowingTweetsQuery,
  useCreateTweetMutation,
  useGetCurrentUserQuery
} from '../../services/api'

import shareIcon from '../../assets/share.svg'
import heartIcon from '../../assets/heart.svg'
import statisticIcon from '../../assets/statistic.svg'
import commentsIcon from '../../assets/comments.svg'

import * as S from './styles'
import Loader from '../Loader'

const Posts = () => {
  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const [activeTab, setActiveTab] = useState<'forYou' | 'following'>('forYou')
  const [createTweet] = useCreateTweetMutation()
  const { data: user } = useGetCurrentUserQuery()

  const { data: forYouTweets = [], isLoading: isLoadingForYou } =
    useGetTweetsQuery()
  const { data: followingTweets = [], isLoading: isLoadingFollowing } =
    useGetFollowingTweetsQuery()

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setText(value)

    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = '28px'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }

  const handlePostTweet = () => {
    if (!text.trim()) return

    createTweet({ content: text })
      .unwrap()
      .then(() => {
        setText('')
        if (textareaRef.current) {
          textareaRef.current.style.height = '28px'
        }
      })
  }

  const formatRelativeDate = (isoDate: string) => {
    return `há ${formatDistanceToNowStrict(new Date(isoDate), {
      locale: ptBR
    })}`
  }

  let avatarColor = ''
  let firstLetter = ''

  if (user) {
    const result = getFirstLetterAndColor(user.username, user.id)
    avatarColor = result.avatarColor
    firstLetter = result.firstLetter
  }

  const renderTweets = (tweets: any[]) =>
    tweets.map((tweet) => {
      const { avatarColor, firstLetter } = getFirstLetterAndColor(
        tweet.username,
        tweet.user
      )
      return (
        <li key={tweet.id}>
          <S.TweetContainer>
            <div>
              <ProfileAvatar style={{ backgroundColor: avatarColor }}>
                {firstLetter}
              </ProfileAvatar>
            </div>
            <div>
              <S.TweetMeta>
                <ProfileName>{tweet.username}</ProfileName>
                <p>{'· ' + formatRelativeDate(tweet.created_at)}</p>
              </S.TweetMeta>
              <p>{tweet.content}</p>
              <S.TweetActions>
                <li>
                  <img src={commentsIcon} alt="Comentários" />
                  <span>0</span>
                </li>
                <li>
                  <img src={shareIcon} alt="Compartilhamentos" />
                  <span>0</span>
                </li>
                <li>
                  <img src={heartIcon} alt="Curtidas" />
                  <span>0</span>
                </li>
                <li>
                  <img src={statisticIcon} alt="Visualizações" />
                  <span>0</span>
                </li>
              </S.TweetActions>
            </div>
          </S.TweetContainer>
        </li>
      )
    })

  return (
    <S.MainContent id="postar">
      <S.SelectPostsWrapper>
        <S.SelectPosts>
          <button
            className={activeTab === 'forYou' ? 'select-button' : ''}
            type="button"
            onClick={() => setActiveTab('forYou')}
          >
            Para você
          </button>
          <button
            className={activeTab === 'following' ? 'select-button' : ''}
            type="button"
            onClick={() => setActiveTab('following')}
          >
            Seguindo
          </button>
        </S.SelectPosts>
      </S.SelectPostsWrapper>

      <S.TweetContainer>
        <div>
          {user && (
            <ProfileAvatar style={{ backgroundColor: avatarColor }}>
              {firstLetter}
            </ProfileAvatar>
          )}
        </div>
        <div className="text-width">
          <S.TweetInputWrapper>
            <textarea
              ref={textareaRef}
              value={text}
              onInput={handleChange}
              placeholder="O que está acontecendo?"
              maxLength={220}
            />
          </S.TweetInputWrapper>
          <Button
            onClick={handlePostTweet}
            type="button"
            bgColor={colors.black}
            title="Postar"
            textColor={colors.white}
            disabled={text.length < 1}
          >
            Postar
          </Button>
        </div>
      </S.TweetContainer>

      {activeTab === 'forYou' && (
        <ul>{isLoadingForYou ? <Loader /> : renderTweets(forYouTweets)}</ul>
      )}

      {activeTab === 'following' && (
        <ul>
          {isLoadingFollowing ? <Loader /> : renderTweets(followingTweets)}
        </ul>
      )}
    </S.MainContent>
  )
}

export default Posts
