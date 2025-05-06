import { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { colors, MainContent, ProfileAvatar, ProfileName } from '../../styles'
import Button from '../Button'
import UserAvatar from '../UserAvatar'
import {
  useCreateCommentMutation,
  useGetCommentsQuery
} from '../../services/comment.api'

import {
  useGetTweetQuery,
  useLikeTweetMutation
} from '../../services/tweet.api'

import { formatRelativeDate, getFirstLetterAndColor } from '../../utils'

import shareIcon from '../../assets/share.svg'
import heartIcon from '../../assets/heart.svg'
import heartIconRed from '../../assets/heartRed.svg'
import statisticIcon from '../../assets/statistic.svg'
import commentsIcon from '../../assets/comments.svg'
import arrow from '../../assets/arrow.svg'

import * as S from './styles'
import { Loader2 } from '../Loaders'

const Post = () => {
  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const [likeTweet] = useLikeTweetMutation()
  const [createComment] = useCreateCommentMutation()
  const navigate = useNavigate()
  const handleLike = (tweetId: number) => {
    likeTweet(tweetId)
  }
  const { id } = useParams()
  const tweetId = Number(id)

  const { data: comments } = useGetCommentsQuery(tweetId || -1, {
    skip: !tweetId
  })
  const { data: tweet } = useGetTweetQuery(tweetId)

  if (!tweet) {
    return <Loader2 />
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setText(value)

    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = '28px'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }

  const handlePostComment = () => {
    if (!text.trim()) return

    createComment({ tweetId: tweet.id, body: { content: text } })
      .unwrap()
      .then(() => {
        setText('')
        if (textareaRef.current) {
          textareaRef.current.style.height = '28px'
        }
      })
  }

  const tweetAvatar = getFirstLetterAndColor(tweet.username, tweet.user)

  return (
    <MainContent>
      <S.TopBar>
        <img src={arrow} onClick={() => navigate('/feed')} alt="Voltar" />
        <p>Post</p>
      </S.TopBar>

      <S.Content>
        <S.Section className="display align">
          <ProfileAvatar style={{ backgroundColor: tweetAvatar.avatarColor }}>
            {tweetAvatar.firstLetter}
          </ProfileAvatar>
          <ProfileName>{tweet.username}</ProfileName>
        </S.Section>

        <S.Section>
          <S.Meta>
            <p>{tweet.content}</p>
            <p className="date">{formatRelativeDate(tweet.created_at)}</p>
          </S.Meta>
        </S.Section>

        <S.Section>
          <S.Actions>
            <li>
              <img
                className="hover-action"
                src={commentsIcon}
                alt="Comentários"
              />
              <span>{tweet.comments_count}</span>
            </li>
            <li>
              <img src={shareIcon} alt="Compartilhamentos" />
              <span>0</span>
            </li>
            <li>
              <img
                className="hover-action"
                onClick={() => handleLike(tweet.id)}
                src={tweet.is_liked ? heartIconRed : heartIcon}
                alt="Curtidas"
              />
              <span>{tweet.likes_count}</span>
            </li>
            <li>
              <img src={statisticIcon} alt="Visualizações" />
              <span>0</span>
            </li>
          </S.Actions>
        </S.Section>

        <S.Section className="display padding">
          <UserAvatar />
          <S.InputComment>
            <textarea
              ref={textareaRef}
              value={text}
              onInput={handleChange}
              placeholder="Postar sua resposta"
              maxLength={220}
            ></textarea>
            <Button
              onClick={handlePostComment}
              type="button"
              bgColor={colors.black}
              title="Responder"
              textColor={colors.white}
              disabled={text.length < 1}
            >
              Responder
            </Button>
          </S.InputComment>
        </S.Section>
      </S.Content>

      {comments?.map((comment) => {
        const { avatarColor, firstLetter } = getFirstLetterAndColor(
          tweet.username,
          tweet.user
        )

        return (
          <S.Content className="display" key={comment.id}>
            <S.Section className="padding-tp-bt">
              <ProfileAvatar style={{ backgroundColor: avatarColor }}>
                {firstLetter}
              </ProfileAvatar>
            </S.Section>
            <S.Section className="padding-tp-bt">
              <div className="display">
                <ProfileName>{comment.username}</ProfileName>
                <p className="date">
                  {'· ' + formatRelativeDate(comment.created_at)}
                </p>
              </div>
              <p className="padding-left margin-tp">{comment.content}</p>
            </S.Section>
          </S.Content>
        )
      })}
    </MainContent>
  )
}

export default Post
