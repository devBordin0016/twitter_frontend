/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react'

import { colors, MainContent, ProfileAvatar, ProfileName } from '../../styles'
import { formatRelativeDate, getFirstLetterAndColor } from '../../utils'
import Button from '../Button'

import {
  useGetTweetsQuery,
  useGetFollowingTweetsQuery,
  useCreateTweetMutation,
  useLikeTweetMutation
} from '../../services/tweet.api'

import shareIcon from '../../assets/share.svg'
import statisticIcon from '../../assets/statistic.svg'
import heartIcon from '../../assets/heart.svg'
import heartIconRed from '../../assets/heartRed.svg'
import commentsIcon from '../../assets/comments.svg'

import * as S from './styles'
import { Loader2 } from '../Loaders'
import UserAvatar from '../UserAvatar'
import { useNavigate } from 'react-router-dom'

const Posts = () => {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const [activeTab, setActiveTab] = useState<'forYou' | 'following'>('forYou')
  const [createTweet] = useCreateTweetMutation()
  const [likeTweet] = useLikeTweetMutation()
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

  const handleLike = (tweetId: number) => {
    likeTweet(tweetId)
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

  const renderTweets = (tweets: any[]) =>
    tweets.map((tweet) => {
      const { avatarColor, firstLetter } = getFirstLetterAndColor(
        tweet.username,
        tweet.user
      )
      return (
        <li key={tweet.id}>
          <S.Container>
            <S.Sections className="width-profile">
              <ProfileAvatar style={{ backgroundColor: avatarColor }}>
                {firstLetter}
              </ProfileAvatar>
            </S.Sections>
            <S.Sections>
              <S.Meta>
                <ProfileName>{tweet.username}</ProfileName>
                <p className="date">
                  {'· ' + formatRelativeDate(tweet.created_at)}
                </p>
              </S.Meta>
              <S.Content>{tweet.content}</S.Content>
              <S.Actions>
                <div>
                  <img
                    className="hover-action"
                    src={commentsIcon}
                    alt="Comentários"
                    onClick={() => navigate(`/tweet/${tweet.id}`)}
                  />
                  <span>{tweet.comments_count}</span>
                </div>
                <div>
                  <img src={shareIcon} alt="Compartilhamentos" />
                  <span>0</span>
                </div>
                <div>
                  <img
                    className="hover-action"
                    onClick={() => handleLike(tweet.id)}
                    src={tweet.is_liked ? heartIconRed : heartIcon}
                    alt="Curtidas"
                  />
                  <span>{tweet.likes_count}</span>
                </div>
                <div>
                  <img src={statisticIcon} alt="Visualizações" />
                  <span>0</span>
                </div>
              </S.Actions>
            </S.Sections>
          </S.Container>
        </li>
      )
    })

  return (
    <MainContent>
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

      <S.Container>
        <S.Sections className="width-profile">
          <UserAvatar />
        </S.Sections>
        <S.Sections className="text-width">
          <S.InputWrapper>
            <textarea
              ref={textareaRef}
              value={text}
              onInput={handleChange}
              placeholder="O que está acontecendo?"
              maxLength={220}
            />
          </S.InputWrapper>
          <div className="wrapper">
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
        </S.Sections>
      </S.Container>

      {activeTab === 'forYou' && (
        <ul>{isLoadingForYou ? <Loader2 /> : renderTweets(forYouTweets)}</ul>
      )}

      {activeTab === 'following' && (
        <ul>
          {isLoadingFollowing ? <Loader2 /> : renderTweets(followingTweets)}
        </ul>
      )}
    </MainContent>
  )
}

export default Posts
